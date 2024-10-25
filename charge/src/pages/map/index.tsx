import React from 'react';
import Header from '@/components/ChargeMain/Header';
import Map from '@/components/Map';
// import Footer from '@/components/ChargeMain/Footer';

const NoticePage: React.FC = () => {
  return (
    <div>
        <Header  />
        {/* Notice 컴포넌트를 렌더링 */}
        <Map/>
      {/* <Footer  /> */}
    </div>
  );
};

export default NoticePage;
