import { lazy } from 'react'

const Page1 = lazy(() => import('../../views/pages/users/page1'))
const Page2 = lazy(() => import('../../views/pages/users/page2'))
const Page3 = lazy(() => import('../../views/pages/users/page3'))
const Page4 = lazy(() => import('../../views/pages/users/page4'))


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
    path: '/user/page4',
    element: <Page4 />,
    meta: {
      action: 'manage',
      resource: 'for-user'
    }
  },
]

export default UsersRoutes
