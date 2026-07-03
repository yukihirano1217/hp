import { Box } from "@mui/material"
import Gazou from '../assets/gazou.png'

export const GazouImage = () => {
    return (
        <Box 
            component='img'
            src={Gazou}
            sx={{
                display: 'flex',
                alignItems: 'center',
                objectFit: 'contain',
                height: '1100px',
                width: '1890px',
                zIndex: 1
            }}
        />
    )
}