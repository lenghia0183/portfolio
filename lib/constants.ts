// ─── Thông tin cá nhân ────────────────────────────────────────────────────────

export const OWNER = {
  name: "Le Cong Nghia",
  nameVi: "Lê Công Nghĩa",
  email: "lenghia0108@gmail.com",
  phone: "+84966859061",
  phoneDisplay: "0966 859 061",
  location: "Hanoi, Vietnam",
} as const;

// ─── Liên kết mạng xã hội ─────────────────────────────────────────────────────

export const SOCIAL_LINKS = {
  github: "https://github.com/lenghia0183",
  linkedin: "https://www.linkedin.com/in/nghia-le-366628384/",
  facebook: "https://www.facebook.com/nghia.cong.le.2024",
  email: `mailto:${OWNER.email}`,
  phone: `tel:${OWNER.phone}`,
} as const;

// ─── File tĩnh ────────────────────────────────────────────────────────────────

export const ASSETS = {
  cv: "/Le-Cong-Nghia-CV.pdf",
  portrait: "/images/photo2.jpg",
  portraitHover: "/images/photo1.jpg",
  polaroids: [
    { id: "a", rotate: -8, src: "/images/photo6.jpg" },
    { id: "b", rotate: 6,  src: "/images/photo2.jpg" },
    { id: "c", rotate: -4, src: "/images/photo4.jpg" },
    { id: "d", rotate: 7,  src: "/images/photo1.jpg" },
    { id: "e", rotate: -6, src: "/images/photo3.jpg" },
    { id: "f", rotate: 5,  src: "/images/photo5.jpg" },
  ],
} as const;
