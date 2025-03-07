interface OpenGraphImage {
  url: string;
  width: number;
  height: number;
  alt: string;
  type?: string;
}

interface OpenGraphConfig {
  title: string;
  description: string;
  url: string;
  type: string;
  locale: string;
  site_name: string;
  images: OpenGraphImage[];
}

interface SchemaOrgPerson {
  "@type": "Person";
  name: string;
  url: string;
  jobTitle: string;
  skills: string[];
}

interface SEOConfig {
  title: string;
  description: string;
  keywords: string;
  canonical: string;
  locale: string;
  openGraph: OpenGraphConfig;
  metaRobots?: string;
  schemaOrg: SchemaOrgPerson;
}

const SEO: SEOConfig = {
  title: "Gamila | Full-Stack TypeScript Developer & Software Engineer",
  description: "Frontend developer specializing in TypeScript, React, and Next.js. Creating high-performance, scalable web applications with modern architecture and best practices. View my portfolio of technical projects.",
  keywords: "TypeScript Developer, React Developer, Next.js Expert, Web Performance Optimization, Software Architecture, JavaScript Engineering, Frontend Development, Clean Code, Full-Stack Development, Technical Solutions, System Design, API Development, State Management, Testing, CI/CD",
  canonical: "https://gamila-one.vercel.app",
  locale: "en_US",
  metaRobots: "index, follow",
  openGraph: {
    title: "Gamila | Frontend TypeScript Developer & Software Engineer",
    description: "Frontend developer specializing in TypeScript, React, and Next.js. Creating high-performance, scalable web applications with modern architecture and best practices. View my portfolio of technical projects.",
    url: "https://gamila-one.vercel.app/",
    type: "website",
    locale: "en_US",
    site_name: "Gamila Dev Portfolio",
    images: [
      {
        url: "/portfolio-preview.jpg",
        width: 1200,
        height: 630,
        alt: "Gamila - TypeScript Developer Portfolio",
        type: "image/jpeg"
      }
    ]
  },
  schemaOrg: {
    "@type": "Person",
    name: "Gamila",
    url: "https://gamila-one.vercel.app",
    jobTitle: "Full-Stack TypeScript Developer",
    skills: [
      "TypeScript",
      "React",
      "Next.js",
      "JavaScript",
      "Web Development",
      "Software Architecture",
      "API Design",
      "Performance Optimization"
    ]
  }
};

export default SEO;
