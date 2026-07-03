import path from "path";
import { fileURLToPath } from "url";

import { postgresAdapter } from "@payloadcms/db-postgres";
import { sqliteAdapter } from "@payloadcms/db-sqlite";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { buildConfig } from "payload";
import sharp from "sharp";

import { Users } from "@/collections/Users";
import { Media } from "@/collections/Media";
import { Homepage } from "@/globals/Homepage";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

function resolveDatabaseUrl(): string {
  return (
    process.env.DATABASE_URL ||
    process.env.POSTGRES_URL ||
    process.env.DATABASE_URL_POSTGRES_URL ||
    "file:./payload.db"
  );
}

function getDatabaseAdapter() {
  const url = resolveDatabaseUrl();

  if (url.startsWith("postgres://") || url.startsWith("postgresql://")) {
    return postgresAdapter({
      pool: {
        connectionString: url,
      },
    });
  }

  return sqliteAdapter({
    client: {
      url,
    },
  });
}

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media],
  globals: [Homepage],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: getDatabaseAdapter(),
  sharp,
});
