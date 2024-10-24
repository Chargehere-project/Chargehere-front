import Image from 'next/image';
import { UserOutlined, ShoppingOutlined, LoginOutlined, SearchOutlined } from '@ant-design/icons';

const Header: React.FC = () => {
  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 20px', alignItems: 'center' }}>
      {/* 로고 */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Image src="/main.png" alt="logo" width={100} height={50} />
      </div>

      {/* 아이콘이랑 검색 영역 */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {/* 장바구니 */}
        <div style={{ textAlign: 'center', marginRight: '20px' }}>
          <ShoppingOutlined style={{ fontSize: '30px' }} />
          <p style={{ fontSize: '12px', margin: 0 }}>장바구니</p>
        </div>

        {/* 마이페이지 */}
        <div style={{ textAlign: 'center', marginRight: '20px' }}>
          <UserOutlined style={{ fontSize: '30px' }} />
          <p style={{ fontSize: '12px', margin: 0 }}>마이페이지</p>
        </div>

        {/* 로그인 */}
        <div style={{ textAlign: 'center', marginRight: '20px' }}>
          <LoginOutlined style={{ fontSize: '30px' }} />
          <p style={{ fontSize: '12px', margin: 0 }}>로그인</p>
        </div>

        {/* 검색 */}
        <div style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
          <SearchOutlined style={{ fontSize: '30px' }} />
          <p style={{ fontSize: '12px', margin: '0 0 0 8px' }}>검색</p>
        </div>
      </div>

      {/* 메뉴 */}
      <nav style={{ display: 'flex', alignItems: 'center' }}>
        <ul style={{ display: 'flex', listStyleType: 'none', margin: 0, padding: 0 }}>
          <li style={{ marginRight: '20px' }}>
            <a href="/" style={{ fontSize: '16px', textDecoration: 'none', color: 'black' }}>홈</a>
          </li>
          <li style={{ marginRight: '20px' }}>
            <a href="/products" style={{ fontSize: '16px', textDecoration: 'none', color: 'black' }}>제품</a>
          </li>
          <li style={{ marginRight: '20px' }}>
            <a href="/reviews" style={{ fontSize: '16px', textDecoration: 'none', color: 'black' }}>리뷰</a>
          </li>
          <li>
            <a href="/cs" style={{ fontSize: '16px', textDecoration: 'none', color: 'black' }}>CS</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;