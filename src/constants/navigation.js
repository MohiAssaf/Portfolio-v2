import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export const NAV_LINKS = [
  { href: "#about", label: "ABOUT ME" },
  { href: "#education", label: "EDUCATION" },
  { href: "#experience", label: "EXPERIENCE" },
];

export const CONTACT_INFO = [
  {
    type: "email",
    value: "mohamedabuassaf@gmail.com",
    href: "mailto:mohamedabuassaf@gmail.com",
  },
  { type: "phone", value: "+359 87 667 8863", href: "tel:+359876678863" },
  { type: "location", value: "Sofia, Bulgaria" },
];

export const SOCIAL_LINKS = [
  { href: "https://github.com/MohiAssaf", icon: FaGithub, label: "GitHub" },
  {
    href: "https://www.instagram.com/mo_assaf__/",
    icon: FaInstagram,
    label: "Instagram",
  },
  {
    href: "https://www.facebook.com/profile.php?id=100021934731677",
    icon: FaFacebook,
    label: "Facebook",
  },
  {
    href: "https://www.linkedin.com/in/mohamed-assaf-843324176/",
    icon: FaLinkedin,
    label: "LinkedIn",
  },
];
