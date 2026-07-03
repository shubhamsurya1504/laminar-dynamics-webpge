import type { CollectionConfig } from "payload";

export const Media: CollectionConfig = {
  slug: "media",
  access: {
    // Uploaded images are public so the website can display them.
    read: () => true,
  },
  admin: {
    useAsTitle: "filename",
  },
  upload: {
    // Files are stored on disk under /public/media and served from /media/<file>.
    staticDir: "public/media",
    mimeTypes: ["image/*"],
  },
  fields: [
    {
      name: "alt",
      type: "text",
      label: "Alt text (for accessibility & SEO)",
    },
  ],
};
