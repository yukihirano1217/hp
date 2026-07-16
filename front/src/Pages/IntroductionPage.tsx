import { Box, Divider, Typography } from "@mui/material";
import { Footer } from "../Components/Footer";
import { Header } from "../Components/Header";
import { headerHeight } from "./TopPage";
import Company from '../assets/company.png'
import React from "react";

export const IntroductionPage = () => {
    React.useEffect(() => {
        window.scrollTo(0, 0)
    }, [location])
    return (
        <>
            <Box sx={{ backgroundColor: 'white', }}>
                <Header></Header>
                <Box sx={{ justifyContent: 'center', display: 'flex', backgroundColor: 'black', position: 'relative', overflow: 'hidden', paddingTop: headerHeight, }}>
                    <Box
                        component="img"
                        src={Company}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            objectFit: 'contain',
                            // height: '400px',
                            width: '100%',
                            zIndex: 1,
                            // paddingTop: '80px'
                        }}
                    />
                    <Typography sx={{ position: 'absolute',  top: '150px', left: '30px', color: 'white', zIndex: 2 }}>
                        ホーム　＞　会社概要
                    </Typography>

                    <Typography
                        variant="h4"
                        sx={{
                            position: 'absolute',
                            top: '200px',
                            left: '100px',
                            // transform: 'translate(-50%, -50%)',
                            color: 'white',
                            textAlign: 'center',
                            zIndex: 2,
                        }}
                    >会社概要</Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            position: 'absolute',
                            top: '270px',
                            left: '160px',
                            // transform: 'translate(-50%, -50%)',
                            color: 'white',
                            textAlign: 'center',
                            zIndex: 2,
                        }}
                    >
                        システムプロステージの基本情報をご紹介します
                    </Typography>
                </Box>

            </Box>
            <Box sx={{ backgroundColor: 'white', padding: '100px', marginX: '100px' }}>
                <Box sx={{ justifyContent: 'center', display: 'flex', marginTop: '50px', marginBottom: '150px' }}>
                    <Typography
                        variant="h4"
                    >
                        システムプロステージは知恵の力でIT社会の未来を切り開きます
                    </Typography>
                </Box>
                <Divider sx={{ borderColor: 'rgba(0, 0, 0, 0.12)', borderWidth: '1px', width: '100%' }} />
                <Box sx={{ justifyContent: 'center', display: 'flex', }}>
                    <Box sx={{ width: '40%' }}>
                        <Typography
                            variant="h6"
                            sx={{ margin: '50px', textAlign: 'right' }}
                        >
                            会社名
                        </Typography>
                    </Box>
                    <Box sx={{ width: '60%' }}>
                        <Typography
                            variant="body1"
                            sx={{ margin: '50px', textAlign: 'justify' }}
                        >
                            株式会社システムプロステージ
                        </Typography>
                    </Box>
                </Box>
                <Divider sx={{ borderColor: 'rgba(0, 0, 0, 0.12)', borderWidth: '1px', width: '100%' }} />
                <Box sx={{ justifyContent: 'center', display: 'flex', }}>
                    <Box sx={{ width: '40%' }}>
                        <Typography
                            variant="h6"
                            sx={{ margin: '50px', textAlign: 'right' }}
                        >
                            本社所在地
                        </Typography>
                    </Box>
                    <Box sx={{ width: '60%' }}>
                        <Typography
                            variant="body1"
                            sx={{ margin: '50px', textAlign: 'justify' }}
                        >
                            〒812-0011 福岡市博多区博多駅前1丁目15-12 藤田ビル4Ｆ
                        </Typography>
                    </Box>
                </Box>
                <Divider sx={{ borderColor: 'rgba(0, 0, 0, 0.12)', borderWidth: '1px', width: '100%' }} />
                <Box sx={{ justifyContent: 'center', display: 'flex', }}>
                    <Box sx={{ width: '40%' }}>
                        <Typography
                            variant="h6"
                            sx={{ margin: '50px', textAlign: 'right' }}
                        >
                            代表者
                        </Typography>
                    </Box>
                    <Box sx={{ width: '60%' }}>
                        <Typography
                            variant="body1"
                            sx={{ margin: '50px', textAlign: 'justify' }}
                        >
                            代表取締役社長　二瓶 剛嘉
                        </Typography>
                    </Box>
                </Box>
                <Divider sx={{ borderColor: 'rgba(0, 0, 0, 0.12)', borderWidth: '1px', width: '100%' }} />
                <Box sx={{ justifyContent: 'center', display: 'flex', }}>
                    <Box sx={{ width: '40%' }}>
                        <Typography
                            variant="h6"
                            sx={{ margin: '50px', textAlign: 'right' }}
                        >
                            設立
                        </Typography>
                    </Box>
                    <Box sx={{ width: '60%' }}>
                        <Typography
                            variant="body1"
                            sx={{ margin: '50px', textAlign: 'justify' }}
                        >
                            １９８９年１月
                        </Typography>
                    </Box>
                </Box>
                <Divider sx={{ borderColor: 'rgba(0, 0, 0, 0.12)', borderWidth: '1px', width: '100%' }} />
                <Box sx={{ justifyContent: 'center', display: 'flex', }}>
                    <Box sx={{ width: '40%' }}>
                        <Typography
                            variant="h6"
                            sx={{ margin: '50px', textAlign: 'right' }}
                        >
                            資本金
                        </Typography>
                    </Box>
                    <Box sx={{ width: '60%' }}>
                        <Typography
                            variant="body1"
                            sx={{ margin: '50px', textAlign: 'justify' }}
                        >
                            １，０００万円
                        </Typography>
                    </Box>
                </Box>
                <Divider sx={{ borderColor: 'rgba(0, 0, 0, 0.12)', borderWidth: '1px', width: '100%' }} />
                <Box sx={{ justifyContent: 'center', display: 'flex', }}>
                    <Box sx={{ width: '40%' }}>
                        <Typography
                            variant="h6"
                            sx={{ margin: '50px', textAlign: 'right' }}
                        >
                            従業員
                        </Typography>
                    </Box>
                    <Box sx={{ width: '60%' }}>
                        <Typography
                            variant="body1"
                            sx={{ margin: '50px', textAlign: 'justify' }}
                        >
                            ４０名（20XX年XX月現在）
                        </Typography>
                    </Box>

                </Box>
                <Divider sx={{ borderColor: 'rgba(0, 0, 0, 0.12)', borderWidth: '1px', width: '100%' }} />
                <Box sx={{ justifyContent: 'center', display: 'flex', }}>
                    <Box sx={{ width: '40%' }}>
                        <Typography
                            variant="h6"
                            sx={{ margin: '50px', textAlign: 'right' }}
                        >
                            事業内容
                        </Typography>
                    </Box>
                    <Box sx={{ width: '60%' }}>
                        <Typography
                            variant="body1"
                            sx={{ margin: '50px', textAlign: 'justify' }}
                        >
                            企業向けソフトウェア開発支援<br />
                            ・企画、立案コンサルティング<br />
                            ・設計、開発<br />
                            ・運用、保守<br />
                        </Typography>
                    </Box>
                </Box>
                <Divider sx={{ borderColor: 'rgba(0, 0, 0, 0.12)', borderWidth: '1px', width: '100%' }} />
                <Box sx={{ justifyContent: 'center', display: 'flex', }}>
                    <Box sx={{ width: '40%' }}>
                        <Typography
                            variant="h6"
                            sx={{ margin: '50px', textAlign: 'right' }}
                        >
                            主なお取引先
                        </Typography>
                    </Box>
                    <Box sx={{ width: '60%' }}>
                        <Typography
                            variant="body1"
                            sx={{ margin: '50px', textAlign: 'justify' }}
                        >
                            ㈱ニコンシステム、㈱九州DTS、近代システムビューロー㈱、富士ソフト㈱ほか
                        </Typography>
                    </Box>
                </Box>

                <Divider sx={{ borderColor: 'rgba(0, 0, 0, 0.12)', borderWidth: '1px', width: '100%' }} />
                <Box sx={{ justifyContent: 'center', display: 'flex', }}>
                    <Box sx={{ width: '40%' }}>
                        <Typography
                            variant="h6"
                            sx={{ margin: '50px', textAlign: 'right' }}
                        >
                            アクセス
                        </Typography>
                    </Box>

                    <Box sx={{ justifyContent: 'center', width: '60%' }}>

                        <Typography
                            variant="body1"
                            sx={{ margin: '50px', textAlign: 'justify' }}
                        >
                            株式会社システムプロステージ<br />
                            〒812-0011<br />
                            福岡市博多区博多駅前1-15-12<br />
                            藤田ビル４Ｆ<br />
                            <br />
                            Tel：092-475-6111<br />
                            <br />
                            ※JR博多駅より徒歩５分<br />
                            ※地下鉄博多駅より徒歩３分<br />
                        </Typography>
                        <Box sx={{ m: '50px' }}>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.5062840569008!2d130.41636107569687!3d33.5921659733338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x354191c7acc14047%3A0xc4703b4bc5420ad6!2zKOag
qinjgrfjgrnjg4bjg6Djg5fjg63jgrnjg4bjg7zjgrg!5e0!3m2!1sen!2sjp!4v1782100188783!5m2!1sja!2sjp" width="600" height="450"
                                // style="border:0;"
                                // allowfullscreen=""
                                loading="lazy"
                            // referrerpolicy="no-referrer-when-downgrade"
                            >

                            </iframe>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Footer />
        </>
    );
}