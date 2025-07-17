import { Box } from "@mui/material"
import Card from '../assets/card.png'

export const CardImage = () => {
    return (
        <Box 
            component='img'
            src={Card}
            sx={{
                display: 'flex',
                alignItems: 'center',
                objectFit: 'contain',
                height: '400px',
                width: '470px',
                zIndex: 1
            }}
        />
    )
}