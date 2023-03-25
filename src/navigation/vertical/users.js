// ** Icons Import
import { Menu, Circle, EyeOff, Folder, LifeBuoy, Shield, User, Home } from 'react-feather'
var ability = JSON.parse(localStorage.getItem("userData"))?.ability || [{ action: "lol" }];


export default  JSON.parse(localStorage.getItem("userData"))?.role !== "superadmin" ?  [
        {
            header: 'Users'
        },
       
        {
            id: 'user-page1',
            title: 'Page 1',
            icon: <Shield size={12} />,
            action: 'manage',
            resource: 'for-user',
            navLink: '/user/page1'
        } ,
        {
            id: 'user-profil',
            title: 'Profil',
            icon: <User size={12} />,
            action: 'manage',
            resource: 'for-user',
            navLink: '/user/view'
        },
        {
            id: 'user-accueil',
            title: 'Accueil',
            icon: <Home size={12} />,
            action: 'manage',
            resource: 'for-user',
            navLink: '/user/accueil'
        },
        {
            id: 'user-listcagnotte',
            title: 'Liste cagnotte',
            icon: <Shield size={12} />,
            action: 'manage',
            resource: 'for-user',
            navLink: '/user/listcagnotte'
        } ,
        {
            id: 'user-partenaire',
            title: 'Mes Partenaires',
            icon: <Shield size={12} />,
            action: 'manage',
            resource: 'for-user',
            navLink: '/user/partenaire'
        } ,
        {
            id: 'user-paiement',
            title: 'Paiement',
            icon: <Shield size={12} />,
            action: 'manage',
            resource: 'for-user',
            navLink: '/user/facture'
        },
        {
            id: 'user-page2',
            title: 'Page 2',
            icon: <Shield size={12} />,
            action: 'manage',
            resource: 'for-user',
            navLink: '/user/page2'
        },
        {
            id: 'user-page3',
            title: 'Page 3',
            icon: <Shield size={12} />,
            action: 'manage',
            resource: 'for-user',
            navLink: '/user/page3'
        },
        {
            id: 'user-page4',
            title: 'Page 4',
            icon: <Shield size={12} />,
            action: 'manage',
            resource: 'for-user',
            navLink: '/user/page4'
        }
    
] : []
