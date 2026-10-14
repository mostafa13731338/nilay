/**
 * Central Configuration for Nilay Trade
 * All company details, contact channels, and founder information are centralized here for easy editing.
 */

export interface ContactConfig {
  companyName: {
    fa: string;
    en: string;
  };
  tagline: {
    fa: string;
    en: string;
  };
  founder: {
    name: {
      fa: string;
      en: string;
    };
    title: {
      fa: string;
      en: string;
    };
    bio: {
      fa: string;
      en: string;
    };
  };
  contact: {
    email: string;
    phone: string; // Landline
    mobile: string; // Mobile with WhatsApp, Bale, Telegram
    whatsapp: string;
    whatsappLink: string;
    telegram: string;
    telegramLink: string;
    bale: string;
    baleLink: string;
    instagramHandle: string;
    instagramUrl: string;
    linkedinUrl: string;
    officeLocation: {
      fa: string;
      en: string;
    };
  };
  brandColors: {
    navy: string;
    teal: string;
    gold: string;
    white: string;
    lightBg: string;
  };
}

export const siteConfig: ContactConfig = {
  companyName: {
    fa: "نیلای ترید",
    en: "Nilay Trade",
  },
  tagline: {
    fa: "پیوند کسب‌وکارهای ایرانی به بازارهای بین‌المللی",
    en: "Connecting Iranian Business to Global Markets",
  },
  founder: {
    name: {
      fa: "مصطفی خادمی",
      en: "Mostafa Khademi",
    },
    title: {
      fa: "بنیان‌گذار و مدیرعامل",
      en: "Founder & CEO",
    },
    bio: {
      fa: "تمرکز بر توسعه بازارهای صادراتی، پژوهش داده‌محور بازار و ایجاد پیوندهای تجاری ساختاریافته میان تولیدکنندگان توانمند ایرانی و خریداران بین‌المللی. رویکرد ما در نیلای ترید بر پایه شناخت عمیق بازار پیش از اقدام، شفافیت تجاری و توسعه پایدار ارتباطات B2B استوار است.",
      en: "Focused on international export market development, data-informed market research, and establishing structured B2B commercial connectivity between capable Iranian manufacturers and international buyers. Our methodology at Nilay Trade is rooted in research before action, commercial transparency, and sustainable long-term trade relationships.",
    },
  },
  contact: {
    email: "contact@nilaytrade.com",
    phone: "۰۲۱-۵۵۶۴۷۸۳۹", // Landline: 02155647839
    mobile: "۰۹۱۰۸۶۵۱۲۲۱", // Mobile: 09108651221 (WhatsApp, Bale, Telegram)
    whatsapp: "+98 910 865 1221",
    whatsappLink: "https://wa.me/989108651221",
    telegram: "@NilayTrade_Admin",
    telegramLink: "https://t.me/+989108651221",
    bale: "۰۹۱۰۸۶۵۱۲۲۱",
    baleLink: "https://ble.ir",
    instagramHandle: "@nilay_trading",
    instagramUrl: "https://instagram.com/nilay_trading",
    linkedinUrl: "https://linkedin.com/company/nilay-trade",
    officeLocation: {
      fa: "تهران، خیابان کارگر جنوبی، خیابان زربافیان، پلاک ۴۹، واحد ۳",
      en: "Unit 3, No. 49, Zarbafian St., South Kargar St., Tehran, Iran",
    },
  },
  brandColors: {
    navy: "#071D35",
    teal: "#0F8B8D",
    gold: "#C9A227",
    white: "#FFFFFF",
    lightBg: "#F5F7FA",
  },
};
