import { lazy } from 'react'
import Historique from '../../views/apps/historique/Historique'
import MapPartenaire from '../../views/apps/partenaire/MapPartenaire'
import DetailCagnotte from '../../views/pages/cagnotte/DetailCagnotte'
import ListCagnotte from '../../views/pages/cagnotte/ListCagnotte'
import PaiementIndex from '../../views/pages/paiement/PaiementIndex'

const Page1 = lazy(() => import('../../views/pages/users/page1'))
const Page2 = lazy(() => import('../../views/pages/users/page2'))
const Page3 = lazy(() => import('../../views/pages/users/page3'))
const Cagnotte = lazy(() => import('../../views/pages/users/Cagnotte'))


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
    path: '/user/historique',
    element: <Historique/>,
    meta: {
      action: 'manage',
      resource: 'for-user'
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
