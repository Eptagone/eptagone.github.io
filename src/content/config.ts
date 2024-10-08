/**
 * Name: content/config.ts
 * Description: Configuration file for the collection schema
 */

import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
    type: "content",
    schema: ({ image }) => z.object({
        title: z.string(),
        description: z.string(),
        publishDate: z.date(),
        tags: z.array(z.string()),
        image: image(),
    }),
});

const projectsCollection = defineCollection({
    type: "data",
    schema: z.object({
        name: z.string(),
        description: z.string(),
        link: z.string(),
        tags: z.array(z.string()),
    }),
});

export const collections = {
    blog: blogCollection,
    projects: projectsCollection,
};
