// ** Icons Import
import { Menu, Circle, EyeOff, Folder, LifeBuoy, Shield, Home } from 'react-feather'
var ability = JSON.parse(localStorage.getItem("adminData"))?.ability || [{ action: "lol" }];


export default  JSON.parse(localStorage.getItem("userData"))?.role !== "superadmin" ? [
        {
            header: 'Admin'
        },
        {
            id: 'admin-page1',
            title: 'Page 1',
            icon: <Shield size={12} />,
            action: 'manage',
            resource: 'for-admin',
            navLink: '/admin/page1'
        },
        {
            id: 'admin-accueil',
            title: 'Accueil',
            icon: <Home size={12} />,
            action: 'manage',
            resource: 'for-admin',
            navLink: '/admin/accueil'
        },
        {
            id: 'admin-page2',
            title: 'Page 2',
            icon: <Shield size={12} />,
            action: 'manage',
            resource: 'for-admin',
            navLink: '/admin/page2'
        },
        {
            id: 'admin-page3',
            title: 'Page 3',
            icon: <Shield size={12} />,
            action: 'manage',
            resource: 'for-admin',
            navLink: '/admin/page3'
        },
        {
            id: 'admin-page4',
            title: 'Page 4',
            icon: <Shield size={12} />,
            action: 'manage',
            resource: 'for-admin',
            navLink: '/admin/page4'
        }
    
] : []
