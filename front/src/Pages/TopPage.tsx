import { Box, } from "@mui/material"
import Grid from '@mui/material/Grid';
import { Contact } from "../Components/Contact"
import { Footer } from "../Components/Footer"
import { BodyCard } from "../Components/BodyCard"
import { Header } from "../Components/Header"
import { GazouImage } from "../Components/GazouImage"

export const TopPage = () => {
    return (
        <Box sx={{ backgroundColor: 'black', width: '100%' }}>
            <Header></Header>
            <Box sx={{ justifyContent: 'center', display: 'flex' }}>
                <GazouImage />
            </Box>
            <Grid container justifyContent="center" spacing={10} sx={{ marginTop: '100px' }}>
                <Grid item xs={12} md={4}>
                    <BodyCard />
                </Grid>
                <Grid item xs={12} md={4}>
                    <BodyCard />
                </Grid>
            </Grid>
            <Grid container justifyContent="center" spacing={10} sx={{ marginY: '100px' }}>
                <Grid item xs={12} md={4}>
                    <BodyCard />
                </Grid>
                <Grid item xs={12} md={4}>
                    <BodyCard />
                </Grid>
            </Grid>
            <Contact />
            <Footer />
        </Box>
    )
}