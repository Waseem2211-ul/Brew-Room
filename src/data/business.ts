/**
 * Central Business Configuration for THE BREW ROOM (தி ப்ரூ ரூம்)
 * All factual records are sourced from the verified Google listing at Savera Hotel, Mylapore.
 * Any unconfirmed attributes are explicitly marked with isVerified: false and verification notes.
 */

export interface VerificationField {
  field: string;
  label: string;
  currentValue: string;
  isVerified: boolean;
  notes: string;
}

export interface BusinessConfig {
  name: string;
  tamilName: string;
  tagline: string;
  supportingMessage: string;
  category: string;
  hotelAffiliation: string;
  address: {
    full: string;
    street: string;
    locality: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
  };
  contact: {
    publicPhone: string;
    phoneRaw: string;
    email: string | null;
  };
  reputation: {
    rating: number;
    reviewCount: number;
    platform: string;
    indicativeSpend: string;
  };
  serviceOptions: string[];
  schedule: {
    hoursNotice: string;
    isVerified: boolean;
    verificationNotice: string;
  };
  links: {
    mapsUrl: string;
    directionsUrl: string;
    reservationUrl: string | null;
    orderingUrl: string | null;
  };
  verificationAudit: VerificationField[];
}

export const BUSINESS_DATA: BusinessConfig = {
  name: "The Brew Room",
  tamilName: "தி ப்ரூ ரூம்",
  tagline: "A Little Escape in the Heart of Chennai.",
  supportingMessage:
    "Thoughtful plates, comforting coffee and unhurried moments surrounded by greenery.",
  category: "Coffee shop, garden café and dining destination",
  hotelAffiliation: "Savera Hotel, Mylapore",
  address: {
    full: "146, Dr Radha Krishnan Salai, Mylapore, Chennai, Tamil Nadu 600004, India",
    street: "146, Dr Radha Krishnan Salai",
    locality: "Mylapore",
    city: "Chennai",
    state: "Tamil Nadu",
    pincode: "600004",
    country: "India",
  },
  contact: {
    publicPhone: "+91 97109 47380",
    phoneRaw: "+919710947380",
    email: null, // Pending venue confirmation
  },
  reputation: {
    rating: 4.4,
    reviewCount: 3609,
    platform: "Google Maps",
    indicativeSpend: "₹400–₹600 per person",
  },
  serviceOptions: ["Dine-in", "Takeaway", "No-contact delivery"],
  schedule: {
    hoursNotice: "Venue listing indicates evening closing around 11:00 PM.",
    isVerified: false,
    verificationNotice:
      "Please verify daily operating hours directly with the café prior to your visit.",
  },
  links: {
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=The+Brew+Room+Savera+Hotel+Mylapore+Chennai",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=146+Dr+Radha+Krishnan+Salai+Mylapore+Chennai+600004",
    reservationUrl: null, // Table reservations are handled via phone +91 97109 47380 until official portal link is provided
    orderingUrl: null, // Delivery URLs to be connected with venue's authorized aggregator links
  },
  verificationAudit: [
    {
      field: "opening_hours",
      label: "Weekly Opening Hours",
      currentValue: "Indicative close: 11 PM (Requires complete weekday/weekend opening hours schedule)",
      isVerified: false,
      notes: "Do not invent daily opening hours; advise visitors to call venue.",
    },
    {
      field: "menu_pricing",
      label: "Official Printed Menu Prices",
      currentValue: "Indicative spend ₹400–₹600; specific item prices pending current card confirmation",
      isVerified: false,
      notes: "Display sample candidate dishes with explicit verification notices; hide unconfirmed exact rupees in proposal.",
    },
    {
      field: "booking_portal",
      label: "Table Reservation Gateway",
      currentValue: "Direct telephone booking (+91 97109 47380)",
      isVerified: true,
      notes: "No simulated booking form; routes directly to phone link.",
    },
    {
      field: "online_ordering",
      label: "Direct Online Delivery URL",
      currentValue: "Requires owner approval of official Zomato / Swiggy / direct link",
      isVerified: false,
      notes: "No fake checkout or payment forms.",
    },
    {
      field: "social_media",
      label: "Official Social Accounts",
      currentValue: "Savera Hotel / The Brew Room verified handles pending client onboarding",
      isVerified: false,
      notes: "Omit third-party placeholders to prevent dead/unverified links.",
    },
  ],
};
