"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Language = "en" | "vi";

type I18nContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (typeof dictionaries)[Language];
};

const STORAGE_KEY = "portfolio-language";

const sharedProjects = {
  en: [
    {
      title: "OPTIS Product Options, Variant",
      description:
        "Production Shopify application for complex product personalization, helping merchants configure option sets, conditional purchasing flows, and price-adjusted add-ons directly on the storefront.",
      meta: "Full-stack Engineer / 20,000+ installs / 5-star Shopify App Store",
      imageAlt: "OPTIS Shopify app product interface",
      category: "Shopify App",
      link: "https://apps.shopify.com/product-options-by-bss",
      linkLabel: "Shopify App Store",
      scale: "20,000+ installs",
      rating: "5-star Shopify App Store",
      features: [
        "Custom product options (dropdown, checkbox, swatch, file upload, text...)",
        "Conditional logic — show/hide options based on customer selections",
        "Add-on pricing per option",
        "Live preview — customers see changes in real time on the product page",
        "And more advanced customization features",
      ],
      responsibilities: [
        "Full-stack ownership — admin UI, backend APIs & storefront runtime",
        "Involved in the full product development process — from requirements analysis and technical design to feature development and production deployment",
        "Merchant support — resolving technical issues, supporting customers & contributing to growth in installs, reviews, and maintaining a 5★ rating",
      ],
      stack: [
        "React",
        "Remix",
        "NestJS",
        "KoaJS",
        "GraphQL",
        "MySQL",
        "Redis",
        "Shopify API",
      ],
    },
    {
      title: "OP Color Swatch Variant Images",
      description:
        "Built for Shopify variant experience app that turns complex catalogs into a clean visual buying flow with color swatches, variant-specific image galleries, combined listings, and SEO-friendly product navigation.",
      meta: "Full-stack Engineer / 10,000+ installs / 5-star Shopify App Store",
      imageAlt: "OP Color Swatch Shopify app variant interface",
      category: "Shopify App",
      link: "https://apps.shopify.com/optis-color-swatch-variants",
      linkLabel: "Shopify App Store",
      scale: "10,000+ installs",
      rating: "5-star Shopify App Store",
      features: [
        "Visual swatches replacing Shopify's default variant selector",
        "Variant-specific image galleries — each variant shows its own images",
        "Combined listings — merge separate products into one unified storefront listing",
        "Collection page swatches — browse variants without entering the product page",
        "And more display enhancement features",
      ],
      responsibilities: [
        "Full-stack ownership — admin UI, backend APIs & storefront runtime",
        "Involved in the full product development process — from requirements analysis and technical design to feature development and production deployment",
        "Merchant support — resolving technical issues, supporting customers & contributing to growth in installs, reviews, and maintaining a 5★ rating",
      ],
      stack: [
        "React",
        "Remix",
        "NestJS",
        "KoaJS",
        "GraphQL",
        "MySQL",
        "Redis",
        "Shopify API",
      ],
    },
    {
      title: "HAUIFOOD",
      description:
        "Dự án cá nhân trong giai đoạn đại học — ứng dụng e-commerce cho đặt món trực tuyến, tập trung vào trải nghiệm người dùng, quy trình đặt hàng và tương tác realtime.",
      meta: "Student project / Frontend Developer / 03/2024 - 06/2024",
      imageAlt: "HAUIFOOD student e-commerce project interface",
      category: "Student Project",
      link: "https://hauifood.com",
      linkLabel: "Live demo",
      githubLink: "https://github.com/haui-food",
      scale: "Personal student project",
      rating: "E-commerce frontend build",
      features: [
        "Trải nghiệm thương mại điện tử",
        "Luồng mua hàng & tương tác khách hàng",
        "Quản lý người dùng & xác thực",
        "Đồng bộ dữ liệu realtime",
        "Hỗ trợ đa ngôn ngữ",
      ],
      responsibilities: [
        "Phát triển frontend ReactJS",
        "Tích hợp API & xử lý dữ liệu",
        "Quản lý trạng thái ứng dụng",
        "Triển khai tương tác realtime",
        "Phân tích & xử lý lỗi",
      ],
      stack: [
        "ReactJS",
        "JavaScript",
        "Material UI",
        "Bootstrap",
        "Redux Toolkit",
        "Axios",
        "SCSS",
        "Socket.IO Client",
        "i18n-react",
      ],
    },
    {
      title: "Mid-Autumn",
      description:
        "Dự án cá nhân trong giai đoạn đại học — ứng dụng bán bánh trung thu trực tuyến, tập trung vào trải nghiệm mua hàng, quản lý người dùng và quy trình bán hàng trên nền tảng web.",
      meta: "Student project / Full-stack Developer / 06/2024 - 10/2024",
      imageAlt: "Mid-Autumn student full-stack project interface",
      category: "Student Project",
      link: "https://mid-autumn-beta.vercel.app",
      linkLabel: "Live demo",
      githubLink: "https://github.com/lenghia0183/Mid-Autumn",
      scale: "Personal student project",
      rating: "Full-stack web application",
      features: [
        "Trải nghiệm bán hàng trực tuyến",
        "Quản lý tài khoản & xác thực",
        "Quản lý media & nội dung",
        "Hệ thống email notifications",
        "Hỗ trợ đa ngôn ngữ",
      ],
      responsibilities: [
        "Full-stack",
        "Phát triển frontend ReactJS",
        "Xây dựng backend API",
        "Xác thực & quản lý người dùng",
        "Tích hợp dữ liệu & logic nghiệp vụ",
        "Triển khai & tối ưu ứng dụng",
      ],
      stack: [
        "ReactJS",
        "Tailwind CSS",
        "Axios",
        "SWR",
        "Formik",
        "Firebase",
        "ExpressJS",
        "MongoDB",
        "JWT",
        "Cloudinary",
        "NodeMailer",
      ],
    },
    {
      title: "VTI Manufacturing Management Systems",
      description:
        "Internal management systems for manufacturing enterprises — supporting factory operations, production workflows, warehouse management, quality control, and business processes. Internal tools with no public links available.",
      meta: "VTI Solutions / ReactJS Intern / Internal enterprise tools",
      imageAlt: "VTI internal manufacturing systems project",
      category: "Internal Enterprise Tools",
      linkLabel: "Private internal project",
      scale: "Manufacturing operations",
      rating: "No public link",
      features: [
        "Quản lý vận hành sản xuất",
        "Quy trình nhà máy thông minh",
        "Quản lý chất lượng",
        "Module nghiệp vụ doanh nghiệp",
        "Hệ thống quản trị nội bộ",
      ],
      responsibilities: [
        "Phát triển frontend ReactJS",
        "Triển khai tính năng nghiệp vụ",
        "Tích hợp API",
        "Phân tích & xử lý bugs",
      ],
      stack: ["ReactJS", "Material UI", "Redux", "Formik", "REST API", "Axios"],
    },
  ],
  vi: [
    {
      title: "OPTIS Product Options, Variant",
      description:
        "Shopify app cho product customization nâng cao — custom options, conditional logic, dynamic pricing và storefront product configuration vượt ngoài giới hạn variant mặc định của Shopify.",
      meta: "Full-stack Engineer / 20.000+ lượt cài đặt / 5 sao trên Shopify App Store",
      imageAlt: "Giao diện sản phẩm Shopify OPTIS",
      link: "https://apps.shopify.com/product-options-by-bss",
      scale: "20.000+ lượt cài đặt",
      rating: "5 sao trên Shopify App Store",
      features: [
        "Custom product options (dropdown, checkbox, swatch, file upload, text...)",
        "Conditional logic — hiện/ẩn option dựa trên lựa chọn của khách",
        "Add-on pricing theo từng option",
        "Live preview — khách thấy thay đổi ngay trên product page",
        "Và nhiều tính năng tùy biến nâng cao khác",
      ],
      responsibilities: [
        "Phụ trách full-stack — giao diện quản trị, backend API & storefront runtime",
        "Tham gia toàn bộ quá trình phát triển sản phẩm — từ phân tích yêu cầu, thiết kế kỹ thuật, phát triển tính năng đến triển khai production",
        "Tham gia merchant support — xử lý vấn đề kỹ thuật, hỗ trợ khách hàng & góp phần tăng lượt cài đặt, lượt đánh giá và duy trì mức 5★ cho ứng dụng",
      ],
      stack: [
        "React",
        "Remix",
        "NestJS",
        "KoaJS",
        "GraphQL",
        "MySQL",
        "Redis",
        "Shopify API",
      ],
    },
    {
      title: "OP Color Swatch Variant Images",
      description:
        "Shopify app cho variant experience nâng cao — nhiều kiểu hiển thị variant, variant-specific image galleries, product group, vượt ngoài giới hạn hiển thị variant mặc định của Shopify themes.",
      meta: "Full-stack Engineer / 10.000+ lượt cài đặt / 5 sao trên Shopify App Store",
      imageAlt: "Giao diện variant Shopify OP Color Swatch",
      link: "https://apps.shopify.com/optis-color-swatch-variants",
      scale: "10.000+ lượt cài đặt",
      rating: "5 sao trên Shopify App Store",
      features: [
        "Visual swatches thay thế variant selector mặc định của Shopify",
        "Variant image gallery — mỗi variant hiển thị bộ ảnh riêng",
        "Combined listings — gộp nhiều sản phẩm thành 1 listing trên storefront",
        "Collection page swatches — duyệt variant ngay tại trang collection",
        "Và nhiều tính năng hiển thị nâng cao khác",
      ],
      responsibilities: [
        "Phụ trách full-stack — giao diện quản trị, backend API & storefront runtime",
        "Tham gia toàn bộ quá trình phát triển sản phẩm — từ phân tích yêu cầu, thiết kế kỹ thuật, phát triển tính năng đến triển khai production",
        "Tham gia merchant support — xử lý vấn đề kỹ thuật, hỗ trợ khách hàng & góp phần tăng lượt cài đặt, lượt đánh giá và duy trì mức 5★ cho ứng dụng",
      ],
      stack: [
        "React",
        "Remix",
        "NestJS",
        "KoaJS",
        "GraphQL",
        "MySQL",
        "Redis",
        "Shopify API",
      ],
    },
    {
      title: "HAUIFOOD",
      description:
        "Dự án cá nhân trong giai đoạn đại học — ứng dụng e-commerce cho đặt món trực tuyến, tập trung vào trải nghiệm người dùng, quy trình đặt hàng và tương tác realtime.",
      meta: "Du an hoi sinh vien / Frontend Developer / 03/2024 - 06/2024",
      imageAlt: "Giao dien du an sinh vien HAUIFOOD",
      category: "Dự án sinh viên",
      link: "https://hauifood.com",
      linkLabel: "Live demo",
      githubLink: "https://github.com/haui-food",
      scale: "Dự án cá nhân",
      rating: "E-commerce · Frontend",
      features: [
        "Trải nghiệm thương mại điện tử",
        "Luồng mua hàng & tương tác khách hàng",
        "Quản lý người dùng & xác thực",
        "Đồng bộ dữ liệu realtime",
        "Hỗ trợ đa ngôn ngữ",
      ],
      responsibilities: [
        "Phát triển frontend ReactJS",
        "Tích hợp API & xử lý dữ liệu",
        "Quản lý trạng thái ứng dụng",
        "Triển khai tương tác realtime",
        "Phân tích & xử lý lỗi",
      ],
      stack: [
        "ReactJS",
        "JavaScript",
        "Material UI",
        "Bootstrap",
        "Redux Toolkit",
        "Axios",
        "SCSS",
        "Socket.IO Client",
        "i18n-react",
      ],
    },
    {
      title: "Mid-Autumn",
      description:
        "Dự án cá nhân trong giai đoạn đại học — ứng dụng bán bánh trung thu trực tuyến, tập trung vào trải nghiệm mua hàng, quản lý người dùng và quy trình bán hàng trên nền tảng web.",
      meta: "Du an hoi sinh vien / Full-stack Developer / 06/2024 - 10/2024",
      imageAlt: "Giao dien du an sinh vien Mid-Autumn",
      category: "Dự án sinh viên",
      link: "https://mid-autumn-beta.vercel.app",
      linkLabel: "Live demo",
      githubLink: "https://github.com/lenghia0183/Mid-Autumn",
      scale: "Dự án cá nhân",
      rating: "Full-stack · Web App",
      features: [
        "Trải nghiệm bán hàng trực tuyến",
        "Quản lý tài khoản & xác thực",
        "Quản lý media & nội dung",
        "Hệ thống email notifications",
        "Hỗ trợ đa ngôn ngữ",
      ],
      responsibilities: [
        "Full-stack",
        "Phát triển frontend ReactJS",
        "Xây dựng backend API",
        "Xác thực & quản lý người dùng",
        "Tích hợp dữ liệu & logic nghiệp vụ",
        "Triển khai & tối ưu ứng dụng",
      ],
      stack: [
        "ReactJS",
        "Tailwind CSS",
        "Axios",
        "SWR",
        "Formik",
        "Firebase",
        "ExpressJS",
        "MongoDB",
        "JWT",
        "Cloudinary",
        "NodeMailer",
      ],
    },
    {
      title: "VTI Manufacturing Management Systems",
      description:
        "Hệ thống quản lý nội bộ cho doanh nghiệp sản xuất — hỗ trợ quản lý vận hành nhà máy, quy trình sản xuất, quản lý kho, kiểm soát chất lượng và các nghiệp vụ doanh nghiệp. Tool nội bộ, không có public links.",
      meta: "VTI Solutions / ReactJS Intern / Internal enterprise tools",
      imageAlt: "Du an internal manufacturing systems tai VTI",
      category: "Hệ thống nội bộ",
      linkLabel: "Tool nội bộ — không có public link",
      scale: "Vận hành sản xuất",
      rating: "Không có public link",
      features: [
        "Quản lý vận hành sản xuất",
        "Quy trình nhà máy thông minh",
        "Quản lý chất lượng",
        "Module nghiệp vụ doanh nghiệp",
        "Hệ thống quản trị nội bộ",
      ],
      responsibilities: [
        "Phát triển frontend ReactJS",
        "Triển khai tính năng nghiệp vụ",
        "Tích hợp API",
        "Phân tích & xử lý bugs",
      ],
      stack: ["ReactJS", "Material UI", "Redux", "Formik", "REST API", "Axios"],
    },
  ],
} as const;

