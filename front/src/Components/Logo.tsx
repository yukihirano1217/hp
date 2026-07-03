import { Box } from "@mui/material"
import Logo from '../assets/logo.png'
import { useNavigate } from "react-router-dom";

export const LogoImage = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/")
    }
    return (
        <Box
            component='img'
            onClick={handleClick}
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