import { Box, Button, Grid, Typography } from "@mui/material";
// import { GazouImage } from "../Components/GazouImage";
import { Header } from "../Components/Header";
import { Footer } from "../Components/Footer";
import { BodyCard } from "../Components/BodyCard";
import { BodyCard2 } from "../Components/BodyCard2";
// import { Contact } from "../Components/Contact";
import ImageGallery from "react-image-gallery";
import Gazou from '../assets/gazou.png';
import CEO from '../assets/CEO.png'
import Lady from '../assets/lady.png'
import Smartphone from '../assets/smartphone.png'
import Ai from '../assets/ai.png'
import It from '../assets/it.png'
import 'react-image-gallery/styles/css/image-gallery.css';
import { keyframes } from '@emotion/react';
import { useCallback, useMemo, useRef, useState } from "react";
// import Ikemen from '../assets/ikemen.png';
import { BodyCard3 } from "../Components/BodyCard3";
import { BodyCard4 } from "../Components/BodyCard4";
import It2 from '../assets/it2.png';
import It3 from '../assets/it3.png';
import Top from '../assets/top.png';
import Top2 from '../assets/top2.png';
import React from "react";


const images = [
    // {
    //     original: Gazou,
    //     // thumbnail: 'https://picsum.photos/id/1018/250/150/',
    // },
    // {
    //     original: CEO,
    //     // thumbnail: 'https://picsum.photos/id/1018/250/150/',
    // },
    { original: It },
    { original: It3 },
    { original: It2 }
];

const ZOOM_DURATION = 3000;   // 5秒
const SLIDE_DURATION = 600;   // スライド切替アニメ

// 中央基準でズーム（translate(-50%, -50%)をfrom/to両方に入れる）
const makeKenBurns = (scale = 1.1) => keyframes`
  from { transform: translate(-50%, -50%) scale(1); }
  to   { transform: translate(-50%, -50%) scale(${scale}); }
`;

export const headerHeight = '80px'; // MUIのデフォルトToolbar高さ（px）

