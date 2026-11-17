import { Project } from '@/types/project';

export const defaultProjects: Project[] = [
  {
    id: 'mythium-ecommerce',
    title: 'MYTHIUM',
    subtitle: 'Full-Stack E-commerce Platform',
    category: 'Full-stack development',
    badge: 'Live in production',
    projectType: 'Client project (Unpaid)',
    role: 'Full-Stack Developer',
    status: 'Live in Production',
    websiteUrl: 'https://mythiumbd.com',
    shortDescription:
      "A production e-commerce platform built for a men's clothing business, providing customers with an online shopping experience and administrators with tools to manage products and orders.",
    images: [
      {
        url: '/assets/projects/mythium/Mythium-Premium-Men-s-Collection-11-15-2026_08_41_PM.png',
        title: 'Storefront & Curated Drops',
        subtitle: 'Hero showcase, new arrivals, and category-first visual navigation',
      },
      {
        url: '/assets/projects/mythium/books.png',
        title: 'Product Catalog & Dynamic Filtering',
        subtitle: 'Filter by category, size, price range (BDT), color, and real-time availability',
      },
      {
        url: '/assets/projects/mythium/Screenshot_1.png',
        title: 'Product Detail & Inventory State',
        subtitle: 'Size selector, color variants, size chart popup, and WhatsApp consultation',
      },
      {
        url: '/assets/projects/mythium/Screenshot_2.png',
        title: 'Slide-Out Cart & Instant Summary',
        subtitle: 'Real-time item counter, total discount savings calculation, and one-click checkout',
      },
      {
        url: '/assets/projects/mythium/Screenshot_3.png',
        title: 'Customer Profile & Address Book',
        subtitle: 'Verified account management with structured Division / District / Thana delivery inputs',
      },
      {
        url: '/assets/projects/mythium/Screenshot_4.png',
        title: 'Admin Store Analytics & Sales Pipeline',
        subtitle: 'Live revenue metrics, order statuses, product counts, and courier balance tracking',
      },
      {
        url: '/assets/projects/mythium/Screenshot_5.png',
        title: 'Admin Catalog & Stock Control',
        subtitle: 'Table view with status tags (Active/Draft/Archived), stock counts, and instant editing',
      },
      {
        url: '/assets/projects/mythium/Screenshot_6.png',
        title: 'Admin Order Management & Courier Sync',
        subtitle: 'Invoice lookup, multi-stage delivery pipeline, and courier integration',
      },
    ],
    techStack: [
      'Next.js',
      'TypeScript',
      'Node.js',
      'MongoDB',
      'REST API',
      'Tailwind CSS',
      'bKash Gateway',
      'Steadfast Courier',
    ],
  },
];
