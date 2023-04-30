import { z, defineCollection } from "astro:content";

const normalPageCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        tags: z.array(z.string()),
        image: z.string().optional(),
        navigationTitle: z.string(),
    }),
});

export const collections = {
    guides: normalPageCollection,
    meetup: normalPageCollection,
    "pages-jaunes": normalPageCollection,
};
