import React from 'react';
import Mall from '../../components/mall/mall';

const MallPage: React.FC = () => {
  return (
    <div>
      <Mall />
      <p>
        다른 상품을 찾고 계신가요? <a href="/">홈으로 돌아가기</a>
      </p>
    </div>
  );
};

export default MallPage;
