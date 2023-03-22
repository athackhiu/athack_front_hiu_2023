import { lazy } from 'react'

const Page1 = lazy(() => import('../../views/pages/admin/page1'))
const Page2 = lazy(() => import('../../views/pages/admin/page2'))
const Page3 = lazy(() => import('../../views/pages/admin/page3'))
const Page4 = lazy(() => import('../../views/pages/admin/page4'))


const AdminRoutes = [
  {
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
]

export default AdminRoutes
