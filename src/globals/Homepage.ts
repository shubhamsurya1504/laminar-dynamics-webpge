import type { GlobalConfig } from "payload";
import { DEFAULTS } from "@/content/defaults";

const textList = (
  name: string,
  label: string,
  defaultValue: { text: string }[],
  textarea = false,
) => ({
  name,
  label,
  type: "array" as const,
  defaultValue,
  fields: [{ name: "text", type: (textarea ? "textarea" : "text") as "text" }],
});

const image = (label = "Image", name = "image") => ({
  name,
  type: "upload" as const,
  relationTo: "media" as const,
  label: `${label} (leave empty to keep the current one)`,
});

function withWhyUsDefaults(doc: Record<string, unknown>) {
  const whyUs = (doc.whyUs as Record<string, unknown> | undefined) ?? {};
  const items = whyUs.items;
  const links = whyUs.ourWorkLinks;

  doc.whyUs = {
    label: whyUs.label ?? DEFAULTS.whyUs.label,
    ourWorkLabel: whyUs.ourWorkLabel ?? DEFAULTS.whyUs.ourWorkLabel,
    items:
      Array.isArray(items) && items.length > 0 ? items : DEFAULTS.whyUs.items,
    ourWorkLinks:
      Array.isArray(links) && links.length > 0 ? links : DEFAULTS.whyUs.ourWorkLinks,
  };

  return doc;
}

export const Homepage: GlobalConfig = {
  slug: "homepage",
  label: "Homepage Content",
  access: { read: () => true },
  admin: {
    description: "Edit every section of the v2 website. Leave images empty to keep defaults.",
  },
  hooks: {
    afterRead: [({ doc }) => withWhyUsDefaults(doc as Record<string, unknown>)],
  },
  fields: [
    {
      type: "tabs",
      tabs: [
        {
          label: "Hero",
          fields: [
            {
              name: "hero",
              type: "group",
              fields: [
                { name: "titleLead", type: "text", defaultValue: DEFAULTS.hero.titleLead },
                { name: "titleHighlight", type: "text", defaultValue: DEFAULTS.hero.titleHighlight },
                { name: "primaryCtaLabel", type: "text", defaultValue: DEFAULTS.hero.primaryCtaLabel },
                { name: "primaryCtaHref", type: "text", defaultValue: DEFAULTS.hero.primaryCtaHref },
                image("Background image"),
                image("Featured product image (Hummingbird)", "featuredImage"),
                {
                  name: "domains",
                  type: "array",
                  defaultValue: DEFAULTS.hero.domains,
                  fields: [{ name: "label", type: "text" }],
                },
                {
                  name: "stats",
                  type: "array",
                  defaultValue: DEFAULTS.hero.stats,
                  fields: [
                    { name: "value", type: "text" },
                    { name: "label", type: "text" },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: "About",
          fields: [
            {
              name: "about",
              type: "group",
              fields: [
                { name: "label", type: "text", defaultValue: DEFAULTS.about.label },
                { name: "heading", type: "text", defaultValue: DEFAULTS.about.heading },
                { name: "body", type: "textarea", defaultValue: DEFAULTS.about.body },
                { name: "tagline", type: "textarea", defaultValue: DEFAULTS.about.tagline },
                image("About page image"),
              ],
            },
          ],
        },
        {
          label: "Work & Service",
          fields: [
            {
              name: "services",
              type: "group",
              fields: [
                { name: "label", type: "text", defaultValue: DEFAULTS.services.label },
                { name: "heading", type: "text", defaultValue: DEFAULTS.services.heading },
                image("Work & Service page image"),
                {
                  name: "items",
                  type: "array",
                  defaultValue: DEFAULTS.services.items,
                  fields: [
                    { name: "no", type: "text" },
                    { name: "title", type: "text" },
                    { name: "points", type: "array", fields: [{ name: "text", type: "text" }] },
                  ],
                },
              ],
            },
            {
              name: "deepTech",
              type: "group",
              label: "Deep Tech",
              fields: [
                { name: "label", type: "text", defaultValue: DEFAULTS.deepTech.label },
                { name: "heading", type: "text", defaultValue: DEFAULTS.deepTech.heading },
                {
                  name: "pillars",
                  type: "array",
                  defaultValue: DEFAULTS.deepTech.pillars,
                  fields: [
                    { name: "title", type: "text" },
                    { name: "body", type: "textarea" },
                  ],
                },
                { name: "integrationTitle", type: "text", defaultValue: DEFAULTS.deepTech.integrationTitle },
                { name: "integrationBody", type: "textarea", defaultValue: DEFAULTS.deepTech.integrationBody },
              ],
            },
          ],
        },
        {
          label: "Why Us",
          fields: [
            {
              name: "whyUs",
              type: "group",
              fields: [
                { name: "label", type: "text", defaultValue: DEFAULTS.whyUs.label },
                {
                  name: "items",
                  type: "array",
                  label: "Items",
                  defaultValue: DEFAULTS.whyUs.items,
                  fields: [
                    { name: "title", type: "text" },
                    { name: "body", type: "textarea" },
                  ],
                },
                { name: "ourWorkLabel", type: "text", defaultValue: DEFAULTS.whyUs.ourWorkLabel },
                {
                  name: "ourWorkLinks",
                  type: "array",
                  label: "Our work links",
                  defaultValue: DEFAULTS.whyUs.ourWorkLinks,
                  fields: [
                    { name: "label", type: "text" },
                    { name: "href", type: "text" },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: "Testimonials",
          fields: [
            {
              name: "testimonials",
              type: "group",
              fields: [
                { name: "label", type: "text", defaultValue: DEFAULTS.testimonials.label },
                { name: "heading", type: "text", defaultValue: DEFAULTS.testimonials.heading },
                textList("items", "Testimonials", DEFAULTS.testimonials.items),
                {
                  name: "forSaleLabel",
                  type: "text",
                  defaultValue: DEFAULTS.testimonials.forSaleLabel,
                },
                image("For Sale image 1", "forSaleImage1"),
                image("For Sale image 2", "forSaleImage2"),
              ],
            },
          ],
        },
        {
          label: "Contact",
          fields: [
            {
              name: "contact",
              type: "group",
              fields: [
                { name: "label", type: "text", defaultValue: DEFAULTS.contact.label },
                { name: "headingLead", type: "text", defaultValue: DEFAULTS.contact.headingLead },
                { name: "headingHighlight", type: "text", defaultValue: DEFAULTS.contact.headingHighlight },
                { name: "description", type: "textarea", defaultValue: DEFAULTS.contact.description },
                { name: "email", type: "text", defaultValue: DEFAULTS.contact.email },
                { name: "webLabel", type: "text", defaultValue: DEFAULTS.contact.webLabel },
                { name: "webHref", type: "text", defaultValue: DEFAULTS.contact.webHref },
                { name: "domainsLine", type: "text", defaultValue: DEFAULTS.contact.domainsLine },
                { name: "footerLine", type: "text", defaultValue: DEFAULTS.contact.footerLine },
              ],
            },
          ],
        },
      ],
    },
  ],
};
