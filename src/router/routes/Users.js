import { lazy } from 'react'

import { Navigate } from 'react-router-dom'


import DashboardUser from '../../views/apps/dashboarduser/Dashboard'
import Historique from '../../views/apps/historique/Historique'
import MapPartenaire from '../../views/apps/partenaire/MapPartenaire'
import UserView from '../../views/apps/user/view'
import DetailCagnotte from '../../views/pages/cagnotte/DetailCagnotte'
import ListCagnotte from '../../views/pages/cagnotte/ListCagnotte'
import Faq from '../../views/pages/faq'
import PaiementIndex from '../../views/pages/paiement/PaiementIndex'


const Page1 = lazy(() => import('../../views/pages/users/page1'))
const Page2 = lazy(() => import('../../views/pages/users/page2'))
const Page3 = lazy(() => import('../../views/pages/users/page3'))
const Cagnotte = lazy(() => import('../../views/pages/users/Cagnotte'))

const EcommerceShop = lazy(() => import('../../views/apps/ecommerce/shop'))
const EcommerceDetail = lazy(() => import('../../views/apps/ecommerce/detail'))
const EcommerceWishlist = lazy(() => import('../../views/apps/ecommerce/wishlist'))
const EcommerceCheckout = lazy(() => import('../../views/apps/ecommerce/checkout'))




const UsersRoutes = [
  {
    path: '/user/page1',
    element: <Page1 />,
    meta: {
      action: 'manage',
      resource: 'for-user'
    }
  },
  {
    path: '/user/page2',
    element: <Page2 />,
    meta: {
      action: 'manage',
      resource: 'for-user'
    }
  },
  {
    path: '/user/page3',
    element: <Page3 />,
    meta: {
      action: 'manage',
      resource: 'for-user'
    }
  },
  {
    path: '/user/listcagnotte',
    element: <ListCagnotte />,
    meta: {
      action: 'manage',
      resource: 'for-user'
    }
  },
  {
    path: '/user/detailcagnotte/:id',
    element: <DetailCagnotte />,
    meta: {
      action: 'manage',
      resource: 'for-user'
    }
  },
  {
    path: '/user/facture',
    element: <PaiementIndex />,
    meta: {
      action: 'manage',
      resource: 'for-user'
    }
  },
  {
    path: '/user/facture',
    element: <PaiementIndex />,
    meta: {
      action: 'manage',
      resource: 'for-user'
    }
  },
  {
    path: '/user/faq',
    element: <Faq />,
    meta: {
      action: 'manage',
      resource: 'for-user'
    }
  },
  {
    path: '/user/accueil',
    element: <DashboardUser />,
    meta: {
      action: 'manage',
      resource: 'for-user'
    }
  },
  {
    path: '/user/view',
    element: <UserView />,
    meta: {
      action: 'manage',
      resource: 'for-user'
    }
  },
  {
    path: '/user/historique',
    element: <Historique/>,
    meta: {
      action: 'manage',
      resource: 'for-user'
    }

  },
  {
    element: <EcommerceShop />,
    path: '/apps/ecommerce/shop',
    meta: {
      action: 'manage',
      resource: 'for-user',
      className: 'ecommerce-application'
    }
  },
  {
    element: <EcommerceWishlist />,
    path: '/apps/ecommerce/wishlist',
    meta: {
      action: 'manage',
      resource: 'for-user',
      className: 'ecommerce-application'
    }
  },
  {
    path: '/apps/ecommerce/product-detail',
    element: <Navigate to='/apps/ecommerce/product-detail/apple-i-phone-11-64-gb-black-26' />,
    meta: {
      action: 'manage',
      resource: 'for-user',
      className: 'ecommerce-application'
    }
  },
  {
    path: '/apps/ecommerce/product-detail/:product',
    element: <EcommerceDetail />,
    meta: {
      action: 'manage',
      resource: 'for-user',
      className: 'ecommerce-application'
    }
  },
  {
    path: '/apps/ecommerce/checkout',
    element: <EcommerceCheckout />,
    meta: {
      action: 'manage',
      resource: 'for-user',
      className: 'ecommerce-application'
    }
  },
  {
    path: '/user/partenaire',
    element: <MapPartenaire/>,
    meta: {
      action: 'manage',
      resource: 'for-user'
    }
  }
]

export default UsersRoutes
