import { Box, Typography } from "@mui/material";
import { ImportantDevices } from '@mui/icons-material';
import Device5 from '../assets/device5.png'

type Props = {
    onClick?: () => void;
}

export const BusinessCard5 = (props: Props) => {
    return (
        <div style={{
            // backgroundColor: 'black',
            borderRadius: '8px',
            // padding: '16px',
            // boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            // margin: '50px',
            textAlign: 'center'
        }}>
            <Box sx={{
                display: 'flex', justifyContent: 'center', height: '200px', width: '300px', opacity: 0.8,
                position: 'relative',
                transition: 'transform 0.2s',
                '&:hover': {
                    transform: 'scale(1.1)'
                }
            }} onClick={props.onClick}>
                <Box
                    component='img'
                    src={Device5}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        objectFit: 'fill',
                        height: '100px',
                        width: '100px',
                        zIndex: 1,

                    }} />
                <Box sx={{ position: 'absolute', zIndex: 1, top: '70%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
                    <Typography color="black" variant="h6">工具管理システム</Typography>
                </Box>
            </Box>


        </div>
    );
}
