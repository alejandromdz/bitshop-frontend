import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Browse',
    icon: 'nb-search',
    link: '/',
    home: true,
  },
  {
    title: 'My Info',
    icon: 'nb-person',
  },
  {
    title: 'Publications',
    icon: 'nb-compose',
    link: '/',
    children: [
      {
        title: 'My publications',
        link: '/',
      },
      {
        title: 'New Publication',
        link: '/',
      }
    ]
  },
  {
    title: 'Payments',
    icon: 'ion-logo-bitcoin',
    children: [
      {
        title: 'My Purchases',
        link: '/',
      },
      {
        title: 'My Sells',
        link: '/',
      },
    ],
  }
];