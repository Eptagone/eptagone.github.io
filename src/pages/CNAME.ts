/**
 * Name: pages/robots.txt.ts
 */

import type { APIRoute } from "astro";

const domain = new URL(import.meta.env.SITE).hostname;

export const GET: APIRoute = () => {
    return new Response(domain, {
        headers: {
            "Content-Type": "text/plain; charset=utf-8",
        },
    });
};
