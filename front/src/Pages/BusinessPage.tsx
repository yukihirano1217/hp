import { Avatar, Box, Container, Grid, Modal, Paper, Typography } from "@mui/material";
import { Footer } from "../Components/Footer";
import { Header } from "../Components/Header";
// import { CompanyImage } from "../Components/CompanyImage";
import { BusinessCard } from "../Components/BusinessCard";
import React from "react";
import { LanguageGraph } from "../Components/LanguageGraph";
import { headerHeight } from "./TopPage";
import Company from '../assets/company.png'
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import Ikemen from '../assets/ikemen.png'

export const BusinessPage = () => {

    const [businessModalOpen, setBusinessModalOpen] = React.useState(false);
    const handleModal = () => {
        // モーダルを開く処理をここに追加
        setBusinessModalOpen(true);
    };
    React.useEffect(() => {
        window.scrollTo(0, 0)
    }, [location])

    const TestimonialCard = ({ children, avatarSrc, small }) => {
        return (
            <Paper
                elevation={0}
                sx={{
                    backgroundColor: '#fff',
                    borderRadius: 2,
                    padding: small ? '12px 16px' : '18px 22px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                    maxWidth: 400,
                }}
            >
                <Typography variant='subtitle1' sx={{ color: '#e65a3a', fontWeight: 700, mb: 0.5 }}>
                    { /* optional colored title part could be embedded in children */}
                </Typography>
                <Typography variant="h6" sx={{ color: '#333', lineHeight: 1.6 }}>
                    {children}
                </Typography>
                {avatarSrc && (
                    <Avatar
                        src={avatarSrc}
                        sx={{ width: 40, height: 40, mt: 0, ml: 'auto' }}
                    />
                )}
            </Paper>
        );
    };

    function BubbleWithIcon({ text, align = 'left', size = 300 }) {
        // align: 'left' or 'right'
        return (
            <Box
                sx={{
                    position: 'relative',
                    width: "400px",
                    height: "100px",
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: align === 'left' ? 'flex-start' : 'flex-end',
                    px: 1,
                }}
            >

                <ChatBubbleIcon
                    sx={{
                        position: 'absolute',
                        left: align === 'left' ? 0 : 'auto',
                        right: align === 'right' ? 0 : 'auto',
                        width: size,
                        height: "200px",
                        color: '#3f51b5', // 吹き出し色
                        zIndex: 1,
                        // 少し影をつける場合:
                        // filter: 'drop-shadow(0 2px 2px rgba(0,0,0,0.2))',
                        transform: 'scaleX(3)',
                        px: 1
                    }}
                />

                <Typography
                    variant="body1"
                    sx={{
                        position: 'relative',
                        zIndex: 2,
                        color: 'white',
                        px: 2,
                        textAlign: 'center',
                        // テキストが長くなったときの折り返し制御
                        wordBreak: 'break-word',
                    }}
                >
                    {text}
                </Typography>
            </Box>
        );
    }
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
                        }}
                    />
                    <Typography sx={{ position: 'absolute', top: '150px', left: '30px', color: 'white', zIndex: 2 }}>
                        ホーム　＞　事業案内
                    </Typography>

                    <Typography
                        variant="h4"
                        sx={{
                            position: 'absolute',
                            top: '230px',
                            left: '100px',
                            // transform: 'translate(-50%, -50%)',
                            color: 'white',
                            textAlign: 'center',
                            zIndex: 2,
                        }}
                    >事業案内</Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            position: 'absolute',
                            top: '330px',
                            left: '160px',
                            // transform: 'translate(-50%, -50%)',
                            color: 'white',
                            textAlign: 'center',
                            zIndex: 2,
                        }}
                    >
                        開発および運用の実績や当社の人材についてご紹介します
                    </Typography>
                </Box>

            </Box>
            <Typography sx={{ color: 'black', marginLeft: '100px', fontSize: '2rem', my: '5%' }}>開発実績</Typography>
            <Box sx={{ justifyContent: 'center', display: 'flex', marginTop: '50px', marginBottom: '50px' }}>

                <BusinessCard onClick={handleModal} />
                <BusinessCard />
                <BusinessCard />
                <BusinessCard />
            </Box>
            <Box sx={{ justifyContent: 'center', display: 'flex', marginTop: '50px', marginBottom: '50px' }}>

                <BusinessCard />
                <BusinessCard />
                <BusinessCard />
                <BusinessCard />
            </Box>
            <Box sx={{ justifyContent: 'center', display: 'flex', marginTop: '50px', marginBottom: '50px' }}>

                <BusinessCard />
                <BusinessCard />
                <BusinessCard />
                <BusinessCard />
            </Box>
            <Typography sx={{ color: 'black', marginLeft: '100px', fontSize: '2rem', my: '5%' }}>人材紹介
            </Typography>
            <Box sx={{ backgroundColor: 'white', px: '100px', marginX: '100px' }}>
                <Box sx={{ justifyContent: 'center', my:10}}>
                    <Typography
                        variant="h6"
                        sx={{ margin: '50px', textAlign: 'justify' }}
                    >
                        弊社にはフロント、バック、SQL、サーバ、ネットワーク等、多岐にわたる分野で開発・保守経験のある技術者が多数在籍しています。
                        近年ではAIを駆使し、未経験の領域でも素早いキャッチアップで適応しています。技術者全員が新たな技術に対する高い意欲を持っています。
                    </Typography>

                    <LanguageGraph />
                    <Typography
                        variant="h5"
                        sx={{  textAlign: 'justify' }}
                    >
                        プロジェクト管理経験者
                    </Typography>
                    <Typography variant="h5">10名在籍</Typography>
                </Box>

            </Box>

            <Box sx={{ bgcolor: '#f9d3c6', minHeight: '100vh', pt: 10, width: '100%' }}>

                <Typography sx={{ fontSize: '2rem', textAlign: 'center', }}>
                    お客様からの声
                </Typography>

                <Container maxWidth={false} sx={{ position: 'relative', }}>

                    {/* Right-top large testimonial */}
                    <Box sx={{
                        position: 'absolute',
                        right: 80,
                        top: 24,
                        width: '46%',
                        minWidth: 320,
                    }}>
                        <Paper sx={{ p: 3, borderRadius: 2, backgroundColor: '#fff' }}>
                            <Typography variant="h5" sx={{ color: '#e65a3a', fontWeight: 700, mb: 1 }}>
                                シスプロの技術者は、
                            </Typography>
                            <Typography variant="h6" sx={{ color: '#333', lineHeight: 1.7 }}>
                                勤勉で真面目な方が多くとても信頼できます。納期は必ず守るし、成果物の質が高いと感じます。
                            </Typography>
                            <Typography variant="h6" sx={{ color: '#333', lineHeight: 1.7 }}>
                                プロジェクトから離れる際に、大変丁寧な引継書を作成頂いたことが印象的でした。
                            </Typography>
                            <Box sx={{ display: 'flex', justifyContent: 'end', alignItems:'center' }}>
                                <Typography variant="body1" sx={{ color: '#666', mr: 2,}}>株式会社 XXXXX  ●●氏</Typography>
                                <Avatar src="/avatar1.png" sx={{ width: 56, height: 56 }} />
                            </Box>
                        </Paper>
                    </Box>

                    {/* Left column cards */}
                    <Box sx={{
                        position: 'absolute',
                        left: 160,
                        top: 90,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 36,
                        width: '32%',
                        minWidth: 300,
                    }}>
                        <TestimonialCard small={false} avatarSrc="/avatar2.png">
                            大変信頼しております。システムプロステージのAさんなしでは現場が回りません！（デザイン会社様）
                        </TestimonialCard>

                        <TestimonialCard small={false} avatarSrc="/avatar3.png">
                            Bさんのいるシステムプロステージに今後も依頼を続けていくつもりです。（広告代理店様）
                        </TestimonialCard>
                    </Box>

                    <Box sx={{
                        position: 'absolute',
                        left: 40,
                        top: 360,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 36,
                        width: '32%',
                        minWidth: 300,
                    }}>

                        <TestimonialCard small={false} avatarSrc="/avatar4.png">
                            プロジェクトがピンチの時にCさんには助けられました！（マーケティング会社様）
                        </TestimonialCard>
                    </Box>
                    {/* Right column smaller cards */}
                    <Box sx={{
                        position: 'absolute',
                        right: 40,
                        top: 340,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 10,
                        width: '28%',
                        minWidth: 220,
                    }}>
                        <TestimonialCard small avatarSrc="/avatar5.png">
                            Dさんの広くて深い知識にはいつも脱帽です。（メーカー様）
                        </TestimonialCard>

                        <TestimonialCard small avatarSrc="/avatar6.png">
                            個々人のスキルにによらず、会社・チームとして成果にコミットする文化があると感じました。（マーケティング会社様）
                        </TestimonialCard>

                    </Box>

                    {/* Center person image */}
                    <Box sx={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        mt: 4,
                        pt: 40
                    }}>
                        <Box
                            component="img"
                            src={Ikemen}
                            alt="center"
                            sx={{
                                width: 900,
                                height: 500,
                                borderRadius: 2,
                                // boxShadow: '0 8px 20px rgba(0,0,0,0.12)'
                            }}
                        />
                    </Box>
                </Container>
            </Box>

            <Modal
                open={businessModalOpen}
                onClose={() => setBusinessModalOpen(false)}
            >
                <Box sx={{
                    backgroundColor: 'white',
                    justifyContent: 'center',
                    marginX: 'auto',
                    marginY: '100px',
                    width: { sm: '380px', md: '600px', lg: '700px' },
                    overflowX: 'auto',
                    height: '880px',
                    "@media (max-height: 870px)": {
                        height: '640px'
                    },
                    "@media (max-height: 700px)": {
                        height: '480px'
                    },
                }}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', marginLeft: "70px", marginRight: "80px", paddingTop: '5px' }}>
                        <Typography variant="h5">物品管理システム</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', marginLeft: "70px", marginRight: "80px", paddingTop: '100px' }}>
                        <Typography variant="h5">お客様のご要望・課題</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', marginLeft: "70px", marginRight: "80px", paddingTop: '100px' }}>
                        <Typography variant="h5">解決策</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', marginLeft: "70px", marginRight: "80px", paddingTop: '100px' }}>
                        <Typography variant="h5">効果・成果</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', marginLeft: "70px", marginRight: "80px", paddingTop: '100px' }}>
                        <Typography variant="h5">開発環境・言語等</Typography>
                    </Box>
                </Box>
            </Modal>
            <Footer />
        </>
    );
}
