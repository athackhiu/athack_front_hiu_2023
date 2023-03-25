// ** Reactstrap Imports
import { Badge, Card, CardHeader, DropdownItem, DropdownMenu, DropdownToggle, Progress, Table, UncontrolledDropdown } from 'reactstrap'

// ** Third Party Components
import { ChevronDown, Edit, MoreVertical, Trash } from 'react-feather'
import DataTable from 'react-data-table-component'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Label Images
import xdLabel from '@src/assets/images/icons/brands/xd-label.png'
import vueLabel from '@src/assets/images/icons/brands/vue-label.png'
import htmlLabel from '@src/assets/images/icons/brands/html-label.png'
import reactLabel from '@src/assets/images/icons/brands/react-label.png'
import sketchLabel from '@src/assets/images/icons/brands/sketch-label.png'

// ** Styles
import '@styles/react/libs/tables/react-dataTable-component.scss'
import { useState } from 'react'
import ModalDetail from './ModalDetail'

const initialData = [
    {
      panier:{id:1,
        utilisateur:{nom:"Doe",prenom:"John"},
        date:"2021-01-01",
        estConfirmee:true,
        panierproduit:[
            {produit:{_id:1,nom:"Produit 1",description:"descriiiii ",prix:100},quantite:1}
    ]
    },
      date:"2021-01-01",
      statut:"En cours",
      montant:1000,
    },
    {
      panier:{
        id:1,
        utilisateur:{nom:"Doe",prenom:"John"},
        date:"2021-01-01",
        estConfirmee:true,
        panierproduit:[
            {produit:{_id:1,nom:"Produit 1",description:"descriiiii ",prix:100},quantite:1}
        ]
       },
      date:"2021-01-01",
      statut:"Refusé",
      montant:1000,
    }
]

export const columns = [
  {
    sortable: true,
    minWidth: '300px',
    name: 'Project',
    selector: row => row.title,
    cell: row => {
      return (
        <div className='d-flex justify-content-left align-items-center'>
          <div className='avatar-wrapper'>
            <Avatar className='me-1' img={row.img} alt={row.title} imgWidth='32' />
          </div>
          <div className='d-flex flex-column'>
            <span className='text-truncate fw-bolder'>{row.title}</span>
            <small className='text-muted'>{row.subtitle}</small>
          </div>
        </div>
      )
    }
  },
  {
    name: 'Total Tasks',
    selector: row => row.totalTasks
  },
  {
    name: 'Progress',
    selector: row => row.progress,
    sortable: true,
    cell: row => {
      return (
        <div className='d-flex flex-column w-100'>
          <small className='mb-1'>{`${row.progress}%`}</small>
          <Progress
            value={row.progress}
            style={{ height: '6px' }}
            className={`w-100 progress-bar-${row.progressColor}`}
          />
        </div>
      )
    }
  },
  {
    name: 'Hours',
    selector: row => row.hours
  }
]

const PaiementHistory = () => {
    const [historique,setHistorique]=useState(initialData);

  return (
    <Card>
      <CardHeader tag='h4'>Historique de paiement</CardHeader>
      <div className='react-dataTable user-view-account-projects'>
      <Table responsive>
      <thead>
        <tr>
          <th>Panier</th>
          <th>Montant</th>
          <th>Date</th>
          <th>Statut</th>
          <th>Détails</th>
        </tr>
      </thead>
      <tbody>
        {historique.map((item)=>{
            return (
                <tr>
                <td>N° {item.panier.id}</td>
                <td>
                    {item.montant} Ar
                </td>
                <td>
                    {item.date} 
                </td>
                <td>
                    <Badge pill color='light-info' className='me-1'>
                        {item.statut}
                    </Badge>
                </td>
                <td>
                    <ModalDetail item={item}/>
                </td>
                </tr>
            )
        })}
      </tbody>
    </Table>
      </div>
    </Card>
  )
}

export default PaiementHistory
