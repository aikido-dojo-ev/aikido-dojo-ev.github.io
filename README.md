# aikido-dojo-boberg-website

Web Präsenz für aikido-dojo-ev.de Aikido Verein

## 🥋 About

This is a modern static website for Aikido Dojo Boberg e.V., built with SvelteKit and featuring:

- **Modern Design** with custom color scheme (#212121 dark gray, #ab0b0b red)
- **Navigation Bar** with links to all pages and Instagram
- **Home Page** with hero section, description, and news feed
- **Blog System** powered by markdown files
- **Legal Pages** including Impressum and Datenschutzerklärung
- **Responsive Design** that works on all devices
- **Static Site Generation** for optimal performance

## 🚀 Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/jurijzahn8019/aikido-dojo-boberg-website.git
cd aikido-dojo-boberg-website

# Install dependencies
npm install
```

### Development

```bash
# Start the development server
npm run dev

# The site will be available at http://localhost:5173
```

### Building

```bash
# Build the static site
npm run build

# Preview the production build
npm run preview
```

The built site will be in the `build` directory, ready to be deployed to any static hosting service.

## 📝 Adding Blog Posts

To add a new blog post:

1. Create a new markdown file in `src/posts/` (e.g., `my-post.md`)
2. Add frontmatter with title, date, and excerpt:

```markdown
---
title: "My Post Title"
date: "2024-12-07"
excerpt: "A brief description of the post"
---

# My Post Title

Your content here...
```

3. The post will automatically appear in the blog list and on the home page

## 🎨 Customization

### Colors

The main colors are defined in `src/lib/styles/global.css`:
- Primary dark: `#212121`
- Accent red: `#ab0b0b`
- Text: `#000000`

### Content

- **Home page**: Edit `src/routes/+page.svelte`
- **Impressum**: Edit `src/routes/impressum/+page.svelte`
- **Datenschutz**: Edit `src/routes/datenschutz/+page.svelte`

## 📦 Deployment

### Automatic Deployment to GitHub Pages

This repository includes a GitHub Actions workflow that automatically deploys the site to GitHub Pages whenever changes are pushed to the `main` branch.

**How it works:**
1. On every push to `main`, the workflow triggers automatically
2. Dependencies are installed using `npm ci`
3. The site is built using `npm run build`
4. The contents of the `build/` directory are deployed to GitHub Pages
5. The site becomes available at the configured GitHub Pages URL

**Viewing Deployment Status:**
- Visit the **Actions** tab in the GitHub repository to see deployment progress
- Each deployment creates a new workflow run showing build and deploy steps
- The live site URL is displayed in the deployment environment after successful deployment

**Manual Deployment:**
The workflow runs automatically, but you can also:
- Manually trigger a deployment from the Actions tab
- View deployment history and logs for troubleshooting

### Alternative Deployment Options

The site is built as a static site and can also be deployed to other hosting services:

- Netlify
- Vercel
- AWS S3 + CloudFront
- Any web server

Simply upload the contents of the `build` directory after running `npm run build`.

## 📄 License

See [LICENSE](LICENSE) file for details.

