import { Box } from "@mui/material"
import CEO from '../assets/CEO.png'

export const CEOImage = () => {
    return (
        <Box 
            component='img'
            src={CEO}
            sx={{
                display: 'flex',
                alignItems: 'center',
                objectFit: 'contain',
                height: '300px',
                width: '300px',
                zIndex: 1
            }}
        />
    )
}