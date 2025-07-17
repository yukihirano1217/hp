import { Box, Typography } from "@mui/material"
import ContactImage from '../assets/contact.png'

export const Contact = () => {
    return (
        <Box sx={{ backgroundColor: 'black', position: 'relative', overflow: 'hidden' }}>
            <Box
                component='img'
                src={ContactImage}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    objectFit: 'contain',
                    height: '400px',
                    width: '100%',
                    position: 'relative',
                }} />
            <Box sx={{ position: 'absolute', top: '300px', left: '200px', transform: '(-50%, -50%)', color: 'white' }}>
                <Typography variant='h4' sx={{ fontWeight: 'bold', textAlign: 'center' }}>
                    お問い合わせ
                </Typography>
            </Box>
        </Box>

    )
}