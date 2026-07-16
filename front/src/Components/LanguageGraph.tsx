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
                height: '400px',
                width: '60%',
                zIndex: 1,
                pt:'50px',
                pl: '20px'
            }} />
    )
}