# Aptivista

A modern Astro-based marketing website for Aptivista, built with reusable components, content collections, and static pages for solutions, industries, careers, insights, and contact.

## Project structure

```text
/
├── public/                  # Static assets and public files
├── scripts/
│   └── relativize.mjs       # Post-build script for asset path normalization
├── src/
│   ├── components/          # Reusable Astro components such as header, footer, CTA, and modal
│   ├── content/             # Content collections for careers, industries, insights, solutions, and testimonials
│   ├── layouts/             # Shared page layouts
│   ├── pages/               # Route-based pages and dynamic content pages
│   ├── styles/              # Global stylesheet
│   ├── content.config.ts    # Content collection schema and configuration
│   └── ...
├── astro.config.mjs         # Astro configuration
├── package.json             # Scripts and dependencies
└── tsconfig.json            # TypeScript configuration
```

## Development

Run the following commands from the project root:

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
```

This runs the Astro production build and then executes the post-build script in [scripts/relativize.mjs](scripts/relativize.mjs).

## Preview

```sh
npm run preview
```
