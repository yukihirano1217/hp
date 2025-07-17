import { Box } from "@mui/material"
import Language from '../assets/language.png'

export const LanguageGraph = () => {
    return (
        <Box
            component='img'
            src={Language}
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