export const dictionaries = {
  en: {
    skipToContent: "Skip to main content",
    nav: {
      label: "Primary",
      home: "Home",
      projects: "Projects",
      about: "About",
      contact: "Contact",
      language: "Change language",
      english: "English",
      vietnamese: "Vietnamese",
      themeLight: "Switch to light theme",
      themeDark: "Switch to dark theme",
      themeToggle: "Toggle theme",
    },
    hero: {
      intro: "Le Cong Nghia",
      titleLine1: "Full-stack Developer",
      titleLine2: "Shopify App Developer",
      description:
        "Full-stack Engineer specializing in Shopify platform development — building end-to-end from backend APIs and admin systems to storefront runtime scripts running directly on merchant themes.",
      portraitAlt: "Le Cong Nghia developer portrait",
      viewWork: "View Projects",
    },
    contact: {
      button: "Contact",
      copied: "Email copied",
      copy: "Copy",
      showEmail: "Show email",
      title: "Let's work together",
      description:
        "Available for Shopify application development, full-stack web systems, and production-focused engineering work.",
      seeProjects: "View products",
      downloadCv: "Download CV",
      hireMe: "Hire Me",
      workTogether: "Let's Work Together",
      builtWith: "2026 © Built with Next.js",
      byline: "Le Cong Nghia",
      github: "GitHub",
      linkedin: "LinkedIn",
      email: "Email",
      phone: "Phone",
      facebook: "Facebook",
    },
    projectsPage: {
      title: "Products and student projects",
      description:
        "Production Shopify apps, internal enterprise work, and selected personal projects from my student years.",
    },
    projects: {
      title: "Products and projects",
      description:
        "Products I have built: from production Shopify apps serving tens of thousands of merchants, enterprise-grade internal management systems, to personal side projects.",
      viewAll: "View all projects",
      items: sharedProjects.en,
    },
    about: {
      greeting: "Hello, I'm",
      name: "Le Cong Nghia",
      paragraphs: [
        "Born in 2003, I am a Full-stack Developer specializing in building Shopify applications for merchants worldwide. I have end-to-end experience — from backend APIs and admin systems to storefront runtime scripts running directly on merchant themes.",
        "I currently work at BSS Commerce, focusing on Shopify platform development and production web systems built on the React ecosystem — serving over 30,000 merchants on the Shopify App Store.",
        "I write code that is clean, maintainable, and built to scale — and I enjoy exploring new technologies to apply them to real-world production problems.",
      ],
      experience: "Experience",
      education: "Education",
      skills: "Technical interests",
      stack: "Tech Stack",
      showLess: "Show less",
      showMore: "Show {count} more",
      resetStack: "Reset stack",
      skillsList: [
        "Frontend Architecture",
        "Clean Code",
        "Developer Experience",
        "Performance Engineering",
      ],
      techCategories: [
        ["Languages", "TypeScript", "JavaScript"],
        ["Frontend", "ReactJS", "Next.js", "Remix", "React Query", "React Hook Form", "Redux"],
        ["UI & Styling", "TailwindCSS", "Material UI", "Formik"],
        ["Backend", "NestJS", "Node.js", "ExpressJS", "KoaJS", "GraphQL"],
        ["Database", "MySQL", "MongoDB", "Redis"],
        ["Shopify Platform", "Shopify API", "Shopify CLI", "Shopify Storefront"],
        ["DevOps", "Docker", "Cloudflare", "CI/CD"],
        ["Cloud", "AWS S3", "Cloudflare"],
        ["AI Tools", "Claude Code", "Cursor", "Codex"],
        ["Domain", "Shopify", "Ecommerce", "CMS Systems"],
      ],
      educationItems: [
        {
          school: "Hanoi University of Industry",
          degree: "Master's — Information Systems",
          period: "2025 - Present",
          note: "In progress",
          logoUrl: "https://upload.wikimedia.org/wikipedia/vi/b/ba/Logo_Haui.png",
        },
        {
          school: "Hanoi University of Industry",
          degree: "Software Engineering",
          period: "2021 - 2025",
          note: "GPA 3.48 / 4.0",
          logoUrl: "https://upload.wikimedia.org/wikipedia/vi/b/ba/Logo_Haui.png",
        },
      ],
      experienceItems: [
        {
          company: "BSS Commerce",
          role: "Full-stack Developer / Shopify App Developer",
          period: "2025 - Present",
          context:
            "Xây dựng Shopify applications cho product customization, variant experience và các bài toán ecommerce phục vụ hàng chục nghìn merchant trên Shopify App Store.",
          responsibilities: [
            "Phát triển backend services & Shopify APIs",
            "Xây dựng hệ thống quản trị & trải nghiệm merchant",
            "Phát triển logic hoạt động trên theme của merchant",
            "Tích hợp Shopify platform services",
            "Hỗ trợ vận hành ứng dụng & xử lý vấn đề kỹ thuật",
          ],
          modules: [
            "OPTIS Product Options, Variant — 20,000+ installs · 5-star",
            "OP Color Swatch Variant Images — 10,000+ installs · 5-star",
          ],
          moduleLinks: [
            "/projects#optis",
            "/projects#op-swatch",
          ],
          stack: [
            "React",
            "Remix",
            "NestJS",
            "KoaJS",
            "ExpressJS",
            "GraphQL",
            "MySQL",
            "Redis",
            "Shopify API",
          ],
        },
        {
          company: "VTI Solutions",
          role: "ReactJS Intern / Frontend Developer",
          period: "06/2024 - 10/2024",
          context:
            "Tham gia phát triển 3 hệ thống quản lý nội bộ cho doanh nghiệp sản xuất: Yamaha WMSX (Smart Warehouse Management), Yamaha QMSX (Quality Management) và FujiX QMSX (Quality Management) — phục vụ vận hành nhà máy, kiểm soát chất lượng và các quy trình nghiệp vụ doanh nghiệp.",
          responsibilities: [
            "Module quản lý sản xuất & chất lượng",
            "Dashboard & quy trình nghiệp vụ doanh nghiệp",
            "Tích hợp API & xử lý dữ liệu frontend",
            "Phát triển UI components & hệ thống giao diện",
            "Phân tích & xử lý bugs",
          ],
          modules: [
            "Yamaha WMSX — Smart Warehouse Management System",
            "Yamaha QMSX — Quality Management System",
            "FujiX QMSX — Quality Management System",
          ],
          stack: ["ReactJS", "Material UI", "Redux", "Formik", "REST API", "Axios"],
        },
      ],
    },
  },
  vi: {
    skipToContent: "Bỏ qua đến nội dung chính",
    nav: {
      label: "Chính",
      home: "Trang chủ",
      projects: "Sản phẩm",
      about: "Giới thiệu",
      contact: "Liên hệ",
      language: "Đổi ngôn ngữ",
      english: "Tiếng Anh",
      vietnamese: "Tiếng Việt",
      themeLight: "Chuyển sang giao diện sáng",
      themeDark: "Chuyển sang giao diện tối",
      themeToggle: "Đổi giao diện",
    },
    hero: {
      intro: "Lê Công Nghĩa",
      titleLine1: "Full-stack Developer",
      titleLine2: "Shopify App Developer",
      description:
        "Full-stack Engineer chuyên Shopify ecosystem — có thể phát triển từ backend services, hệ thống quản trị đến storefront runtime chạy trực tiếp trên theme của merchant.",
      portraitAlt: "Chân dung lập trình viên Lê Công Nghĩa",
      viewWork: "Xem dự án",
    },
    contact: {
      button: "Liên hệ",
      copied: "Đã sao chép email",
      copy: "Sao chép",
      showEmail: "Hiện email",
      title: "Biến ý tưởng thành sản phẩm",
      description:
        "Nếu bạn quan tâm đến Shopify, phát triển sản phẩm web hoặc muốn cùng xây dựng một sản phẩm thực tế, hãy liên hệ với tôi.",
      seeProjects: "Xem sản phẩm",
      downloadCv: "Tải CV",
      hireMe: "Hire Me",
      workTogether: "Let's Work Together",
      builtWith: "2026 © Xây dựng với Next.js",
      byline: "Lê Công Nghĩa",
      github: "GitHub",
      linkedin: "LinkedIn",
      email: "Email",
      phone: "Số điện thoại",
      facebook: "Facebook",
    },
    projectsPage: {
      title: "Sản phẩm và dự án",
      description:
        "Các sản phẩm tôi đã xây dựng: từ Shopify apps production phục vụ hàng chục nghìn merchant, hệ thống quản lý nội bộ cấp doanh nghiệp, đến các side projects cá nhân.",
    },
    projects: {
      title: "Sản phẩm và dự án",
      description:
        "Các sản phẩm tôi đã xây dựng: từ Shopify apps production phục vụ hàng chục nghìn merchant, hệ thống quản lý nội bộ cấp doanh nghiệp, đến các side projects cá nhân.",
      viewAll: "Xem tất cả dự án",
      items: sharedProjects.vi,
    },
    about: {
      greeting: "Xin chào, tôi là",
      name: "Lê Công Nghĩa",
      paragraphs: [
        "Sinh năm 2003, tôi là Full-stack Developer chuyên xây dựng Shopify applications và các sản phẩm web hướng tới nhu cầu thực tế. Tôi có kinh nghiệm làm việc từ backend services, hệ thống quản trị đến các thành phần xử lý logic phục vụ trực tiếp trải nghiệm của merchant.",
        "Hiện tại, tôi đang làm việc tại BSS Commerce, tập trung vào Shopify platform development và phát triển các ứng dụng phục vụ hơn 30.000 merchant trên Shopify App Store.",
        "Tôi ưu tiên phần mềm có cấu trúc rõ ràng, dễ bảo trì và dễ mở rộng — đồng thời yêu thích việc tìm ra những cách tiếp cận phù hợp cho các bài toán thực tế.",
      ],
      experience: "Kinh nghiệm",
      education: "Học vấn",
      skills: "Lĩnh vực quan tâm",
      stack: "Tech Stack",
      showLess: "Thu gọn",
      showMore: "Hiện thêm {count}",
      resetStack: "Đặt lại stack",
      skillsList: [
        "Kiến trúc phần mềm",
        "Clean Code",
        "Developer Experience",
        "Tối ưu hiệu năng",
      ],
      techCategories: [
        ["Languages", "TypeScript", "JavaScript"],
        ["Frontend", "ReactJS", "Next.js", "Remix", "React Query", "React Hook Form", "Redux"],
        ["UI & Styling", "TailwindCSS", "Material UI", "Formik"],
        ["Backend", "NestJS", "Node.js", "ExpressJS", "KoaJS", "GraphQL"],
        ["Database", "MySQL", "MongoDB", "Redis"],
        ["Shopify Platform", "Shopify API", "Shopify CLI", "Shopify Storefront"],
        ["DevOps", "Docker", "Cloudflare", "CI/CD"],
        ["Cloud", "AWS S3", "Cloudflare"],
        ["AI Tools", "Claude Code", "Cursor", "Codex"],
        ["Domain", "Shopify", "Ecommerce", "CMS Systems"],
      ],
      educationItems: [
        {
          school: "Đại học Công nghiệp Hà Nội",
          degree: "Thạc sĩ — Hệ thống Thông tin",
          period: "2025 - Hiện tại",
          note: "Đang theo học",
          logoUrl: "https://upload.wikimedia.org/wikipedia/vi/b/ba/Logo_Haui.png",
        },
        {
          school: "Đại học Công nghiệp Hà Nội",
          degree: "Software Engineering",
          period: "2021 - 2025",
          note: "GPA 3.48 / 4.0",
          logoUrl: "https://upload.wikimedia.org/wikipedia/vi/b/ba/Logo_Haui.png",
        },
      ],
      experienceItems: [
        {
          company: "BSS Commerce",
          role: "Full-stack Developer / Shopify App Developer",
          period: "2025 - Present",
          context:
            "Xây dựng Shopify applications cho product customization, variant experience và các bài toán ecommerce phục vụ hàng chục nghìn merchant trên Shopify App Store.",
          responsibilities: [
            "Phát triển backend services & Shopify APIs",
            "Xây dựng hệ thống quản trị & trải nghiệm merchant",
            "Phát triển logic hoạt động trên theme của merchant",
            "Tích hợp Shopify platform services",
            "Hỗ trợ vận hành ứng dụng & xử lý vấn đề kỹ thuật",
          ],
          modules: [
            "OPTIS Product Options, Variant — 20.000+ lượt cài đặt · 5 sao",
            "OP Color Swatch Variant Images — 10.000+ lượt cài đặt · 5 sao",
          ],
          moduleLinks: [
            "/projects#optis",
            "/projects#op-swatch",
          ],
          stack: [
            "React",
            "Remix",
            "NestJS",
            "KoaJS",
            "ExpressJS",
            "GraphQL",
            "MySQL",
            "Redis",
            "Shopify API",
          ],
        },
        {
          company: "VTI Solutions",
          role: "ReactJS Intern / Frontend Developer",
          period: "06/2024 - 10/2024",
          context:
            "Tham gia phát triển 3 hệ thống quản lý nội bộ cho doanh nghiệp sản xuất: Yamaha WMSX (Smart Warehouse Management), Yamaha QMSX (Quality Management) và FujiX QMSX (Quality Management) — phục vụ vận hành nhà máy, kiểm soát chất lượng và các quy trình nghiệp vụ doanh nghiệp.",
          responsibilities: [
            "Module quản lý sản xuất & chất lượng",
            "Dashboard & quy trình nghiệp vụ doanh nghiệp",
            "Tích hợp API & xử lý dữ liệu frontend",
            "Phát triển UI components & hệ thống giao diện",
            "Phân tích & xử lý bugs",
          ],
          modules: [
            "Yamaha WMSX — Smart Warehouse Management System",
            "Yamaha QMSX — Quality Management System",
            "FujiX QMSX — Quality Management System",
          ],
          stack: ["ReactJS", "Material UI", "Redux", "Formik", "REST API", "Axios"],
        },
      ],
    },
  },
} as const;

const I18nContext = createContext<I18nContextValue | null>(null);

function getInitialLanguage(): Language {
  if (typeof window === "undefined") return "en";

  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "en" || stored === "vi") return stored;

  return window.navigator.language.toLowerCase().startsWith("vi") ? "vi" : "en";
}

export function I18nProvider({ children }: { children: ReactNode }): ReactNode {
  const [language, setLanguageState] = useState<Language>("en");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setLanguageState(getInitialLanguage());
      setReady(true);
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (!ready) return;
    document.documentElement.lang = language;
    window.localStorage.setItem(STORAGE_KEY, language);
  }, [language, ready]);

  const value = useMemo<I18nContextValue>(
    () => ({
      language,
      setLanguage: setLanguageState,
      t: dictionaries[language],
    }),
    [language]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nContextValue {
  const value = useContext(I18nContext);
  if (!value) {
    throw new Error("useI18n must be used within I18nProvider");
  }
  return value;
}
