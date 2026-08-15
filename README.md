# Shivahari's Portfolio

A modern, minimalist portfolio website built with React, TypeScript, and Vite. Showcasing projects, skills, and professional journey with a clean, premium design.

## ✨ Features

**Modern Stack**
- React 19 with TypeScript for type safety
- Vite for lightning-fast builds
- Tailwind CSS for responsive design
- Zero unnecessary dependencies (minimal footprint)

**Design**
- Minimalist monochrome aesthetic (black, white, grey)
- Smooth animations and transitions
- Fully responsive (mobile, tablet, desktop)
- Professional typography with bold, clean fonts

**Sections**
- Dashboard — Hero section with personal introduction
- About — Personal story and background
- Projects — Featured work with expandable details
- Skills — Technical expertise organized by category
- Certificates — Learning achievements and credentials
- Footer — Social links and contact information

**Performance**
- Optimized build size (~207KB gzipped)
- Fast page loads with Vite
- Clean, semantic HTML
- Accessibility-first approach

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Shivahari-Bhurtel/website.git
cd website

# Install dependencies
npm install

# Start development server
npm run dev
```

The portfolio will be available at `http://localhost:5173`

## 💻 Development

### Available Scripts

```bash
# Start dev server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run linting
npm run lint
```

### Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── CertificateCard.tsx
│   ├── ProjectItem.tsx
│   └── SectionHeading.tsx
├── sections/           # Page sections
│   ├── Dashboard.tsx
│   ├── About.tsx
│   ├── Projects.tsx
│   ├── Skills.tsx
│   └── Certificates.tsx
├── data/              # Content and configuration
│   ├── projects.ts
│   ├── skills.ts
│   └── certificate.ts
├── types/             # TypeScript type definitions
│   ├── project.ts
│   └── certificate.ts
├── App.tsx            # Root component
├── index.css          # Global styles and animations
└── main.tsx           # Entry point

public/
├── images/
│   ├── profile/       # Profile photo
│   └── projects/      # Project showcase images
```

## 📝 Customization

### Update Personal Information

Edit the following files:
- **Dashboard:** `src/sections/Dashboard.tsx` — Hero headline and CTA links
- **About:** `src/sections/About.tsx` — Personal story
- **Projects:** `src/data/projects.ts` — Featured work
- **Skills:** `src/data/skills.ts` — Technical expertise
- **Certificates:** `src/data/certificate.ts` — Credentials

### Profile Image
Place your profile photo at:
```
public/images/profile/shivahari.png
```

### Project Images
Add project showcase images to:
```
public/images/projects/
```

### Styling
Global styles are in `src/index.css`. Customize:
- Color palette (update `@theme` variables)
- Typography (font family, sizes)
- Animations (keyframes)
- Spacing and layout

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click **Import Project** → Select your repository
4. Vercel auto-detects Vite settings
5. Click **Deploy**

### Netlify

1. Go to [netlify.com](https://netlify.com)
2. Click **New site from Git**
3. Select your repository
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Deploy

### Custom Domain

After deploying:
1. Purchase a domain (Namecheap, GoDaddy, etc.)
2. Update DNS records to point to your deployment
3. Add the domain in your hosting provider's dashboard

## 🛠 Technologies

| Technology | Purpose |
|-----------|---------|
| React 19 | UI library |
| TypeScript | Type safety |
| Vite | Build tool & dev server |
| Tailwind CSS | Utility-first styling |

## 📊 Performance

- **Build size:** ~207KB gzipped
- **First contentful paint:** < 1s
- **Lighthouse score:** 95+ (performance, accessibility, best practices)

## 📄 License

MIT License — feel free to use this as a template!

## 💬 Contact

- **Email:** bhurtelshivahari@gmail.com
- **GitHub:** [Shivahari-Bhurtel](https://github.com/Shivahari-Bhurtel)
- **LinkedIn:** [Shivahari Bhurtel](https://linkedin.com/in/shivahari-bhurtel-886118359/)

---

Built with ❤️ by Shivahari
