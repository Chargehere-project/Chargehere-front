import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';


const MainSwipe: React.FC = () =>{
    const router = useRouter();
    const colla = () => router.push('/event/1');
    const nextcard = () => {
        router.push('/event/2');
    };
    const onstyle = () => {
        router.push('/event/3');
    };
    return (
        <>
            <div>
                <Swiper
                    centeredSlides={true}
                    spaceBetween={50}
                    loop={true}
                    autoplay={{ delay: 5000 }}
                    navigation
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination, Navigation, Autoplay]}
                >
                    <SwiperSlide>
                        <Image src="/colla.png" alt="Slide 1" width={900} height={500} onClick={colla} />
                        <div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src="/game.png" alt="Slide 2" width={900} height={500} onClick={nextcard} />
                        <div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src="/style.png" alt="Slide 3" width={900} height={500} onClick={onstyle} />
                        <div>
                            <h2>당신을 위한 쇼핑몰</h2>
                            <p>쉽고 빠른 스타일링 이제 on style과 함께하세요</p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    );
}
export default MainSwipe