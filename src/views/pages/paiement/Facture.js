// ** Reactstrap Imports
import { useEffect, useState } from 'react';
import { Card, CardBody, CardText, Row, Col, Table } from 'reactstrap'

const Facture = ({ mydata }) => {
    const [somme, setSomme] = useState(0);

    useEffect(()=>{
        console.log(mydata);
    },[])


  return (
    <Card className='invoice-preview-card'>
      <CardBody className='invoice-padding pb-0'>
        <div className='d-flex justify-content-between flex-md-row flex-column invoice-spacing mt-0'>
          <div>
            <div className='logo-wrapper'>
              <svg viewBox='0 0 139 95' version='1.1' height='24'>
                <defs>
                  <linearGradient id='invoice-linearGradient-1' x1='100%' y1='10.5120544%' x2='50%' y2='89.4879456%'>
                    <stop stopColor='#000000' offset='0%'></stop>
                    <stop stopColor='#FFFFFF' offset='100%'></stop>
                  </linearGradient>
                  <linearGradient
                    id='invoice-linearGradient-2'
                    x1='64.0437835%'
                    y1='46.3276743%'
                    x2='37.373316%'
                    y2='100%'
                  >
                    <stop stopColor='#EEEEEE' stopOpacity='0' offset='0%'></stop>
                    <stop stopColor='#FFFFFF' offset='100%'></stop>
                  </linearGradient>
                </defs>
                <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
                  <g transform='translate(-400.000000, -178.000000)'>
                    <g transform='translate(400.000000, 178.000000)'>
                      <path
                        className='text-primary'
                        d='M-5.68434189e-14,2.84217094e-14 L39.1816085,2.84217094e-14 L69.3453773,32.2519224 L101.428699,2.84217094e-14 L138.784583,2.84217094e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L6.71554594,44.4188507 C2.46876683,39.9813776 0.345377275,35.1089553 0.345377275,29.8015838 C0.345377275,24.4942122 0.230251516,14.560351 -5.68434189e-14,2.84217094e-14 Z'
                        style={{ fill: 'currentColor' }}
                      ></path>
                      <path
                        d='M69.3453773,32.2519224 L101.428699,1.42108547e-14 L138.784583,1.42108547e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L32.8435758,70.5039241 L69.3453773,32.2519224 Z'
                        fill='url(#invoice-linearGradient-1)'
                        opacity='0.2'
                      ></path>
                      <polygon
                        fill='#000000'
                        opacity='0.049999997'
                        points='69.3922914 32.4202615 32.8435758 70.5039241 54.0490008 16.1851325'
                      ></polygon>
                      <polygon
                        fill='#000000'
                        opacity='0.099999994'
                        points='69.3922914 32.4202615 32.8435758 70.5039241 58.3683556 20.7402338'
                      ></polygon>
                      <polygon
                        fill='url(#invoice-linearGradient-2)'
                        opacity='0.099999994'
                        points='101.428699 0 83.0667527 94.1480575 130.378721 47.0740288'
                      ></polygon>
                    </g>
                  </g>
                </g>
              </svg>
              <h3 className='text-primary invoice-logo'>Air Tel</h3>
            </div>
            <CardText className='mb-25'>Lot IVR 32 Bis Antanimena</CardText>
            <CardText className='mb-25'>101 Antananarivo</CardText>
            <CardText className='mb-0'>+261 33 14 598 68</CardText>
          </div>
          <div className='mt-md-0 mt-2'>
            <h4 className='invoice-title'>
              Facture <span className='invoice-number'>#10</span>
            </h4>
          </div>
        </div>
        {/* /Header */}
      </CardBody>

      <hr className='invoice-spacing' />

      <Table responsive>
        <thead>
          <tr>
            <th className='py-1'>Produit</th>
            <th className='py-1'>Prix</th>
            <th className='py-1'>Quantité</th>
            <th className='py-1'>Total</th>
          </tr>
        </thead>
        <tbody>
            {mydata?.panierproduit.map((tabproduit) => {
                const item= tabproduit.produit
                    return (
                        <tr>
                            <td className='py-1'>
                            <p className='card-text text-nowrap'>{item.nom}</p>
                            </td>
                            <td className='py-1'>
                                <span className='card-text text-nowrap'>{item.prix} Ar</span>
                            </td>
                            <td className='py-1'>
                            <span className='card-text text-nowrap'>{tabproduit.quantite}</span>
                            </td>
                            <td className='py-1'>
                            <span className='fw-bold'>{(item.prix)*(tabproduit.quantite)} Ar</span>
                            </td>
                        </tr>
                    )
            })}
        </tbody>
      </Table>

      <CardBody className='invoice-padding pb-0'>
        <Row className='invoice-sales-total-wrapper'>
          <Col className='mt-md-0 mt-3' md='6' order={{ md: 1, lg: 2 }}>
          </Col>
        </Row>
      </CardBody>

      <hr className='invoice-spacing' />

      <CardBody className='invoice-padding pt-0'>
        <Row>
          <Col sm='12'>
            <span className='fw-bold'>Note: </span>
            <span>
                Nous vous remettons ci-joint la facture relative à la prestation de conseil en gestion de patrimoine que nous avons
            </span>
          </Col>
        </Row>
      </CardBody>
    </Card>
  ) 
}

export default Facture
