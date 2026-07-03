import type { CollectionConfig } from "payload";

export const Users: CollectionConfig = {
  slug: "users",
  admin: {
    useAsTitle: "email",
  },
  auth: true,
  fields: [
    // email and password are added automatically by `auth: true`
    {
      name: "name",
      type: "text",
    },
  ],
};
