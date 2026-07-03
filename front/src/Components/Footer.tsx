import { AppBar, Box, Grid, Stack, Toolbar, Typography } from "@mui/material";
import { LogoImage } from "./Logo";
import { useNavigate } from "react-router-dom";

export const Footer = () => {

    const navigate = useNavigate();

    const handleClick = (ref: string) => {
        navigate(ref)
    }

    return (
        <AppBar position="static" color="transparent" sx={{
            boxShadow: 'none', width: '100%', backgroundColor: 'black', zIndex: '1300', overflow: 'hidden', height: 60,
            WebkitMaskImage: 'linear-gradient(to top, black 0%, black 75%, transparent 100%)',
            maskImage: 'linear-gradient(to top, black 0%, black 75%, transparent 100%)',
        }}>
            <Toolbar sx={{ justifyContent: 'space-between', }}>
                {/* <Stack direction="row" spacing={30} > */}
                {/* <LogoImage /> */}
                <Box sx={{width:200}} >　</Box>
                <Typography color="white" onClick={() => handleClick("/introduction")}>会社概要</Typography>
                <Typography color="white" onClick={() => handleClick("/ceo")}>トップメッセージ</Typography>
                <Typography color="white" onClick={() => handleClick("/business")}>事業案内</Typography>
                <Typography color="white" onClick={() => handleClick("/recruit")}>採用情報</Typography>
                <Typography color="white" onClick={() => handleClick("/contact")}>お問合せ</Typography>
                {/* </Stack> */}
            </Toolbar>
        </AppBar>
    );
}