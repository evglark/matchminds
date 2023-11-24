import ROUTES from '@/constants/routes';

export const API_URL = process.env.NEXT_PUBLIC_API_URL;
export const STORAGE_API_URL = process.env.NEXT_PUBLIC_STORAGE_API_URL;
export const SECRET = process.env.NEXT_PUBLIC_SECRET;
export const NEXTAUTH_URL = process.env.NEXT_PUBLIC_NEXTAUTH_URL;

export const LINKS = [
  { text: 'Home', link: ROUTES.DEFAULT },
  { text: 'About Us', link: ROUTES.DEFAULT },
  { text: 'Jobs', link: ROUTES.DEFAULT },
  { text: 'Applicants', link: ROUTES.DEFAULT },
  { text: 'Services', link: ROUTES.DEFAULT },
  { text: 'Pricing', link: ROUTES.DEFAULT },
];

export const FOOTER_LINKS = [
  { text: 'Terms of Service', link: ROUTES.DEFAULT },
  { text: 'Privacy Policy', link: ROUTES.DEFAULT },
  { text: 'Cookie Policy', link: ROUTES.DEFAULT },
];

export const NAVBAR_LINKS = [
  { text: 'Jobs', link: ROUTES.DEFAULT },
  { text: 'Applicants', link: ROUTES.DEFAULT },
  { text: 'Services', link: ROUTES.DEFAULT },
  { text: 'About Us', link: ROUTES.DEFAULT },
  { text: 'Pricing', link: ROUTES.DEFAULT },
];

export const SEPARATOR_DOT = '•';
