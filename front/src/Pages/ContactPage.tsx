import { Box, Divider, Typography } from "@mui/material";
import { Footer } from "../Components/Footer";
import { Header } from "../Components/Header";
import { headerHeight } from "./TopPage";
import Company from '../assets/company.png'
import React from "react";
import Contact2 from '../assets/contact2.png'

export const ContactPage = () => {
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
                        ホーム　＞　お問合せ
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
                    >お問合せ</Typography>
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
                        弊社窓口の連絡先です
                    </Typography>
                </Box>
            </Box>

            <Typography sx={{ color: 'black', marginLeft: '100px', fontSize: '2rem', my: '5%' }}>お問合せ窓口</Typography>
            <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "center", width: "100%", gap: 20, mb: '8%' }}>
                <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: 3 }}>
                    <Typography variant="h5">メール　：saiyou@system-prostage.co.jp</Typography>
                    <Typography variant="h5">電話　　：092-475-6111</Typography>
                </Box>
                <Box
                    component="img"
                    src={Contact2}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        objectFit: 'contain',
                        // height: '500px',
                        width: '500px',
                        zIndex: 1,
                        borderRadius: 20,
                    }} />

            </Box>
            <Footer />

        </>
    );
}
