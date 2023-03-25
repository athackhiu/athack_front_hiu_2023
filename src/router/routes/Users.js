import { lazy } from 'react'
<<<<<<< Updated upstream
=======
import { Navigate } from 'react-router-dom'
import Historique from '../../views/apps/historique/Historique'
import DetailCagnotte from '../../views/pages/cagnotte/DetailCagnotte'
import ListCagnotte from '../../views/pages/cagnotte/ListCagnotte'
import PaiementIndex from '../../views/pages/paiement/PaiementIndex'
>>>>>>> Stashed changes

const Page1 = lazy(() => import('../../views/pages/users/page1'))
const Page2 = lazy(() => import('../../views/pages/users/page2'))
const Page3 = lazy(() => import('../../views/pages/users/page3'))
const Cagnotte = lazy(() => import('../../views/pages/users/Cagnotte'))

const EcommerceShop = lazy(() => import('../../views/apps/ecommerce/shop'))
const EcommerceDetail = lazy(() => import('../../views/apps/ecommerce/detail'))
const EcommerceWishlist = lazy(() => import('../../views/apps/ecommerce/wishlist'))
const EcommerceCheckout = lazy(() => import('../../views/apps/ecommerce/checkout'))

const PartnerExport = lazy(() => import('../../views/extensions/partnerlist/PartnerExport'))
const PartnerList = lazy(() => import('../../views/extensions/partnerlist/PartnerList'))
const AproductList = lazy(() => import('../../views/extensions/Aproductlist/AproductList'))
const AproductListExport = lazy(() => import('../../views/extensions/Aproductlist/AproductListExport'))


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
    path: '/user/cagnotte',
    element: <Cagnotte />,
    meta: {
      action: 'manage',
      resource: 'for-user'
    }
  },
<<<<<<< Updated upstream
=======
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
    element:<PartnerList />,
    path: '/extensions/partner-list',
    meta: {
      action: 'manage',
      resource: 'for-user',
    }
  },
  {
    element:<PartnerExport/>,
    path: '/extensions/partner-export',
    meta: {
      action: 'manage',
      resource: 'for-user',
    }
  },
  {
    element:<AproductList />,
    path: '/extensions/aproduct-list',
    meta: {
      action: 'manage',
      resource: 'for-user',
    }
  },
  {
    element:<AproductListExport/>,
    path: '/extensions/aproduct-list-export',
    meta: {
      action: 'manage',
      resource: 'for-user',
    }
  }
>>>>>>> Stashed changes
]

export default UsersRoutes
