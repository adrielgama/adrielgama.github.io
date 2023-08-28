import { CardProps } from '../../components/card/types/card';

export const projectList: CardProps[] = [
  {
    image: '/images/projects/fapp.jpg',
    altImage: 'desktop and mobile mockups farmácias app',
    title: 'Farmácias App',
    text: 'ReactJS, TypeScript, NextJS, JavaScript, Styled Components, Radix, JWT, yup, UI-Kit Fapp, Google Maps',
    link: 'https://www.farmaciasapp.com.br/',
  },
  {
    image: '/images/projects/ui-kit.jpg',
    altImage: 'desktop mockups ui-kit farmácias app',
    title: 'UI-KIT Farmácias App',
    text: 'ReactJS, TypeScript, JavaScript, Storybook, Styled Components, React Lottie',
    link: 'https://ui-kit.poc.fappdev.com/',
  },
  {
    image: '/images/projects/tapetesetal.jpg',
    altImage: 'desktop and mobile mockups tapetes e tal',
    title: 'Tapetes & Tal',
    text: 'ReactJS, TypeScript, NextJS, Tailwind, Shadcn, Emotion, React Reveal, React Slick, EmailJS, React Hook Form, Zod, React Fast Marquee',
    link: 'https://www.tapetesetal.com.br/',
  },
  {
    image: '/images/projects/josiane_mendonca.jpg',
    altImage: 'desktop and mobile mockups josiane mendonça advogada',
    title: 'Josiane Mendonça - Advogada',
    text: 'ReactJS, TypeScript, Vite, Tailwind, Shadcn, Node, MongoDB, JWT, Emotion, React Reveal, EmailJS',
    link: 'https://www.josianemendonca.adv.br/',
    underConstruction: true,
  },
];
