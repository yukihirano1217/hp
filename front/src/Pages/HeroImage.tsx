import React, { useCallback, useMemo, useRef, useState } from 'react';
import { Box } from '@mui/material';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import { keyframes } from '@emotion/react';
import It from '../assets/it.png';
import Ikemen from '../assets/ikemen.png';


const ZOOM_DURATION = 5000;   // 5秒
const SLIDE_DURATION = 600;   // スライド切替アニメ

// 中央基準でズーム（translate(-50%, -50%)をfrom/to両方に入れる）
const makeKenBurns = (scale = 1.6667) => keyframes`
  from { transform: translate(-50%, -50%) scale(1); }
  to   { transform: translate(-50%, -50%) scale(${scale}); }
`;

export default function KenBurnsGallery() {
  const reduceMotion = false; // デバッグ中は固定false
  const galleryRef = useRef<ImageGallery | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // 例）500pxの原画像の中心300pxを最終的にフルにしたい → scale = 500/300 ≈ 1.6667
  const items = useMemo(
    () =>
      [It, Ikemen].map((src, i) => ({
        original: src,
        zoomScale: 1.6667,
        _idx: i,
      })),
    []
  );

  const handleSlide = useCallback((idx: number) => setCurrentIndex(idx), []);

  const renderItem = useCallback(
    (item: any) => {
      const isActive = item._idx === currentIndex;
      const kb = makeKenBurns(item.zoomScale ?? 1.6667);

      return (
        // スライドの可視領域（枠内のみ表示）
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            backgroundColor: '#000',
          }}
        >
          {/* ステージ（中央固定で拡大） */}
          <Box
            key={`kb-${currentIndex}-${item._idx}`}
            onAnimationEnd={() => {
              if (!reduceMotion && isActive && galleryRef.current) {
                const next = (currentIndex + 1) % items.length;
                galleryRef.current.slideToIndex(next);
              }
            }}
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: '100%',
              height: '100%',
              transformOrigin: 'center',
              willChange: 'transform',
              ...(reduceMotion
                ? { transform: 'translate(-50%, -50%) scale(1)' }
                : isActive
                ? { animation: `${kb} ${ZOOM_DURATION}ms ease-in-out forwards` }
                : { transform: 'translate(-50%, -50%) scale(1)' }),
            }}
          >
            {/* 画像は枠いっぱいにフィット（枠外はトリミング） */}
            <Box
              component="img"
              src={item.original}
              alt=""
              sx={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </Box>
        </Box>
      );
    },
    [currentIndex, items.length, reduceMotion]
  );

  return (
    // 固定枠：1920×400（ここが可視エリアの「絶対サイズ」）
    <Box
      sx={{
        width: 1920,
        height: 400,
        // 内部に高さ/幅100%を確実に伝播（重要）
        '& .kb-gallery': { width: '100%', height: '100%' },
        '& .kb-gallery.image-gallery': { width: '100%', height: '100%' },
        '& .kb-gallery .image-gallery-content': { width: '100%', height: '100%' },
        '& .kb-gallery .image-gallery-slide-wrapper': { width: '100%', height: '100%' },
        '& .kb-gallery .image-gallery-swipe': { width: '100%', height: '100%' },
        '& .kb-gallery .image-gallery-slides': { width: '100%', height: '100%' },
        '& .kb-gallery .image-gallery-slide': { width: '100%', height: '100%' },
      }}
    >
      <ImageGallery
        ref={galleryRef}
        items={items}
        renderItem={renderItem}
        additionalClass="kb-gallery"
        showThumbnails={false}
        showPlayButton={false}
        showFullscreenButton={false}
        showBullets
        infinite
        autoPlay={false}        // ズーム完了で手動遷移
        slideDuration={SLIDE_DURATION}
        onSlide={handleSlide}
      />
    </Box>
  );
}
