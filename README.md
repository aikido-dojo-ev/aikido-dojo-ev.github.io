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

The site is built as a static site and can be deployed to any static hosting service:

- GitHub Pages
- Netlify
- Vercel
- AWS S3 + CloudFront
- Any web server

Simply upload the contents of the `build` directory.

## 📄 License

See [LICENSE](LICENSE) file for details.

