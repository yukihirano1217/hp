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
                objectFit: 'fill',
                height: '800px',
                width: '100%',
                zIndex: 1
            }} />
    )
}