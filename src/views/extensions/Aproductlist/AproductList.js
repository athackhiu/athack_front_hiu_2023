// ** React Imports
import { Fragment, useState, useRef } from 'react'

// ** Custom Components
import ExtensionsHeader from '@components/extensions-header'

// ** Third Party Components
import { utils, write } from 'xlsx'
import * as FileSaver from 'file-saver'

// ** Reactstrap Imports
import {
  Row,
  Col,
  Card,
  Table,
  Modal,
  Input,
  Label,
  Button,
  CardBody,
  ModalBody,
  ModalHeader,
  ModalFooter
} from 'reactstrap'

const initialData = [
    {
        nom :"Telephone",
        description:"Dual sim, Tactile et memoire extensible",
        prix : 300000,
        type: "produit",
        image:"",
        duree:0
    },
    {
        nom :"M'Lay Jiaby 500",
        description:"Tout optrateur:5mn,SMS tout operateur 10,Internet 20Mo,Validite",
        prix : 50,
        type: "service",
        image:"",
        duree:1
    },
    {
        nom :"M'Lay Jiaby 1000",
        description:"Tout optrateur:5mn,SMS tout operateur 10,Internet 20Mo,Validite",
        prix : 300000,
        type: "produit",
        image:"",
        duree:1
    },
    {
        nom :"M'Lay Jiaby 1000",
        description:"Tout optrateur:5mn,SMS tout operateur 10,Internet 20Mo,Validite",
        prix : 300000,
        type: "produit",
        image:"",
        duree:1
    },
    {
        nom :"Telephone",
        description:"Dual sim, Tactile et memoire extensible",
        prix : 300000,
        type: "produit",
        image:"",
        duree:0
    },
    {
        nom :"M'Lay Jiaby 1000",
        description:"Tout optrateur:5mn,SMS tout operateur 10,Internet 20Mo,Validite",
        prix : 300000,
        type: "produit",
        image:"",
        duree:1
    },
    {
        nom :"Telephone",
        description:"Dual sim, Tactile et memoire extensible",
        prix : 300000,
        type: "produit",
        image:"",
        duree:0
    }
]

const AproductList = () => {
  // ** Ref
  const tableRef = useRef()

  // ** States
  const [data] = useState(initialData)
  const [value, setValue] = useState('')
  const [modal, setModal] = useState(false)
  const [fileName, setFileName] = useState('')
  const [filteredData, setFilteredData] = useState([])
  const [fileFormat, setFileFormat] = useState('xlsx')

  const toggleModal = () => {
    setModal(!modal)
  }

  const handleFilter = e => {
    const dataArr = data
    let filteredData = []
    const value = e.target.value
    setValue(value)
    if (value.length) {
      filteredData = dataArr.filter(col => {
        const startsWithCondition =
          col.name.toLowerCase().startsWith(value.toLowerCase()) ||
          col.email.toLowerCase().startsWith(value.toLowerCase()) ||
          col.website.toLowerCase().startsWith(value.toLowerCase()) ||
          col.id.toString().toLowerCase().startsWith(value.toLowerCase())

        const includesCondition =
          col.name.toLowerCase().includes(value.toLowerCase()) ||
          col.email.toLowerCase().includes(value.toLowerCase()) ||
          col.website.toLowerCase().includes(value.toLowerCase()) ||
          col.id.toString().toLowerCase().includes(value.toLowerCase())

        if (startsWithCondition) return startsWithCondition
        else if (!startsWithCondition && includesCondition) return includesCondition
        else return null
      })
      setFilteredData(filteredData)
      setValue(value)
    }
  }

  const handleExport = () => {
    toggleModal()
    const bookType = fileFormat
    const wb = utils.table_to_book(tableRef.current, { sheet: 'Sheet JS' })
    const wbout = write(wb, { bookType, bookSST: true, type: 'binary' })

    const s2ab = s => {
      const buf = new ArrayBuffer(s.length)
      const view = new Uint8Array(buf)
      for (let i = 0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xff
      return buf
    }
    const file = fileName.length ? `${fileName}.${fileFormat}` : `excel-sheet.${fileFormat}`

    return FileSaver.saveAs(new Blob([s2ab(wbout)], { type: 'application/octet-stream' }), file)
  }

  const array = value ? filteredData : data
  const renderTableData = array.map(col => {
    return (
      <tr key={col.id}>
        <td>{col.nom}</td>
        <td>{col.description}</td>
        <td>{col.prix}</td>
        <td>{col.type}</td>
        <td>{col.duree}</td>
      </tr>
    )
  })
  return (
    <Fragment>
      <ExtensionsHeader
        title='XLSX'
        subTitle='Xlsx is a parser and writer for various spreadsheet formats'
        link='https://github.com/SheetJS/sheetjs'
      />
      <Row className='export-component'>
        <Col sm='12'>
          <Card>
            <CardBody className='pb-0'>
              <div className='d-flex justify-content-between flex-wrap flex-sm-row flex-column'>
                <Button color='primary' onClick={() => toggleModal()}>
                  Export
                </Button>
                <div className='d-flex align-items-center justify-content-end mt-sm-0 mt-1'>
                  <Label for='search-input' className='me-1'>
                    Search
                  </Label>
                  <Input id='search-input' bsSize='sm' type='text' value={value} onChange={e => handleFilter(e)} />
                </div>
              </div>
            </CardBody>
            <Table innerRef={tableRef} className='table-hover-animation mt-2' responsive>
              <thead>
                <tr>
                  <th>Nom</th>
                  <th>Description</th>
                  <th>Prix</th>
                  <th>Type</th>
                  <th>Durée</th>
                </tr>
              </thead>
              <tbody>{renderTableData}</tbody>
            </Table>
          </Card>
        </Col>
      </Row>
      <Modal
        isOpen={modal}
        toggle={() => toggleModal()}
        className='modal-dialog-centered'
        onClosed={() => setFileName('')}
      >
        <ModalHeader toggle={() => toggleModal()}>Export To Excel</ModalHeader>
        <ModalBody>
          <div className='mb-2'>
            <Input
              type='text'
              value={fileName}
              onChange={e => setFileName(e.target.value)}
              placeholder='Enter File Name'
            />
          </div>
          <div>
            <Input
              type='select'
              id='selectFileFormat'
              name='customSelect'
              value={fileFormat}
              onChange={e => setFileFormat(e.target.value)}
            >
              <option>xlsx</option>
              <option>csv</option>
              <option>txt</option>
            </Input>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color='primary' onClick={() => handleExport()}>
            Export
          </Button>
          <Button color='flat-danger' onClick={() => toggleModal()}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </Fragment>
  )
}

export default AproductList