import React from 'react';

import { Icon } from '@chakra-ui/react';
import {
  MdBarChart,
  MdPerson,
  MdHome,
  MdLock,
  MdOutlineShoppingCart,
  MdOutlinePersonPin,
  MdChat,
  MdQuestionMark,
  MdOutlineMedicalInformation,
  MdDocumentScanner
} from 'react-icons/md';

// Admin Imports
import MainDashboard from 'views/admin/default';
import MainDocuments from 'views/admin/documents';
import MainHealthProfile from 'views/admin/healthprofile';
import NFTMarketplace from 'views/admin/marketplace';
import Profile from 'views/admin/profile';
import DataTables from 'views/admin/dataTables';

// Auth Imports
import SignInCentered from 'views/auth/signIn';

const routes = [
  {
    name: 'Main Dashboard',
    layout: '/admin',
    path: '/default',
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
    component: <MainDashboard />,
  },
  {
    name: 'Documents',
    layout: '/admin',
    path: '/documents',
    icon: (
      <Icon
        as={MdDocumentScanner}
        width="20px"
        height="20px"
        color="inherit"
      />
    ),
    component: <MainDocuments />
  },
  {
    name: 'Health Profile',
    layout: '/admin',
    path: '/health-profile',
    icon: (
      <Icon
        as={MdOutlinePersonPin}
        width="20px"
        height="20px"
        color="inherit"
      />
    ),
    component: <MainHealthProfile />
  },
  {
    name: 'Contact Doctor',
    layout: '/admin',
    path: '/nft-marketplace',
    icon: (
      <Icon
        as={MdOutlineMedicalInformation}
        width="20px"
        height="20px"
        color="inherit"
      />
    ),
    component: <NFTMarketplace />,
    secondary: true,
  },
  {
    name: 'Talk to Vita AI',
    layout: '/admin',
    icon: <Icon as={MdChat} width="20px" height="20px" color="inherit" />,
    path: '/data-tables',
    component: <DataTables />,
  },
  {
    name: 'FAQ',
    layout: '/admin',
    icon: <Icon as={MdQuestionMark} width="20px" height="20px" color="inherit" />,
    path: '/data-tables',
    component: <DataTables />,
  },
  {
    name: 'Profile',
    layout: '/admin',
    path: '/profile',
    icon: <Icon as={MdPerson} width="20px" height="20px" color="inherit" />,
    component: <Profile />,
  },
];

export default routes;
