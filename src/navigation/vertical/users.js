// ** Icons Import
import {
  Menu,
  Circle,
  EyeOff,
  Folder,
  LifeBuoy,
  Shield,
  User,
  Home,
  AtSign,
  ShoppingBag,
  DollarSign,
  UserCheck,
  Users,
  CreditCard
} from "react-feather";
var ability = JSON.parse(localStorage.getItem("userData"))?.ability || [
  { action: "lol" },
];

export default JSON.parse(localStorage.getItem("userData"))?.role !==
"superadmin"
  ? [
      {
        header: "Users",
      },
      {
        id: "user-accueil",
        title: "Accueil",
        icon: <Home size={12} />,
        action: "manage",
        resource: "for-user",
        navLink: "/user/accueil",
      },
      {
        id: "user-page1",
        title: "Produits & services",
        icon: <ShoppingBag size={12} />,
        action: "manage",
        resource: "for-user",
        navLink: "/apps/ecommerce/shop",
      },
      {
        id: "user-listcagnotte",
        title: "Cagnotte en ligne",
        icon: <DollarSign size={12} />,
        action: "manage",
        resource: "for-user",
        navLink: "/user/listcagnotte",
      },
      {
        id: "user-partenaire",
        title: "Mes Partenaires",
        icon: <Users size={12} />,
        action: "manage",
        resource: "for-user",
        navLink: "/user/partenaire",
      },
      {
        id: "user-paiement",
        title: "Paiement panier",
        icon: <CreditCard size={12} />,
        action: "manage",
        resource: "for-user",
        navLink: "/user/facture",
      },
      {
        id: "user-profil",
        title: "Profil",
        icon: <User size={12} />,
        action: "manage",
        resource: "for-user",
        navLink: "/user/view",
      },
      {
        id: "user-faq",
        title: "FAQ",
        icon: <AtSign size={12} />,
        action: "manage",
        resource: "for-user",
        navLink: "/user/faq",
      },
      // {
      //     id: 'user-page2',
      //     title: 'Page 2',
      //     icon: <Shield size={12} />,
      //     action: 'manage',
      //     resource: 'for-user',
      //     navLink: '/user/page2'
      // },
      // {
      //     id: 'user-page3',
      //     title: 'Page 3',
      //     icon: <Shield size={12} />,
      //     action: 'manage',
      //     resource: 'for-user',
      //     navLink: '/user/page3'
      // },
      // {
      //     id: 'user-page4',
      //     title: 'Page 4',
      //     icon: <Shield size={12} />,
      //     action: 'manage',
      //     resource: 'for-user',
      //     navLink: '/user/page4'
      // },
    ]
  : [];
