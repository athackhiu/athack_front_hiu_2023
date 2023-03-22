// ** Icons Import
import { Menu, Circle, EyeOff, Folder, LifeBuoy, Shield } from 'react-feather'
var ability = JSON.parse(localStorage.getItem("userData"))?.ability || [{ action: "lol" }];


export default [
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
]
