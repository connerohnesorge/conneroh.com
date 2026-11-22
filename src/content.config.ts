import { defineCollection, reference } from "astro:content";
import { file, glob } from "astro/loaders";
import { z } from "astro/zod";

const groups = defineCollection({
  loader: file("src/content/groups.yaml"),
  schema: z.object({
    summary: z.string(),
    order: z.number().int(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "*.md", base: "src/content/projects" }),
  schema: z.object({
    title: z.string(),
    repo: z.url(),
    groups: z.array(reference("groups")).min(1),
    lang: z.string(),
    stars: z.number().int().optional(),
    featured: z.boolean().default(true),
    order: z.number().int(),
  }),
});

const experience = defineCollection({
  loader: file("src/content/experience.yaml"),
  schema: z.object({
    role: z.string(),
    org: z.string(),
    summary: z.string().optional(),
    period: z.string(),
    order: z.number().int(),
  }),
});

const posts = defineCollection({
  loader: glob({ pattern: "*.md", base: "src/content/posts" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    created: z.coerce.date(),
    updated: z.coerce.date().optional(),
  }),
});

export const collections = { groups, projects, experience, posts };
