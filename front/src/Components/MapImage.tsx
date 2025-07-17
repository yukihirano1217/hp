import { Box } from "@mui/material"
import Map from '../assets/map.png'

export const MapImage = () => {
    return (
        <Box
            component='img'
            src={Map}
            sx={{
                display: 'flex',
                alignItems: 'center',
                objectFit: 'contain',
                height: '500px',
                width: '500px',
                zIndex: 1
            }} />
    )
}