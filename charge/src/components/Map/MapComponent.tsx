import React, { useEffect, useState, useCallback } from 'react';
import Script from 'next/script';
import axios from 'axios';

interface Charger {
    lat: number;
    lng: number;
    statNm: string;
    stat: string;
}

declare global {
  interface Window {
    kakao: any;
  }
}

const MapComponent = () => {
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  const [chargers, setChargers] = useState<Charger[]>([]);

  // 충전소 데이터 가져오기
  const fetchChargers = async (map: any) => {
    try {
        const response = await axios.get('http://localhost:8000/chargers', {
            params: {
                pageNo: 1,
                numOfRows: 10,
                period: 5,
                zcode: 11
            }
        });

      const chargersData = response.data.items || [];
      setChargers(chargersData);

      // 마커 추가
      chargersData.forEach((charger: Charger) => {
        const marker = new window.kakao.maps.Marker({
          position: new window.kakao.maps.LatLng(charger.lat, charger.lng)
        });

        marker.setMap(map);

        // 정보창 생성
        const infowindow = new window.kakao.maps.InfoWindow({
          content: `
            <div style="padding:10px;">
              <h3>${charger.statNm}</h3>
              <p>상태: ${charger.stat}</p>
            </div>
          `
        });

        // 마커 클릭 이벤트
        window.kakao.maps.event.addListener(marker, 'click', () => {
          infowindow.open(map, marker);
        });
      });

    } catch (error) {
      console.error('충전소 데이터 로딩 실패:', error);
    }
  };

  // Kakao 지도 초기화 함수
  const initializeMap = useCallback(() => {
    if (window.kakao && window.kakao.maps) {
      const container = document.getElementById('map');
      const options = {
        center: new window.kakao.maps.LatLng(37.54357038203505, 126.9513771249514),
        level: 3,
      };

      const map = new window.kakao.maps.Map(container, options);
      console.log('Map initialized successfully!');

      // 지도 생성 후 충전소 데이터 가져오기
      fetchChargers(map);
    } else {
      console.error('Kakao maps library is not available.');
    }
  }, []);

  useEffect(() => {
    if (isScriptLoaded) {
      initializeMap();
    }
  }, [isScriptLoaded, initializeMap]);

  return (
    <>
      <div id="map" style={{ width: '100%', height: '800px' }}></div>
      <Script
        src={`https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_API_KEY}&autoload=false`}
        strategy="beforeInteractive"
        onLoad={() => {
          console.log('Kakao map script loaded successfully!');
          window.kakao.maps.load(() => setIsScriptLoaded(true));
        }}
        onError={(e) => console.error('Failed to load Kakao map script:', e)}
      />
    </>
  );
};

export default MapComponent;