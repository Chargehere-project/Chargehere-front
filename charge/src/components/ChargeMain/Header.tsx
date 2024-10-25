import Image from 'next/image';
import { UserOutlined, ShopOutlined } from '@ant-design/icons';
import Router from 'next/router';

const Header: React.FC = () => {

  const main = () =>{
    Router.push('/chargemain');
  }
  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', }}>
      <Image src="/main.png" alt="logo" width={100} height={50} onClick={main} />

      <div>
        <UserOutlined style={{ fontSize: '30px', marginRight: '20px' }} />
        <ShopOutlined style={{ fontSize: '30px' }} />
      </div>
    </header>
  );
};

export default Header;
