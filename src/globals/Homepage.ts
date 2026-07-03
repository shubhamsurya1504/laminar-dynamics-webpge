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

const image = (label = "Image") => ({
  name: "image",
  type: "upload" as const,
  relationTo: "media" as const,
  label: `${label} (leave empty to keep the current one)`,
});

export const Homepage: GlobalConfig = {
  slug: "homepage",
  label: "Homepage Content",
  access: { read: () => true },
  admin: {
    description: "Edit every section of the v2 website. Leave images empty to keep defaults.",
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
                {
                  name: "cycleSteps",
                  type: "array",
                  label: "Process cycle steps",
                  defaultValue: DEFAULTS.about.cycleSteps,
                  fields: [{ name: "label", type: "text" }],
                },
              ],
            },
          ],
        },
        {
          label: "Work",
          fields: [
            {
              name: "work",
              type: "group",
              fields: [
                { name: "label", type: "text", defaultValue: DEFAULTS.work.label },
                { name: "message", type: "text", defaultValue: DEFAULTS.work.message },
              ],
            },
          ],
        },
        {
          label: "Services",
          fields: [
            {
              name: "services",
              type: "group",
              fields: [
                { name: "label", type: "text", defaultValue: DEFAULTS.services.label },
                { name: "heading", type: "text", defaultValue: DEFAULTS.services.heading },
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
                  defaultValue: DEFAULTS.whyUs.items,
                  fields: [
                    { name: "title", type: "text" },
                    { name: "body", type: "textarea" },
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
                { name: "forSaleLabel", type: "text", defaultValue: DEFAULTS.testimonials.forSaleLabel },
                {
                  name: "forSaleItems",
                  type: "array",
                  defaultValue: DEFAULTS.testimonials.forSaleItems,
                  fields: [
                    { name: "title", type: "text" },
                    { name: "body", type: "textarea" },
                  ],
                },
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
