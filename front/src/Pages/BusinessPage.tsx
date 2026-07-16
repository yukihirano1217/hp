import { Avatar, Box, Chip, Container, Grid, IconButton, Modal, Paper, Stack, TextField, Typography } from "@mui/material";
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
import Kuchikomi1 from '../assets/kuchikomi1.png'
import Kuchikomi2 from '../assets/kuchikomi2.png'
import Kuchikomi3 from '../assets/kuchikomi3.png'
import Kuchikomi4 from '../assets/kuchikomi4.png'
import Kuchikomi5 from '../assets/kuchikomi5.png'
import Kuchikomi6 from '../assets/kuchikomi6.png'
import CloseIcon from '@mui/icons-material/Close'
import { ImportantDevices } from "@mui/icons-material";

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
                    height: 130
                }}
            >
                <Typography variant='subtitle1' sx={{ color: '#e65a3a', fontWeight: 700, mb: 0.5 }}>
                    { /* optional colored title part could be embedded in children */}
                </Typography>
                <Typography variant="body1" sx={{ color: '#333', lineHeight: 1.6 }}>
                    {children}
                </Typography>
                {avatarSrc && (
                    <Avatar
                        src={avatarSrc}
                        sx={{
                            width: 80, height: 80, mt: 0, ml: 'auto',
                            position: 'absolute',
                            left: 340,
                        }}
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
                            top: '200px',
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
                            top: '270px',
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
            <Typography sx={{ color: 'black', marginLeft: '100px', fontSize: '2rem', my: '5%' }}>開発 運用の実績</Typography>
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
                <Box sx={{ justifyContent: 'center', my: 10, display: 'flex' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography
                            variant="h6"
                            sx={{ mt: '50px', mx: '50px', textAlign: 'justify' }}
                        >
                            弊社にはフロント、バック、SQL、サーバ、ネットワーク等、多岐にわたる分野で開発・保守経験のある技術者が多数在籍しています。
                        </Typography>
                        <Typography
                            variant="h6"
                            sx={{ mx: '50px', textAlign: 'justify' }}
                        >
                            近年ではAIを駆使し、未経験の領域でも素早いキャッチアップで適応しています。技術者全員が新たな技術に対する高い意欲を持っています。
                        </Typography>
                        <Typography
                            variant="h5"
                            sx={{ mt: '50px', mx: '50px', textAlign: 'justify' }}
                        >
                            プロジェクト管理経験者
                        </Typography>
                        <Typography variant="h5"
                            sx={{ mx: '50px', textAlign: 'justify' }}>10名在籍</Typography>
                    </Box>
                    <LanguageGraph />
                </Box>
                <Box>

                </Box>

            </Box>

            <Box sx={{ bgcolor: '#f9d3c6', minHeight: '120vh', pt: 10, width: '100%' }}>

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
                            <Box sx={{ display: 'flex', justifyContent: 'end', alignItems: 'center' }}>
                                <Typography variant="body1" sx={{ color: '#666', mr: 2, }}>株式会社 XXXXX  ●●氏</Typography>
                                <Avatar src={Kuchikomi6} sx={{ width: 90, height: 90 }} />
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
                        <TestimonialCard small={false} avatarSrc={Kuchikomi1}>
                            大変信頼しております。システムプロステージのAさんなしでは現場が回りません！（メーカー様）
                        </TestimonialCard>

                        <TestimonialCard small={false} avatarSrc={Kuchikomi5}>
                            Bさんのいるシステムプロステージに今後も依頼を続けていくつもりです。（システム会社様）
                        </TestimonialCard>
                    </Box>

                    <Box sx={{
                        position: 'absolute',
                        left: 40,
                        top: 320,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 36,
                        width: '32%',
                        minWidth: 300,
                    }}>

                        <TestimonialCard small={false} avatarSrc={Kuchikomi3}>
                            プロジェクトがピンチの時にCさんには助けられました！（電力会社様）
                        </TestimonialCard>
                    </Box>
                    {/* Right column smaller cards */}
                    <Box sx={{
                        position: 'absolute',
                        right: 40,
                        top: 380,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 10,
                        width: '28%',
                        minWidth: 220,
                    }}>
                        <TestimonialCard small avatarSrc={Kuchikomi2}>
                            Dさんの広くて深い知識にはいつも脱帽です。（メーカー様）
                        </TestimonialCard>

                        <TestimonialCard small avatarSrc={Kuchikomi4}>
                            個々人のスキルにによらず、会社・チームとして成果にコミットする文化があると感じました。（地方自治体様）
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
                                width: 400,
                                height: 400,
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
                    // justifyContent: 'center',
                    // marginX: 'auto',
                    marginY: { sm: '20px', md: '40px', lg: '40px' },
                    // width: { sm: '380px', md: '600px', lg: '600px' },
                    width: '33%',
                    overflowX: 'auto',
                    height: { sm: '400px', md: '500px', lg: '560px' },
                    borderRadius: 4,
                    position: 'absolute',
                    top: '1%',
                    left: '33%',
                    border: '4px solid #F28B2B',
                    px: 4,
                    py: 4
                }}>
                    <IconButton
                        aria-label="close"
                        onClick={() => setBusinessModalOpen(false)}
                        size='small'
                        sx={{
                            position: 'absolute',
                            right: 4,
                            top: 4,
                            color: (theme) => theme.palette.grey[500],
                            border: '2px solid', // 枠線をつける
                            borderColor: (theme) => theme.palette.grey[400],
                        }}
                    >
                        <CloseIcon sx={{
                            fontSize: '12px',
                            stroke: "currentColor", // 親のcolor（グレー）を引き継ぐ
                            strokeWidth: 5,
                        }} />
                    </IconButton>
                    <Box sx={{ display: 'flex', justifyContent: 'left', }}>
                        <Typography variant="h5" fontWeight={'bold'} sx={{ alignContent: 'center' }}>ソフトライセンス管理システム</Typography>
                        <ImportantDevices sx={{ fontSize: 40, color: '#F28B2B', ml: 2 }} />
                    </Box>
                    <Typography variant="body2" sx={{ alignContent: 'center', pt: 2 }}>
                        ・社内で利用されている各PCにインストールされているソフトウェアが<br />　各所属部門が保有するライセンスと照合し、ライセンスの不足や<br />　禁止ソフトの利用等をチェックするシステム
                    </Typography>

                    <Box sx={{ paddingTop: '40px' }}>
                        <Typography variant="subtitle1" color='#F28B2B'>---お客様のご要望・課題</Typography>
                        <Typography variant="body2" >・Excelとバッチ処理で管理しているソフトウェアの情報をWebで管理したい</Typography>
                        <Typography variant="body2" >・手作業を減らし、人的ミスと管理工数を削減したい</Typography>
                    </Box>
                    <Box sx={{ paddingTop: '40px' }}>
                        <Typography variant="subtitle1" color='#F28B2B'>---解決策</Typography>
                        <Typography variant="body2" >・React × Express × SQLServerを利用してWebアプリ化</Typography>
                        <Typography variant="body2" >・日次連携機能により常に最新のソフト利用状況を確認可能に</Typography>
                    </Box>
                    <Box sx={{ paddingTop: '40px' }}>
                        <Typography variant="subtitle1" color='#F28B2B'>---効果・成果</Typography>
                        <Typography variant="body2" >・従来比90％の管理工数削減を実現</Typography>
                        <Typography variant="body2" >・ソフトの意図しない不正利用を未然に防止</Typography>
                    </Box>
                    <Box sx={{ paddingTop: '40px' }}>
                        <Typography variant="subtitle1" color='#F28B2B'>---開発環境・言語等</Typography>
                        <Stack direction="row" spacing={1.5} mt={1} ml={1}>
                            <Chip
                                label="Windows"
                                variant="filled"
                                sx={{
                                    backgroundColor: '#e0e2e5', // 薄いグレー
                                    color: '#000000',           // 文字色（黒）
                                    borderRadius: '4px',        // 緩い角丸
                                    fontSize: '1rem',
                                    height: 'auto',
                                    padding: '4px 8px',         // 内側の余白
                                    '& .MuiChip-label': {
                                        padding: 0,               // デフォルトの左右パディングをリセット
                                    }
                                }}
                            />
                            <Chip
                                label="SQLServer"
                                variant="filled"
                                sx={{
                                    backgroundColor: '#e0e2e5', // 薄いグレー
                                    color: '#000000',           // 文字色（黒）
                                    borderRadius: '4px',        // 緩い角丸
                                    fontSize: '1rem',
                                    height: 'auto',
                                    padding: '4px 8px',         // 内側の余白
                                    '& .MuiChip-label': {
                                        padding: 0,               // デフォルトの左右パディングをリセット
                                    }
                                }}
                            />
                            <Chip
                                label="TypeScript"
                                variant="filled"
                                sx={{
                                    backgroundColor: '#e0e2e5', // 薄いグレー
                                    color: '#000000',           // 文字色（黒）
                                    borderRadius: '4px',        // 緩い角丸
                                    fontSize: '1rem',
                                    height: 'auto',
                                    padding: '4px 8px',         // 内側の余白
                                    '& .MuiChip-label': {
                                        padding: 0,               // デフォルトの左右パディングをリセット
                                    }
                                }}
                            />
                            <Chip
                                label="Express"
                                variant="filled"
                                sx={{
                                    backgroundColor: '#e0e2e5', // 薄いグレー
                                    color: '#000000',           // 文字色（黒）
                                    borderRadius: '4px',        // 緩い角丸
                                    fontSize: '1rem',
                                    height: 'auto',
                                    padding: '4px 8px',         // 内側の余白
                                    '& .MuiChip-label': {
                                        padding: 0,               // デフォルトの左右パディングをリセット
                                    }
                                }}
                            />
                            <Chip
                                label="React"
                                variant="filled"
                                sx={{
                                    backgroundColor: '#e0e2e5',
                                    color: '#000000',
                                    borderRadius: '4px',
                                    fontSize: '1rem',
                                    height: 'auto',
                                    padding: '4px 8px',
                                    '& .MuiChip-label': {
                                        padding: 0,
                                    }
                                }}
                            />
                        </Stack>
                    </Box>
                </Box>
            </Modal>
            <Footer />
        </>
    );
}
