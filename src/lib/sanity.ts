import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

// Sanity project — created via Lovable Sanity MCP
export const sanityClient = createClient({
  projectId: "p2oejpl3",
  dataset: "production",
  apiVersion: "2024-10-01",
  useCdn: true,
  perspective: "published",
});

const builder = imageUrlBuilder(sanityClient);

type SanityImageSource = Parameters<ReturnType<typeof imageUrlBuilder>["image"]>[0];

export const urlFor = (source: SanityImageSource) => builder.image(source);

// Types
export interface SanityPost {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt?: string;
  mainImage?: SanityImageSource;
  category?: string;
  author?: string;
  publishedAt?: string;
}

export interface SanityService {
  _id: string;
  title: string;
  slug: { current: string };
  icon?: string;
  shortDescription: string;
  order?: number;
  features?: string[];
}

export const POSTS_QUERY = `*[_type == "post"] | order(publishedAt desc) {
  _id, title, slug, excerpt, mainImage, category, author, publishedAt
}`;

export const SERVICES_QUERY = `*[_type == "service"] | order(order asc) {
  _id, title, slug, icon, shortDescription, order, features
}`;
