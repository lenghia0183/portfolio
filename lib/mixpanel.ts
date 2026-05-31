import mixpanel from "mixpanel-browser";

const TOKEN = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN!;

let initialized = false;

export const EVENTS = {
  // Trang
  XEM_TRANG: "Xem trang",

  // Điều hướng
  BAM_DIEU_HUONG: "Bấm điều hướng",
  DOI_NGON_NGU: "Đổi ngôn ngữ",
  DOI_GIAO_DIEN: "Đổi giao diện",

  // Hero
  BAM_XEM_DU_AN: "Bấm xem dự án",
  BAM_LIEN_HE: "Bấm liên hệ",
  HOVER_ANH_CHAN_DUNG: "Hover ảnh chân dung",

  // Dự án
  BAM_SHOPIFY_APP_STORE: "Bấm Shopify App Store",
  BAM_GITHUB: "Bấm GitHub dự án",
  BAM_LIVE_DEMO: "Bấm live demo",
  BAM_XEM_TAT_CA_DU_AN: "Bấm xem tất cả dự án",
  BAM_TAI_XUONG_CV: "Tải CV",

  // Liên hệ
  SAO_CHEP_EMAIL: "Sao chép email",
  BAM_LINK_EMAIL: "Bấm link email",
  BAM_SO_DIEN_THOAI: "Bấm số điện thoại",
  BAM_MANG_XA_HOI: "Bấm mạng xã hội",
  BAM_LAM_VIEC_CUNG_NHAU: "Bấm làm việc cùng nhau",
} as const;

function initMixpanel(): void {
  if (initialized || typeof window === "undefined" || !TOKEN) return;
  mixpanel.init(TOKEN, {
    track_pageview: false,
    persistence: "localStorage",
    ignore_dnt: false,
  });
  initialized = true;
}

export function track(event: string, props?: Record<string, unknown>): void {
  if (typeof window === "undefined") return;
  initMixpanel();
  mixpanel.track(event, {
    url: window.location.pathname,
    giao_dien: document.documentElement.classList.contains("dark") ? "tối" : "sáng",
    ...props,
  });
}
