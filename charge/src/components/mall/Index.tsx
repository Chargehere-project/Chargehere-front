import Header from './header';
import Swipe from './Swipe';
import { ArrowUpOutlined } from '@ant-design/icons'; 

const MallIndex: React.FC = () => {
  return (
    <div>
      <Header />
      {/* 광고 배너 섹션 */}
      <Swipe />

      {/* 제품 리스트 섹션 */}
      <section style={{ display: 'flex', justifyContent: 'space-around', marginTop: '40px' }}>
        <div style={{ width: '20%', height: '300px', backgroundColor: '#f2f2f2', textAlign: 'center' }}>
          <p>제품 1</p>
        </div>
        <div style={{ width: '20%', height: '300px', backgroundColor: '#f2f2f2', textAlign: 'center' }}>
          <p>제품 2</p>
        </div>
        <div style={{ width: '20%', height: '300px', backgroundColor: '#f2f2f2', textAlign: 'center' }}>
          <p>제품 3</p>
        </div>
        <div style={{ width: '20%', height: '300px', backgroundColor: '#f2f2f2', textAlign: 'center' }}>
          <p>제품 4</p>
        </div>
      </section>

      {/* 하단의 페이지 상단으로 이동하는 화살표 버튼 */}
      <button 
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          backgroundColor: '#333',
          color: '#fff',
          border: 'none',
          padding: '10px',
          borderRadius: '50%',
          cursor: 'pointer'
        }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <ArrowUpOutlined style={{ fontSize: '20px' }} />
      </button>
    </div>
  );
};

export default MallIndex;
