import { Box, Typography } from "@mui/material"
import { CardImage } from "./CardImage"

export const BodyCard = () => {
    return (
        <div style={{
            backgroundColor: 'black',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            margin: '100px',
            textAlign: 'center'
        }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '140px', opacity: 0.8, marginTop: '32px', position: 'relative'}}>
                <CardImage />
                <Box sx={{ position: 'absolute', zIndex: 1, top: '50%', left:'50%', transform: 'translate(-50%, -50%)', textAlign: 'center'}}>
                    <Typography color='white' fontSize={20}>会社案内</Typography>
                </Box>
            </Box>
        </div>
    )
}