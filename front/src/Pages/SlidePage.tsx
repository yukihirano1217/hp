import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import './KenBurnsSwiper.css'; // CSSファイルをインポート
import It from '../assets/it.png';
import Ikemen from '../assets/ikemen.png';

const ZOOM_DURATION = 4000; // 8秒
const SLIDE_SPEED = 600;    // スライド切替アニメ
const slides = [It,Ikemen];

export default function KenBurnsSwiper() {
  return (
<div 
  className="kb-container" 
  style={{ 
    width: 1920, 
    height: 400
    // CSS変数を削除
  }}
>
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        speed={SLIDE_SPEED}
        autoplay={{ delay: ZOOM_DURATION + SLIDE_SPEED, disableOnInteraction: false }}
        loop
      >
        {slides.map((src, i) => (
          <SwiperSlide key={i}>
            <div className="kb-slide">
              <div className="kb-stage">
                <img className="kb-image" src={src} alt="" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
