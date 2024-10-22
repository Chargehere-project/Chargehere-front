import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image';

interface Product {
  productId: number;
  categoryId: number;
  productName: string;
  price: number;
  discount: number;
  image: string;
  detailInfo: string;
}

const Mall = () => {
  const [products, setProducts] = useState<Product[]>([]); // 상품 리스트 상태
  const [loading, setLoading] = useState<boolean>(true); // 로딩
  const [error, setError] = useState<string | null>(null); // 에러

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://your-backend-api/products'); // 여기에 실제 API 엔드포인트 입력
        setProducts(response.data); // 데이터 설정
        setLoading(false);
      } catch (error: any) {
        setError('상품 데이터를 불러오는 중 에러가 발생했습니다.');
        setLoading(false);
      }
    };

    fetchProducts(); // 데이터 불러오기 함수 호출
  }, []);

  if (loading) {
    return <div>상품 데이터를 불러오는 중...</div>;
  }

  if (error) {
    return <div>에러 발생: {error}</div>;
  }

  return (
    <div>
      {/* 로고와 메뉴바 */}
      <header style={styles.header as React.CSSProperties}>
        <div style={styles.logo as React.CSSProperties}>
          <Image src="/main.png" alt="로고" width={100} height={50} />
        </div>
        <nav style={styles.nav as React.CSSProperties}>
          <Link href="/cart"><a style={styles.navLink}>장바구니</a></Link>
          <Link href="/mypage"><a style={styles.navLink}>마이페이지</a></Link>
          <Link href="/login"><a style={styles.navLink}>로그인</a></Link>
          <input type="text" placeholder="검색" style={styles.search} />
        </nav>
      </header>

      {/* 메뉴바 */}
      <div style={styles.menuBar as React.CSSProperties}>
        <Link href="/"><a style={styles.menuItem}>홈</a></Link>
        <Link href="/products"><a style={styles.menuItem}>제품</a></Link>
        <Link href="/reviews"><a style={styles.menuItem}>리뷰</a></Link>
        <Link href="/qa"><a style={styles.menuItem}>Q&A</a></Link>
      </div>

      {/* 상품 리스트 */}
      <div style={styles.productList as React.CSSProperties}>
        {products.length === 0 ? (
          <div>표시할 상품이 없습니다.</div>
        ) : (
          products.map((product) => (
            <div key={product.productId} style={styles.productItem as React.CSSProperties}>
              <img src={product.image} alt={product.productName} style={styles.productImage as React.CSSProperties} />
              <h3>{product.productName}</h3>
              <p>가격: {product.price}원</p>
              {product.discount > 0 && <p>할인: {product.discount}%</p>}
              <p>{product.detailInfo}</p>
            </div>
          ))
        )}
      </div>

      {/* 화살표 버튼 */}
      <button style={styles.scrollButton as React.CSSProperties}>&uarr;</button>
    </div>
  );
};

// 스타일 객체
const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    borderBottom: '1px solid #ccc',
  },
  logo: {
    flex: '1',
  },
  nav: {
    display: 'flex',
    alignItems: 'center',
    flex: '2',
    justifyContent: 'flex-end',
  },
  navLink: {
    margin: '0 15px',
    textDecoration: 'none',
    color: '#000',
  },
  search: {
    padding: '5px',
    fontSize: '16px',
  },
  menuBar: {
    display: 'flex',
    justifyContent: 'center',
    padding: '10px',
    borderBottom: '1px solid #ccc',
    marginBottom: '20px',
  },
  menuItem: {
    margin: '0 20px',
    textDecoration: 'none',
    color: '#000',
    fontSize: '18px',
  },
  productList: {
    display: 'flex',
    flexWrap: 'wrap' as 'wrap',
    justifyContent: 'center',
    padding: '20px',
  },
  productItem: {
    width: '150px',
    height: '250px',
    backgroundColor: '#eee',
    margin: '10px',
    display: 'flex',
    flexDirection: 'column' as 'column', // flexDirection에 명시적으로 'column'을 단언
    justifyContent: 'center',
    alignItems: 'center',
  },
  productImage: {
    width: '100px',
    height: '100px',
    objectFit: 'cover',
  },
  scrollButton: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    padding: '10px',
    backgroundColor: '#000',
    color: '#fff',
    border: 'none',
    borderRadius: '50%',
    cursor: 'pointer',
  },
};

export default Mall;
