import { lazy } from 'react'
import Dashboard from '../../views/apps/dashboardadmin/Dashboard'

const Page1 = lazy(() => import('../../views/pages/admin/page1'))
const Page2 = lazy(() => import('../../views/pages/admin/page2'))
const Page3 = lazy(() => import('../../views/pages/admin/page3'))
const Page4 = lazy(() => import('../../views/pages/admin/page4'))
const AjoutProduit = lazy(() => import('../../views/pages/admin/produit'))


const PartnerExport = lazy(() => import('../../views/extensions/partnerlist/PartnerExport'))
const PartnerList = lazy(() => import('../../views/extensions/partnerlist/PartnerList'))
const AproductList = lazy(() => import('../../views/extensions/Aproductlist/AproductList'))
const AproductListExport = lazy(() => import('../../views/extensions/Aproductlist/AproductListExport'))


const AdminRoutes = [
  {
    path: '/admin/accueil',
    element: <Dashboard />,
    meta: {
      action: 'manage',
      resource: 'for-admin'
    }
  }
  ,{
    path: '/admin/page1',
    element: <Page1 />,
    meta: {
      action: 'manage',
      resource: 'for-admin'
    }
  },
  {
    path: '/admin/page2',
    element: <Page2 />,
    meta: {
      action: 'manage',
      resource: 'for-admin'
    }
  },
  {
    path: '/admin/page3',
    element: <Page3 />,
    meta: {
      action: 'manage',
      resource: 'for-admin'
    }
  },
  {
    path: '/admin/page4',
    element: <Page4 />,
    meta: {
      action: 'manage',
      resource: 'for-admin'
    }
  },

  {
    path: '/admin/produit/ajoutProduit',
    element: <AjoutProduit />,
    meta: {
      action: 'manage',
      resource: 'for-admin'
    }
  },
  {
    element:<PartnerList />,
    path: '/extensions/partner-list',
    meta: {
      action: 'manage',
      resource: 'for-admin',
    }
  },
  {
    element:<PartnerExport/>,
    path: '/extensions/partner-export',
    meta: {
      action: 'manage',
      resource: 'for-admin',
    }
  },
  {
    element:<AproductList />,
    path: '/extensions/aproduct-list',
    meta: {
      action: 'manage',
      resource: 'for-admin',
    }
  },
  {
    element:<AproductListExport/>,
    path: '/extensions/aproduct-list-export',
    meta: {
      action: 'manage',
      resource: 'for-admin',
    }
  }
]

export default AdminRoutes
