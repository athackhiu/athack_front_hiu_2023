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
    id: 1,
    nom: 'Leanne Graham',
    emplacement: 'Bret',
    email: 'Sincere@april.biz',
    numero: 'hildegard.org'
  },
  {
    id: 2,
    nom: 'Ervin Howell',
    emplacement: 'Antonette',
    email: 'Shanna@melissa.tv',
    numero: 'anastasia.net'
  },
  {
    id: 3,
    nom: 'Clementine Bauch',
    emplacement: 'Samantha',
    email: 'Nathan@yesenia.net',
    numero: 'ramiro.info'
  },
  {
    id: 4,
    nom: 'Patricia Lebsack',
    emplacement: 'Karianne',
    email: 'Julianne.OConner@kory.org',
    numero: 'kale.biz'
  },
  {
    id: 5,
    nom: 'Chelsey Dietrich',
    emplacement: 'Kamren',
    email: 'Lucio_Hettinger@annie.ca',
    numero: 'demarco.info'
  },
  {
    id: 6,
    nom: 'Mrs. Dennis Schulist',
    emplacement: 'Leopoldo_Corkery',
    email: 'Karley_Dach@jasper.info',
    numero: 'ola.org'
  },
  {
    id: 7,
    nom: 'Kurtis Weissnat',
    emplacement: 'Elwyn.Skiles',
    email: 'Telly.Hoeger@billy.biz',
    numero: 'elvis.io'
  },
  {
    id: 8,
    nom: 'Nicholas Runolfsdottir V',
    emplacement: 'Maxime_Nienow',
    email: 'Sherwood@rosamond.me',
    numero: 'jacynthe.com'
  },
  {
    id: 9,
    nom: 'Glenna Reichert',
    emplacement: 'Delphine',
    email: 'Chaim_McDermott@dana.io',
    numero: 'conrad.com'
  },
  {
    id: 10,
    nom: 'Clementina DuBuque',
    emplacement: 'Moriah.Stanton',
    email: 'Rey.Padberg@karina.biz',
    numero: 'ambrose.net'
  }
]

const PartnerList = () => {
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
        <td>{col.email}</td>
        <td>{col.nom}</td>
        <td>{col.numero}</td>
        <td>{col.emplacement}</td>
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
                  <th>Email</th>
                  <th>Nom</th>
                  <th>Numero</th>
                  <th>Emplacement</th>
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

export default PartnerList