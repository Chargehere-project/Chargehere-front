import React from 'react';
import Notice from '@/components/Notice/notice';  // Notice 컴포넌트 경로에 맞게 수정
import Header from '@/components/ChargeMain/Header';
// import Footer from '@/components/ChargeMain/Footer';

const NoticePage: React.FC = () => {
  return (
    <div>
        <Header  />
      <Notice />  {/* Notice 컴포넌트를 렌더링 */}
      {/* <Footer  /> */}
    </div>
  );
};

export default NoticePage;
