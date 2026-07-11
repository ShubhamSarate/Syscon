# SYSCON - Technology Solutions Website

A modern Next.js website for SYSCON Computers & Services, showcasing IT solutions, services, and case studies.

## Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern Components**: Modular React components for each section
- **SEO Optimized**: Metadata and semantic HTML
- **Performance**: Built with Next.js for optimal performance
- **TypeScript**: Type-safe development

## Sections

1. **Header** - Navigation and branding
2. **Hero** - Main headline and call-to-action
3. **Stats** - Key metrics and achievements
4. **Partners** - Trusted brands
5. **Services** - Core IT services
6. **Why Choose** - Company benefits
7. **Solutions** - Comprehensive product offerings
8. **Industries** - Sectors served
9. **Success Stories** - Case studies carousel
10. **CTA** - Final call-to-action
11. **Footer** - Contact and links

## Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building

```bash
npm run build
npm start
```

## Project Structure

```
syscon-website/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   └── components/
│       ├── Header.tsx
│       ├── Hero.tsx
│       ├── Stats.tsx
│       ├── Partners.tsx
│       ├── Services.tsx
│       ├── WhyChoose.tsx
│       ├── Solutions.tsx
│       ├── Industries.tsx
│       ├── SuccessStories.tsx
│       ├── CTA.tsx
│       └── Footer.tsx
├── package.json
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── postcss.config.js
```

## Customization

### Colors
Edit `tailwind.config.ts` to customize the color scheme:
- `primary`: #001f3f (Dark Blue)
- `accent`: #d64545 (Red)
- `light`: #f5f5f5 (Light Gray)

### Content
Update component files in `src/components/` to change text, images, and data.

### Images
Replace emoji placeholders with actual images:
- Update Hero section 3D illustration
- Replace WhyChoose office image
- Add success story images

## Technologies Used

- **Next.js 15**: React framework
- **TypeScript**: Type safety
- **Tailwind CSS**: Styling
- **React 18**: UI library

## License

© 2024 SYSCON. All rights reserved.
