import Router from 'next/router';
import Header from './Header';
import MainSwipe from './Swipe';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { RobotFilled } from '@ant-design/icons';
import Coupon from './coupon';

const Main: React.FC = () => {
    const [announcement, setAnnouncement] = useState<string>('');

    useEffect(() => {
        const fetchAnnouncement = async () => {
            try {
                const response = await axios.get('http://localhost:8000/notice');
                setAnnouncement(response.data.data); // 백엔드 응답 구조에 따라 조정
            } catch (error) {
                console.error('공지사항을 가져오는 데 실패했습니다:', error);
            }
        };

        fetchAnnouncement();
    }, []);

    const place = () => {
        Router.push('place');
    };
    const cash = () => {
        Router.push('/cash');
    };

    const charge = () => {
        Router.push('/charge');
    };
    const notice = () =>{
        Router.push('/notice')
    }
    return (
        <>
            <Header />
            <div>로그인 후 이용 가능합니다.</div>
            <MainSwipe />
            <div onClick={place} style={{ width: '200px', height: '200px', backgroundColor: 'red' }}>
                충전소 찾기
            </div>
            <div onClick={cash} style={{ width: '200px', height: '200px', backgroundColor: 'red' }}>
                요금 안내
            </div>
            <div onClick={charge} style={{ width: '200px', height: '200px', backgroundColor: 'red' }}>
                충전하기
            </div>
            <div>공지</div>
            <div className="announcement" onClick={notice}>{announcement}</div>
            <Coupon/>
        </>
    );
};

export default Main;
