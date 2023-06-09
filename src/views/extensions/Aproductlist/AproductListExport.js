// ** React Imports
import { Fragment, useState } from 'react'

// ** Custom Components
import ExtensionsHeader from '@components/extensions-header'

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

// ** Third Party Components
import classnames from 'classnames'
import { utils, writeFile } from 'xlsx'


const AproductListExport = () => {
  // ** States
  const [data] = useState(initialData)
  const [value, setValue] = useState('')
  const [modal, setModal] = useState(false)
  const [fileName, setFileName] = useState('')
  const [filteredData, setFilteredData] = useState([])
  const [dataToExport, setDataToExport] = useState([])
  const [fileFormat, setFileFormat] = useState('xlsx')
  const [selectedRows, setSelectedRows] = useState([])

  const toggleModal = () => setModal(!modal)

  const handleFilter = e => {
    let filteredData = []
    const value = e.target.value
    setValue(value)
    if (value.length) {
      filteredData = data.filter(col => {
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
      setValue(value)
      setFilteredData(filteredData)
    }
  }

  const handleExport = () => {
    const exportArr = dataToExport
    data.map(item => {
      if (selectedRows.includes(item.id)) {
        return exportArr.push(item)
      } else {
        return null
      }
    })
    setDataToExport([...exportArr])
    const name = fileName.length ? `${fileName}.${fileFormat}` : `excel-sheet.${fileFormat}`
    const wb = utils.json_to_sheet(dataToExport)
    const wbout = utils.book_new()
    utils.book_append_sheet(wbout, wb, 'test')
    writeFile(wbout, name)
    toggleModal()
  }

  const handleSelect = id => {
    const selectedRowsArr = selectedRows
    if (!selectedRowsArr.includes(id)) {
      selectedRowsArr.push(id)
    } else if (selectedRowsArr.includes(id)) {
      selectedRowsArr.splice(selectedRowsArr.indexOf(id), 1)
    } else {
      return null
    }
    setSelectedRows([...selectedRowsArr])
  }

  const handleSelectAll = () => {
    let selectedRowsArr = selectedRows
    if (selectedRowsArr.length < data.length) {
      const ids = data.map(i => i.id)
      selectedRowsArr = ids
    } else if (selectedRowsArr.length === data.length) {
      selectedRowsArr = []
    } else {
      return null
    }

    setSelectedRows(selectedRowsArr)
  }

  const array = value ? filteredData : data
  const renderTableData = array.map(col => {
    return (
      <tr
        key={col.id}
        className={classnames({
          selected: selectedRows.includes(col.id)
        })}
      >
        <td>
          <div className='form-check'>
            <Input
              id={col.id}
              type='checkbox'
              onChange={() => handleSelect(col.id)}
              checked={!!selectedRows.includes(col.id)}
            />
          </div>
        </td>
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
              <div className='d-flex flex-wrap justify-content-between'>
                <Button color='primary' onClick={() => toggleModal()}>
                  Export Selected
                </Button>
                <div className='d-flex align-items-center justify-content-end'>
                  <Label for='search-input' className='me-1'>
                    Search
                  </Label>
                  <Input id='search-input' bsSize='sm' type='text' value={value} onChange={e => handleFilter(e)} />
                </div>
              </div>
            </CardBody>
            <Table className='table-hover-animation mt-2' responsive>
              <thead>
                <tr>
                  <th>
                    <div className='form-check'>
                      <Input
                        type='checkbox'
                        id='select-all'
                        label=''
                        checked={!!selectedRows.length}
                        onChange={() => handleSelectAll()}
                      />
                    </div>
                  </th>
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
              onChange={e => {
                setFileFormat(e.target.value)
              }}
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

export default AproductListExport