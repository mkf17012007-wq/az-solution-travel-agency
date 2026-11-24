export const siteConfig = {
  name: "AZ Solution",
  legalName: "AZ Solution SARL",
  agencyName: "AZ Solution Travel Agency",
  foundedYear: 2022,
  domain: "www.azsolution.com",
  logo: "/images/logo-az.jpg",
  favicon: "/images/logo-url.jpg",
  description:
    "AZ Solution SARL vous accompagne en immigration et voyage, cours de langues, placement de personnel, puits et aménagement, immobilier et auto-école.",
  phoneDisplay: "+237 6 00 00 00 00",
  phoneHref: "tel:+237600000000",
  whatsappNumber: "237600000000",
  whatsappMessage:
    "Bonjour AZ Solution, je souhaite obtenir des informations sur vos services.",
  email: "contact@azsolution.com",
  addressLines: ["Douala & Yaoundé, Cameroun"],
  googleMapsUrl: "",
  hours: "Lun. – Sam. : 8h – 18h",
  socials: {
    facebook: "",
    instagram: "",
    linkedin: ""
  }
} as const;

export function whatsappHref(message?: string) {
  const text = encodeURIComponent(message ?? siteConfig.whatsappMessage);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${text}`;
}

export function mailtoHref(subject?: string) {
  return subject
    ? `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}`
    : `mailto:${siteConfig.email}`;
}
