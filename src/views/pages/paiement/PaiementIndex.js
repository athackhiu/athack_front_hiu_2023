import { useEffect, useState } from "react";
import { Col, Row } from "reactstrap"
import Facture from "./Facture"
import MyAction from "./MyAction"


const dataPaiement={
    id:1,
    utilisateur:{nom:"Doe",prenom:"John"},
    date:"2021-01-01",
    estConfirmee:true,
    panierproduit:[
        {produit:{_id:1,nom:"Produit 1",description:"descriiiii ",prix:100},quantite:1}
    ]
};

const PaiementIndex=()=>{
    const[data,setData]=useState(dataPaiement);

    useEffect(()=>{
        console.log(data)
        
    },[])

    return (
        <div className='invoice-preview-wrapper'>
            <Row className='invoice-preview'>
                <Col xl={12} md={12} sm={12}>
                   <Facture mydata={data} />
                </Col>
                <Col xl={12} md={12} sm={12}>
                    <MyAction/>
                </Col>
            </Row>
        </div>
    )
}

export default PaiementIndex