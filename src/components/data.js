import { FBIcon, WPIcon, YoutubeIcon, InstaIcon } from '../assets';

const navItems = [
  {
    name: 'Home',
    slug: 'home',
  },
  {
    name: 'services',
    slug: 'services',
  },
  {
    name: 'About us',
    slug: 'about-us',
  },
  {
    name: 'contact us',
    slug: 'contact',
  },
];

const navItems2 = [
  {
    name: 'Home',
    slug: '/',
  },
  {
    name: 'services',
    slug: '/',
  },
  {
    name: 'About us',
    slug: '/',
  },
  {
    name: 'contact us',
    slug: '/',
  },
];

const socialLinks = [
  {
    imageURL: FBIcon,
    slug: 'https://www.facebook.com/decentsettlement',
  },
  {
    imageURL: InstaIcon,
    slug: 'https://www.instagram.com/decentsettlement/',
  },
  {
    imageURL: YoutubeIcon,
    slug: 'https://www.youtube.com/@DecentSettlement',
  },
  {
    imageURL: WPIcon,
    slug: 'https://wa.me/+919824336161',
  },
];

const services = [
  'Personal Loan Settlement',
  'Business Loan Settlement',
  'Credit Card Settlement',
  'Anti-Harassment Service',
  'All Types of Loan Closure',
  'Credit Score Booster',
];

const resources = [
  'Personal Loan',
  'Business Loan',
  'Credit Card',
  'C.C. and O.D. Loan',
  'Gold Loan',
  'Bad Credit CIBIL Score',
];

export { navItems, socialLinks, services, resources, navItems2 };
