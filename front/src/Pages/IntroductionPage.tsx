import { Box, Divider, Typography } from "@mui/material"
import { Footer } from "../Components/Footer"
import { MapImage } from "../Components/MapImage"
import { Header } from "../Components/Header"
import { CompanyImage } from "../Components/CompanyImage"

export const IntroductionPage = () => {
    return (
        <>
            <Box sx={{ backgroundColor: 'black', width: '100%' }}>
                <Header></Header>
                <Box sx={{ justifyContent: 'center', display: 'flex', backgroundColor: 'black', position: 'relative', overflow: 'hidden' }}>
                    <CompanyImage />
                    <Typography sx={{ position: 'absolute', top: '30px', left: '30px', color: 'white', zIndex: 2 }}>
                        ホーム　＞　会社案内
                    </Typography>

                    <Typography
                        variant="h4"
                        sx={{
                            position: 'absolute',
                            top: '20%',
                            left: '20%',
                            transform: 'translate(-50%, -50%)',
                            color: 'white',
                            textAlign: 'center',
                            zIndex: 2,
                        }}
                    >会社案内</Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            position: 'absolute',
                            top: '30%',
                            left: '32%',
                            transform: 'translate(-50%, -50%)',
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
                <Box sx={{ justifyContent: 'center', display: 'flex', marginTop: '50px', marginBottom: '50px' }}>
                    <Typography
                        variant="h5"
                    >
                        システムプロステージは知恵の力でIT社会の未来を切り開きます
                    </Typography>
                </Box>
                <Divider sx={{ borderColor: 'rgba(0,0,0,0.12)', borderWith: '1px', width: '100%' }} />
                <Box sx={{ justifyContent: 'center', display: 'flex' }}>
                    <Typography
                        variant='h6'
                        sx={{ margin: '50px', textAlign: 'justify' }}
                    >
                        会社名
                    </Typography>
                    <Typography
                        variant='body1'
                        sx={{ margin: '50px', textAlign: 'justify' }}
                    >
                        株式会社システムプロステージ
                    </Typography>
                </Box>
                <Divider sx={{ borderColor: 'rgba(0,0,0,0.12)', borderWith: '1px', width: '100%' }} />
                <Box sx={{ justifyContent: 'center', display: 'flex' }}>
                    <Typography
                        variant='h6'
                        sx={{ margin: '50px', textAlign: 'justify' }}
                    >
                        本社所在地
                    </Typography>
                    <Typography
                        variant='body1'
                        sx={{ margin: '50px', textAlign: 'justify' }}
                    >
                        〒812-0011　福岡市博多区博多駅前1丁目15-12　藤田ビル4F
                    </Typography>
                </Box>
                <Divider sx={{ borderColor: 'rgba(0,0,0,0.12)', borderWith: '1px', width: '100%' }} />
                <Box sx={{ justifyContent: 'center', display: 'flex' }}>
                    <Typography
                        variant='h6'
                        sx={{ margin: '50px', textAlign: 'justify' }}
                    >
                        代表者
                    </Typography>
                    <Typography
                        variant='body1'
                        sx={{ margin: '50px', textAlign: 'justify' }}
                    >
                        代表取締役社長　二瓶 剛嘉
                    </Typography>
                </Box>
                <Divider sx={{ borderColor: 'rgba(0,0,0,0.12)', borderWith: '1px', width: '100%' }} />
                <Box sx={{ justifyContent: 'center', display: 'flex' }}>
                    <Typography
                        variant='h6'
                        sx={{ margin: '50px', textAlign: 'justify' }}
                    >
                        設立
                    </Typography>
                    <Typography
                        variant='body1'
                        sx={{ margin: '50px', textAlign: 'justify' }}
                    >
                        １９８９年１月
                    </Typography>
                </Box>
                <Divider sx={{ borderColor: 'rgba(0,0,0,0.12)', borderWith: '1px', width: '100%' }} />
                <Box sx={{ justifyContent: 'center', display: 'flex' }}>
                    <Typography
                        variant='h6'
                        sx={{ margin: '50px', textAlign: 'justify' }}
                    >
                        資本金
                    </Typography>
                    <Typography
                        variant='body1'
                        sx={{ margin: '50px', textAlign: 'justify' }}
                    >
                        １，０００万円
                    </Typography>
                </Box>
                <Divider sx={{ borderColor: 'rgba(0,0,0,0.12)', borderWith: '1px', width: '100%' }} />
                <Box sx={{ justifyContent: 'center', display: 'flex' }}>
                    <Typography
                        variant='h6'
                        sx={{ margin: '50px', textAlign: 'justify' }}
                    >
                        従業員
                    </Typography>
                    <Typography
                        variant='body1'
                        sx={{ margin: '50px', textAlign: 'justify' }}
                    >
                        ４０名（20XX年XX月現在）
                    </Typography>
                </Box>
                <Divider sx={{ borderColor: 'rgba(0,0,0,0.12)', borderWith: '1px', width: '100%' }} />
                <Box sx={{ justifyContent: 'center', display: 'flex' }}>
                    <Typography
                        variant='h6'
                        sx={{ margin: '50px', textAlign: 'justify' }}
                    >
                        事業内容
                    </Typography>
                    <Typography
                        variant='body1'
                        sx={{ margin: '50px', textAlign: 'justify' }}
                    >
                        企業向けソフトウェア開発支援<br />
                        ・企画、立案コンサルティング<br />
                        ・設計、開発<br />
                        ・運用、保守<br />
                    </Typography>
                </Box>
                <Divider sx={{ borderColor: 'rgba(0,0,0,0.12)', borderWith: '1px', width: '100%' }} />
                <Box sx={{ justifyContent: 'center', display: 'flex' }}>
                    <Typography
                        variant='h6'
                        sx={{ margin: '50px', textAlign: 'justify' }}
                    >
                        主なお取引先
                    </Typography>
                    <Typography
                        variant='body1'
                        sx={{ margin: '50px', textAlign: 'justify' }}
                    >
                        ㈱ニコンシステム、㈱九州DTS、近代システムビューロー㈱、富士ソフト㈱ほか
                    </Typography>
                </Box>
            </Box>
            <Divider sx={{ borderColor: 'rgba(0,0,0,0.12)', borderWith: '1px', width: '100%' }} />
            <Typography
                variant='h6'
                sx={{ marginX: '500px', textAlign: 'justify' }}
            >
                アクセス
            </Typography>
            <Box sx={{ justifyContent: 'center', display: 'flex' }}>
                <MapImage />
                <Typography
                    variant='body1'
                    sx={{ margin: '50px', textAlign: 'justify' }}
                >
                    株式会社システムプロステージ<br />
                    〒812-0011<br />
                    福岡市博多区博多駅前1-15-12<br />
                    藤田ビル４Ｆ<br />
                    <br />
                    Tel:092-475-+6111<br />
                    <br />
                    ※JR博多駅より徒歩５分<br />
                    ※地下鉄博多駅より徒歩３分<br />
                </Typography>
            </Box>
            <Footer />
        </>
    )
}