export const TopPage = () => {

    const reduceMotion = false; // デバッグ中は固定false
    const galleryRef = useRef<ImageGallery | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    React.useEffect(() => {
        window.scrollTo(0, 0)
    }, [location])

    // 例）500pxの原画像の中心300pxを最終的にフルにしたい → scale = 500/300 ? 1.6667
    const items = useMemo(
        () =>
            [It, It3, It2].map((src, i) => ({
                original: src,
                zoomScale: 1.1,
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
                        height: '65%',
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
        <Box sx={{ backgroundColor: 'white', }}>
            <Header></Header>
            <Box
                sx={{
                    width: '100%',
                    height: {xl:1000, xs: 800},
                    paddingTop: '90px',
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
                    showBullets={false}
                    showNav={false}
                    infinite
                    autoPlay={false}        // ズーム完了で手動遷移
                    slideDuration={SLIDE_DURATION}
                    onSlide={handleSlide}
                />
            </Box>
            <Box sx={{ flexGrow: 1, p: 4, mx: 20, mt: 0, }}>
                <Grid
                    container
                    spacing={4}
                    alignItems="center"
                    direction="row" // 横並び強制
                    wrap="nowrap"   // 折り返し防止
                >
                    {/* 左側の画像 */}
                    <Grid item sx={{ flex: '0 0 auto' }}>
                        <Box
                            component="img"
                            src={Top}
                            alt="Mission Image"
                            sx={{
                                width: 600,
                                height: 600,
                                borderRadius: 2,
                                boxShadow: 3,
                            }}
                        />
                    </Grid>

                    {/* 右側のテキスト */}
                    <Grid item sx={{ flex: 1 }}>
                        <Typography
                            variant="h1"
                            sx={{
                                fontWeight: 'bold',
                                color: '#F89F2D ',
                                letterSpacing: '0.1em',
                            }}
                        >
                            MISSION
                        </Typography>

                        <Typography
                            variant="h4"
                            sx={{
                                mt: 2,
                                mb: 2,
                                // ml:10,
                                color: '#F89F2D ',
                                // fontWeight: 'bold',
                            }}
                        >
                            お客様の創造的活動を支える
                        </Typography>

                        <Typography variant='h6' sx={{ lineHeight: 1.8, ml: 12 }}>
                            私達システムプロステージのミッションは、
                        </Typography>
                        <Typography variant='h6' sx={{ lineHeight: 1.8, ml: 12 }}>
                            これからの知識社会にむけて、お客様の創造的活動を支えるコンピュータシステムと
                        </Typography>
                        <Typography variant='h6' sx={{ lineHeight: 1.8, ml: 12 }}>
                            ソフトウェアつくりのプロフェッショナル集団として、
                        </Typography>
                        <Typography variant='h6' sx={{ lineHeight: 1.8, ml: 12 }}>
                            皆様のお役に立つ知恵を提供していきます。
                        </Typography>
                    </Grid>
                </Grid>
            </Box>


            <Box sx={{ flexGrow: 1, mx: 30, mt: 20 }}>
                <Grid
                    container
                    spacing={4}
                    alignItems="center"
                    justifyContent='center'
                    direction="row" // 横並び強制
                    wrap="nowrap"   // 折り返し防止
                >
                    <Typography
                        variant="h4"
                        sx={{
                            mt: 2,
                            mb: 2,
                            mr: 20,
                            color: '#F89F2D ',
                            // fontWeight: 'bold',
                        }}
                    >
                        期待を超える価値の提供を
                    </Typography>
                    <Typography
                        variant="h1"
                        sx={{
                            fontWeight: 'bold',
                            color: '#F89F2D ',
                            letterSpacing: '0.1em',
                        }}
                    >
                        BUSINESS
                    </Typography>

                </Grid>
            </Box>
            <Box sx={{ flexGrow: 1, mx: 30, }}>
                <Grid
                    container
                    spacing={4}
                    // alignItems="center"
                    direction="row" // 横並び強制
                    wrap="nowrap"   // 折り返し防止
                >
                    <Grid item sx={{ flex: 1, mt: 10 }}>
                        <Typography variant='h6' sx={{ lineHeight: 1.8, ml: 6 }}>
                            システムプロステージは、設計、開発、テスト、保守運用等
                        </Typography>
                        <Typography variant='h6' sx={{ lineHeight: 1.8, ml: 6 }}>
                            各工程において幅広い実績があります。
                        </Typography>
                        <Typography variant='h6' sx={{ lineHeight: 1.8, ml: 6 }}>
                            いずれのプロジェクトでもお客様にご満足頂けることを第一とし
                        </Typography>
                        <Typography variant='h6' sx={{ lineHeight: 1.8, ml: 6 }}>
                            設立から30年以上、多くのお客様にご愛顧いただいております。
                        </Typography>
                    </Grid>
                    {/* 左側の画像 */}
                    <Grid item sx={{ flex: '0 0 auto' }}>
                        <Box
                            component="img"
                            src={Top2}
                            alt="Mission Image"
                            sx={{
                                width: 600,
                                height: 500,
                                borderRadius: 2,
                                boxShadow: 3,
                            }}
                        />
                    </Grid>
                </Grid>
            </Box>
            <Grid container sx={{ justifyContent: 'center', margin: '200px', mt: 40 }} spacing={30}>
                <Grid item xs={4}>
                    <BodyCard />
                </Grid>
                <Grid item xs={4}>
                    <BodyCard2 />
                </Grid>
            </Grid>
            <Grid container sx={{ justifyContent: 'center', margin: '200px' }} spacing={30}>
                <Grid item xs={4}>
                    <BodyCard3 />
                </Grid>
                <Grid item xs={4}>
                    <BodyCard4 />
                </Grid>
            </Grid>
            {/* <Contact /> */}
            <Footer />
        </Box>

    );
}