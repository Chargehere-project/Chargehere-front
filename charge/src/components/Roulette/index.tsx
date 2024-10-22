import React, { useState } from 'react';
import styles from './Roulette.module.css';

interface RouletteProps {
  items: string[];
}

const Roulette: React.FC<RouletteProps> = ({ items }) => {
  const [rotation, setRotation] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [result, setResult] = useState<string>('');
  const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEEAD', '#D4A5A5'];
  const centerX = 150; // SVG 중심 X 좌표
  const centerY = 150; // SVG 중심 Y 좌표
  const radius = 150; // 원의 반지름

  // 각 섹션의 경로 계산
  const createSectorPath = (startAngle: number, endAngle: number) => {
    const start = polarToCartesian(centerX, centerY, radius, endAngle);
    const end = polarToCartesian(centerX, centerY, radius, startAngle);
    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
    
    return [
      "M", centerX, centerY,
      "L", start.x, start.y,
      "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y,
      "Z"
    ].join(" ");
  };

  // 극좌표를 직교좌표로 변환
  const polarToCartesian = (centerX: number, centerY: number, radius: number, angleInDegrees: number) => {
    const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
    return {
      x: centerX + (radius * Math.cos(angleInRadians)),
      y: centerY + (radius * Math.sin(angleInRadians))
    };
  };

    // getResult 함수 추가
    const getResult = (rotation: number) => {
        const normalizedRotation = rotation % 360;
        const sectionIndex = Math.floor(normalizedRotation / 60);
        return items[sectionIndex];
      };

  const spinWheel = () => {
    if (!isSpinning) {
      setIsSpinning(true);
      const randomRotation = Math.floor(Math.random() * 360) + 3600;
      setRotation(prev => prev + randomRotation);
      
      setTimeout(() => {
        setIsSpinning(false);
      }, 5000);
    }
  };
  

  return (
    <div className={styles.container}>
      <div className={styles.wheelContainer}>
        <svg 
          className={styles.wheel} 
          viewBox="0 0 300 300"
          style={{ transform: `rotate(${rotation}deg)` }}
        >
          {items.map((item, index) => {
            const startAngle = (index * 60);
            const endAngle = ((index + 1) * 60);
            return (
              <g key={index}>
                <path
                  d={createSectorPath(startAngle, endAngle)}
                  fill={colors[index]}
                  stroke="#fff"
                  strokeWidth="2"
                />
                <text
                  x={centerX}
                  y={centerY}
                  transform={`rotate(${startAngle + 30}, ${centerX}, ${centerY}) translate(0, -${radius/2})`}
                  textAnchor="middle"
                  className={styles.sectionText}
                >
                  {item}
                </text>
              </g>
            );
          })}
        </svg>
        <div className={styles.pointer}></div>
      </div>
      <button 
        className={styles.button} 
        onClick={spinWheel} 
        disabled={isSpinning}
      >
        {isSpinning ? '돌아가는 중...' : '돌리기'}
      </button>
    </div>
  );
};

export default Roulette;