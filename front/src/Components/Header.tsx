import { AppBar, Toolbar, Typography } from "@mui/material"
import { LogoImage } from "./Logo"

export const Header = () => {
    const handleIntroduction = () => {
        console.log("会社案内がクリックされました")
    }

    return (
        <AppBar position="static" color="transparent" sx={{ boxShadow: 'none', width: '100%' }}>
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                <LogoImage />
                <Typography color='white' onClick={handleIntroduction}>会社案内</Typography>
                <Typography color='white'>事業案内</Typography>
                <Typography color='white'>採用情報</Typography>
                <Typography color='white'>お問合せ</Typography>
            </Toolbar>
        </AppBar>
    )
}