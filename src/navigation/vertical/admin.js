// ** Icons Import
import { Menu, Circle, EyeOff, Folder, LifeBuoy, Shield, Home, PlusCircle, List } from 'react-feather'
var ability = JSON.parse(localStorage.getItem("adminData"))?.ability || [{ action: "lol" }];


export default  JSON.parse(localStorage.getItem("userData"))?.role !== "superadmin" ? [
        {
            header: 'Admin'
        },
        {
            id: 'admin-page1',
            title: 'Accueil',
            icon: <Home size={12} />,
            action: 'manage',
            resource: 'for-admin',
            navLink: '/admin/accueil'
        },
        {
            id: 'admin-accueil',
            title: 'Ajout produit ',
            icon: <PlusCircle size={12} />,
            action: 'manage',
            resource: 'for-admin',
            navLink: '/admin/produit/ajoutProduit'
        },  {
            id: 'admin-produit',
            title: 'Listes des produits',
            icon: <List size={12} />,
            action: 'manage',
            resource: 'for-admin',
            navLink: '/extensions/aproduct-list'
        },
        {
            id: 'admin-partenaire',
            title: 'Listes  partenaires',
            icon: <List size={12} />,
            action: 'manage',
            resource: 'for-admin',
            navLink: '/extensions/partner-list'
        },
      
        
        
        
    
] : []
