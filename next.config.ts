import type { NextConfig } from "next";
import { withPayload } from "@payloadcms/next/withPayload";

const nextConfig: NextConfig = {
  allowedDevOrigins: ['myspace-calzone-try.ngrok-free.dev'],
};

export default withPayload(nextConfig);