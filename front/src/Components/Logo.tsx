import { Box } from "@mui/material"
import Logo from '../assets/logo.png'

export const LogoImage = () => {
    return (
        <Box
            component='img'
            src={Logo}
            sx={{
                display: 'flex',
                alignItems: 'center',
                objectFit: 'contain',
                height: '200px',
                width: '200px',
                zIndex: 1
            }} />
    )
}