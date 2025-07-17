import { Box } from "@mui/material"
import Company from '../assets/company.png'

export const CompanyImage = () => {
    return (
        <Box 
            component='img'
            src={Company}
            sx={{
                display: 'flex',
                alignItems: 'center',
                objectFit: 'contain',
                // height: '500px',
                width: '100%',
                zIndex: 1
            }}
        />
    )
}