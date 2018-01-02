import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Browse',
    icon: 'nb-search',
    link: '/dashboard/browse',
    home: true,
  },
  {
    title: 'My Info',
    icon: 'nb-person',
    link: '/dashboard/profile'
  },
  {
    title: 'Publications',
    icon: 'nb-compose',
    children: [
      {
        title: 'My publications',
        link: '/dashboard/mypublications',
      },
      {
        title: 'New Publication',
        link: '/dashboard/newpublication',
      }
    ]
  },
  {
    title: 'Payments',
    icon: 'ion-logo-bitcoin',
    children: [
      {
        title: 'My Purchases',
        link: '/dashboard/purchases',
      },
      {
        title: 'My Sells',
        link: '/dashboard/payments',
      },
    ],
  },
  {
    title:'Exit',
    icon:'ion-md-exit',
    link: '/logout'
  }

];