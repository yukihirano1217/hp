import { Box, Modal, Typography } from "@mui/material";
import { CompanyImage } from "../Components/CompanyImage";
import { Header } from "../Components/Header";
import { useState } from "react";
import { BusinessCard } from "../Components/BusinessCard";
import { LanguageGraph } from "../Components/LanguageGraph";
import { BusinessModal } from "../Components/BusinessModal";
import { Footer } from "../Components/Footer";

export const BusinessPage = () => {
    const [businessModalOpen, setBusinessModalOpen] = useState(false);
    const handleModal = () => {
        setBusinessModalOpen(true)
    }

    return (
        <>
            <Box sx={{ backgroundColor: 'black' }}>
                <Header></Header>
                <Box sx={{ justifyContent: 'center', display: 'flex', backgroundColor: 'black', position: 'relative', overflow: 'hidden' }}>
                    <CompanyImage />
                    <Typography sx={{ position: 'absolute', top: '30px', left: '30px', color: 'white', zIndex: 2 }}>
                        ホーム　＞　事業案内
                    </Typography>

                    <Typography
                        variant="h4"
                        sx={{
                            position: 'absolute',
                            top: '20%',
                            left: '20%',
                            transform: 'translate(-50%, -50%)',
                            textAlign: 'center',
                            zIndex: 2,
                        }}
                    >事業案内</Typography>
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
                        開発および運用の実績や当社の人材についてご紹介します
                    </Typography>
                </Box>

            </Box>
            <Box sx={{ backgroundColor: 'white', padding: '100px', marginX: '100px' }}>
                <Typography
                    variant="h5"
                >開発実績
                </Typography>
                <Box sx={{ justifyContent: 'center', display: 'flex', marginY: '50px', }}>
                    <Typography
                        variant='body1'
                        sx={{ margin: '50px', textAlign: 'justify' }}
                    ></Typography>
                    <BusinessCard onClick={handleModal} />
                    <BusinessCard />
                    <BusinessCard />
                </Box>
                <Box sx={{ justifyContent: 'center', display: 'flex', marginY: '50px', }}>
                    <Typography
                        variant='body1'
                        sx={{ margin: '50px', textAlign: 'justify' }}
                    ></Typography>
                    <BusinessCard onClick={handleModal} />
                    <BusinessCard />
                    <BusinessCard />
                </Box>
                <Box sx={{ justifyContent: 'center', display: 'flex', marginY: '50px', }}>
                    <Typography
                        variant='body1'
                        sx={{ margin: '50px', textAlign: 'justify' }}
                    ></Typography>
                    <BusinessCard onClick={handleModal} />
                    <BusinessCard />
                    <BusinessCard />
                </Box>
            </Box>
            <Box sx={{ backgroundColor: 'white', padding: '100px', marginX: '100px' }}>
                <Typography
                    variant='h5'
                >人材紹介
                </Typography>
                <Box sx={{ justifyContent: 'center', marginY: '50px', }}>
                    <Typography
                        variant='body1'
                        sx={{ margin: '50px', textAlign: 'justify' }}
                    >言語経験
                    </Typography>
                    <LanguageGraph />
                    <Typography
                        variant='body1'
                        sx={{ margin: '50px', textAlign: 'justify' }}
                    >プロジェクト管理者経験
                    </Typography>
                    <Typography>〇名在籍</Typography>
                    <Typography
                        variant='body1'
                        sx={{ margin: '50px', textAlign: 'justify' }}
                    >お客様からの声
                    </Typography>
                    <Typography>「大変信頼しております。システムプロステージのAさんなしでは現場が回りません！」</Typography>
                    <Typography>「Bさんのいるシステムプロステージに今後も依頼を続けていくつもりです。」</Typography>
                    <Typography>「プロジェクトがピンチの時にCさんに助けられました！」</Typography>
                    <Typography>「Dさんの広くて深い知識にはいつも脱帽です。」</Typography>
                    <Typography>「個々人のスキルによらず、会社・チームとして成果にコミットする文化があると感じました。」</Typography>
                </Box>
            </Box>

            <Modal
                open={businessModalOpen}
            >
                <BusinessModal />
            </Modal>
            <Footer />
        </>
    )
}