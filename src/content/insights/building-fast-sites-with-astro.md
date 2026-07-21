---
title: "Building Fast Marketing Sites with Astro"
description: "Why we default to Astro for content-driven client websites — and how it changes the performance math."
pubDate: 2026-06-30
author: "Aptivista Engineering"
authorRole: "Solutions Engineering"
tags: ["solutions", "astro", "performance"]
category: "solutions"
readingTime: "4 min"
draft: false
---

## The default tradeoff

Most marketing sites are built with a framework that ships a JavaScript bundle to render content that is mostly static. The result: pages that could be instant take meaningfully longer to become interactive, and content teams need a developer for every edit.

## Why Astro changes the math

Astro ships zero JavaScript by default. Pages are static HTML, and you opt into interactivity only where it matters — a contact form, a filter, a mobile nav. Content lives in typed collections, so editors write Markdown and the build catches mistakes.

For a consultancy building client sites, this means three concrete wins:

1. **Performance** — static HTML, optimized images, no runtime JS tax. Lighthouse scores stay high without heroics.
2. **Editability** — content in collections means non-developers can ship pages and posts.
3. **Honesty** — the type system catches broken frontmatter at build time, not on a client's screen.

## When not to use it

Astro is ideal for content-driven sites — marketing, docs, blogs, landing pages. It's not the right tool for an application with heavy, stateful interactivity behind a login. For those, we reach for a different tool. The framework should follow the problem.

## The takeaway

Choosing Astro for client marketing sites isn't about chasing the newest tool. It's about matching the tool to the shape of the work — and giving clients a site that's fast, maintainable, and editable long after we hand it over.
