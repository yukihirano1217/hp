import { Box, Typography } from "@mui/material"

export const BusinessModal = () => {
    return (
        <Box sx={{
            backgroundColor: 'white',
            justifyContent: 'center',
            marginX: 'auto',
            marginY: '20px',
            width: { sm: '380px', md: '700px', lg: '900px' },
            overflowX: 'auto',
            height: '880px',
            "@media (max-height: 870px)": {
                height: '700px'
            },
            "@media (max-height: 700px)": {
                height: '640px'
            },
        }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', marginLeft: '70px', marginRight: '80px', paddingTop: '5px' }}>
                <Typography variant='h5'>物品管理システム</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', marginLeft: '70px', marginRight: '80px', paddingTop: '5px' }}>
                <Typography variant='h5'>お客様のご要望・課題</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', marginLeft: '70px', marginRight: '80px', paddingTop: '5px' }}>
                <Typography variant='h5'>解決策</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', marginLeft: '70px', marginRight: '80px', paddingTop: '5px' }}>
                <Typography variant='h5'>効果・成果</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', marginLeft: '70px', marginRight: '80px', paddingTop: '5px' }}>
                <Typography variant='h5'>開発環境・言語等</Typography>
            </Box>
        </Box>
    )
}