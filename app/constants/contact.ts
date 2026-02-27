/**
 * Central contact information for Adhra Amrit Agro Products LLP.
 * Single source of truth — update here to reflect across Contact page and Footer.
 */
export const COMPANY_NAME = "Adhra Amrit Agro Products LLP";

export const CONTACT = {
  companyName: COMPANY_NAME,
  millAddress: {
    line1: "Plot No. 9, Sector-23, Phase-III",
    line2: "HSIIDC Mega Food Park Industrial Estate",
    line3: "Barhi, Haryana – 131101, India",
  },
  phones: ["+91 9310004242", "+91 9891454553", "+91 8800031850"],
  email: "info@adhraamrit.com",
} as const;

/** Full address as a single string (e.g. for display or mailto context). */
export const ADDRESS_FULL = [
  CONTACT.millAddress.line1,
  CONTACT.millAddress.line2,
  CONTACT.millAddress.line3,
].join(", ");
