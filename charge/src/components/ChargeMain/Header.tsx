import Image from 'next/image'
import { UserOutlined, ShopOutlined} from '@ant-design/icons';

const Header:React.FC = () =>{
    return (<>        <Image
        src="/main.png"
        alt="logo"
        width={200}
        height={200}
      />
      <UserOutlined style={{fontSize: '50px'}}/>
      <ShopOutlined style={{fontSize: '50px'}}/>
    </>
      )
}

export default Header