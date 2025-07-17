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
                height: '30%',
                width: '100%',
                zIndex: 1
            }}
        />
    )
}