import { Box, Typography } from "@mui/material"
import { LogoImage } from "./Logo"

export const Footer = () => {
    return (
        <Box sx={{ justifyContent: 'space-around', display: 'flex', backgroundColor: 'black', alignItems: 'center', overflow: 'hidden', padding: '20px' }}>

            <LogoImage />
            <Typography color='white'>会社案内</Typography>
            <Typography color='white'>事業案内</Typography>
            <Typography color='white'>採用情報</Typography>
            <Typography color='white'>お問合せ</Typography>
        </Box>
    )
}