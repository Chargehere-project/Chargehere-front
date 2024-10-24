import { useEffect, useRef } from 'react';

const Roulette = () => {
   const canvasRef = useRef<HTMLCanvasElement>(null);

   const product = [
       "떡볶이", '돈가스', "초밥", "피자", "냉면", "치킨", '족발', "피자", "삼겹살",
   ];
   
   const colors = [
       "#dc0936", "#e6471d", "#f7a416", "#efe61f ", "#60b236", 
       "#209b6c", "#169ed8", "#3f297e", "#87207b", "#be107f", "#e7167b"
   ];

   useEffect(() => {
       const canvas = canvasRef.current;
       if (!canvas) return;

       const ctx = canvas.getContext('2d');
       if (!ctx) return;

       // newMake 함수 내용
       const [cw, ch] = [canvas.width / 2, canvas.height / 2];
       const arc = Math.PI / (product.length / 2);

       // 룰렛 섹션 그리기
       for (let i = 0; i < product.length; i++) {
           ctx.beginPath();
           ctx.fillStyle = colors[i % (colors.length - 1)];
           ctx.moveTo(cw, ch);
           ctx.arc(cw, ch, cw, arc * (i - 1), arc * i);
           ctx.fill();
           ctx.closePath();
       }

       // 텍스트 스타일 설정
       ctx.fillStyle = "#fff";
       ctx.font = "18px Pretendard";
       ctx.textAlign = "center";

       // 텍스트 그리기
       for (let i = 0; i < product.length; i++) {
           const angle = (arc * i) + (arc / 2);

           ctx.save();

           ctx.translate(
               cw + Math.cos(angle) * (cw - 50),
               ch + Math.sin(angle) * (ch - 50),
           );

           ctx.rotate(angle + Math.PI / 2);

           product[i].split(" ").forEach((text, j) => {
               ctx.fillText(text, 0, 30 * j);
           });

           ctx.restore();
       }
   }, []); // 빈 배열은 컴포넌트가 마운트될 때 한 번만 실행됨을 의미

   // 회전 함수
   const handleRotate = () => {
       const canvas = canvasRef.current;
       if (!canvas) return;

       canvas.style.transform = `initial`;
       canvas.style.transition = `initial`;

       setTimeout(() => {
           const ran = Math.floor(Math.random() * product.length);
           const arc = 360 / product.length;
           const rotate = (ran * arc) + 3600 + (arc * 3) - (arc/4);
           
           canvas.style.transform = `rotate(-${rotate}deg)`;
           canvas.style.transition = `2s`;
           
           setTimeout(() => alert(`오늘의 야식은?! ${product[ran]} 어떠신가요?`), 2000);
       }, 1);
   };

   // 스타일 정의
   const containerStyle = {
       display: 'flex',
       flexDirection: 'column' as 'column',
       alignItems: 'center',
       gap: '20px',
       padding: '20px'
   };

   const buttonStyle = {
       padding: '10px 20px',
       fontSize: '16px',
       backgroundColor: '#007bff',
       color: 'white',
       border: 'none',
       borderRadius: '5px',
       cursor: 'pointer'
   };

   return (
       <div style={containerStyle}>
           <canvas 
               ref={canvasRef} 
               width="500" 
               height="500" 
               style={{ border: '2px solid #000' }}
           />
           <button 
               onClick={handleRotate} 
               style={buttonStyle}
           >
               룰렛 돌리기
           </button>
       </div>
   );
};

export default Roulette;