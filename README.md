# Data Foods

Responsive, multi-page website for Data Foods (Pvt) Ltd., Lahore, Pakistan.

Live website: https://data-foods.netlify.app

Repository: https://github.com/Mohsin-SS/data-foods

Production deploys automatically from `main`. When moving to a custom domain, update the canonical/og:url tags, sitemap URLs, and robots.txt sitemap reference.

## Pages

- Home
- About
- Products and flour applications
- Quality
- Other Units
- Contact

## Local preview

From this directory:

```sh
python -m http.server 4173 --directory dist
```

Open `http://localhost:4173`. Edit the HTML files in `dist`, shared styles in `dist/styles.css`, and interactions in `dist/app.js`.

## Netlify

Import this repository in Netlify. Leave the base directory and build command empty. The publish directory is `dist`, configured in `netlify.toml`.

There are no package dependencies or build steps. Each page has its own `index.html`; no single-page-app fallback redirect is needed. Pushes to the connected production branch can trigger automatic deployments.

## Content and media

Logo and brand animations were supplied by the business. Facility photographs were reused from dataflourmills.com with the owner's authorization. Food and wheat imagery is illustrative AI-generated imagery. It is not a record of actual customer orders or employees.

Website content and brand/media assets are not licensed for third-party reuse merely because this repository is public.
