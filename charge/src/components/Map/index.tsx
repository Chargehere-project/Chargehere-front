// src/components/Map/index.tsx
import dynamic from 'next/dynamic';
import React from 'react';

// 동적 로딩을 통해 Map 컴포넌트를 클라이언트 사이드에서만 로드
const MapComponent = dynamic(() => import('./MapComponent'), { ssr: false });

const Map = () => {
  return (
    <div>
      <h1>지도 예시</h1>
      <MapComponent />
    </div>
  );
};

export default Map;