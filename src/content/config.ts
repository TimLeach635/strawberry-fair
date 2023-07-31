import { defineCollection, z } from "astro:content";

const about = defineCollection({
	schema: z.object({
		title: z.string(),
		subtitle: z.string().optional(),
		heroImage: z.string().optional(),
		heroImageDescription: z.string().optional(),
	}),
});

const blog = defineCollection({
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z
			.string()
			.or(z.date())
			.transform((val) => new Date(val)),
		heroImage: z.string().optional(),
	}),
});

export const collections = { about, blog };
