import { Fragment } from "react";
import BreadCrumbs from '@components/breadcrumbs'

const UserProfil=()=>{
    return (
        <Fragment>
             <BreadCrumbs title='Profil' data={[{ title: 'Utilisateur' }, { title: 'Profil' }]} />
             
        </Fragment>
    )
}

export default UserProfil;