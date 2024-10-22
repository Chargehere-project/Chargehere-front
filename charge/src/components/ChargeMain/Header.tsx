import Image from 'next/image'
import { UserOutlined, ShopOutlined} from '@ant-design/icons';

const Header:React.FC = () =>{
    return (<>        <Image
        src="/main.png"
        alt="logo"
        width={300}
        height={300}
      />
      <UserOutlined style={{fontSize: '30px'}}/>
      <ShopOutlined style={{fontSize: '30px'}}/>
    </>
      )
}

export default Header