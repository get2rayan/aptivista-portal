import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const insights = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/insights' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string(),
    authorRole: z.string().optional(),
    tags: z.array(z.string()).default([]),
    category: z.enum(['staffing', 'solutions', 'consulting', 'industry']),
    draft: z.boolean().default(false),
    heroImageAlt: z.string().optional(),
    readingTime: z.string().optional(),
  }),
});

const industries = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/industries' }),
  schema: z.object({
    name: z.string(),
    summary: z.string(),
    order: z.number().default(0),
    icon: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const solutions = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/solutions' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    icon: z.string().optional(),
    order: z.number().default(0),
    outcomes: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

const careers = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/careers' }),
  schema: z.object({
    title: z.string(),
    team: z.string(),
    location: z.string(),
    locationType: z.enum(['remote', 'hybrid', 'onsite']),
    employmentType: z.enum(['full-time', 'contract', 'part-time']),
    experienceLevel: z.enum(['entry', 'mid', 'senior', 'lead']),
    summary: z.string(),
    applyUrl: z.string().optional(),
    pubDate: z.coerce.date(),
    draft: z.boolean().default(false),
  }),
});

const testimonials = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/testimonials' }),
  schema: z.object({
    quote: z.string(),
    name: z.string(),
    role: z.string(),
    company: z.string().optional(),
    order: z.number().default(0),
  }),
});

export const collections = { insights, industries, solutions, careers, testimonials };
