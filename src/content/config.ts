import { z, defineCollection } from 'astro:content'

const apiCoreCli1 = defineCollection({})
const apiCoreConfig1 = defineCollection({})
const apiCoreJs1 = defineCollection({})

const blog = defineCollection({
  slug: ({ defaultSlug }) => {
    return `${defaultSlug}`
  },
  schema: {
    date: z.date(),
    title: z.string(),
    summary: z.string().optional(),
    image: z.string().optional(),
    authors: z.array(z.string()).optional(),
  },
})

const docsCore1 = defineCollection({})

export const collections = {
  blog,
  'api-core-cli-1': apiCoreCli1,
  'api-core-config-1': apiCoreConfig1,
  'api-core-js-1': apiCoreJs1,
  'docs-core-1': docsCore1,
}
