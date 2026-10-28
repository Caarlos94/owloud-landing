// The English blog's RSS feed (/en/blog/rss.xml); built in data/blog.ts
import type { APIRoute } from "astro";
import { rssFeed } from "../../../data/blog";

export const GET: APIRoute = ({ site }) => rssFeed("en", site!);
