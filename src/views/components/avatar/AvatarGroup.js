// ** Custom Components
import AvatarGroup from '@components/avatar-group'

// ** Avatar Imports
import avatar5 from '@src/assets/images/portrait/small/avatar-s-5.jpg'
import avatar7 from '@src/assets/images/portrait/small/avatar-s-7.jpg'
import avatar10 from '@src/assets/images/portrait/small/avatar-s-10.jpg'
import avatar11 from '@src/assets/images/portrait/small/avatar-s-11.jpg'
import avatar20 from '@src/assets/images/portrait/small/avatar-s-20.jpg'

const data = [
  {
    img: avatar5
  },
  {
    img: avatar7
  },
  {
    img: avatar10
  },
  {
    img: avatar11
  },
  {
    img: avatar20
  }
]

const AvatarGroupComponent = () => {
  return <AvatarGroup data={data} />
}

export default AvatarGroupComponent
