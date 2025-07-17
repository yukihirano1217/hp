import { Box, Typography } from "@mui/material";
import { ImportantDevices } from "@mui/icons-material";

type Props ={
    onClick?: () => void;
}

export const BusinessCard = (props: Props) => {
    return (
        <div style={{
            backgroundColor: 'black',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            margin: '50px',
            textAlign: 'center'
        }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', height: '300px', width: '400px', opacity: 0.8, marginTop: '32px', position: 'relative'}} onClick={props.onClick}>
                <ImportantDevices sx={{ fontSize: 100, color: 'green'}} />
                <Box sx={{ position: 'absolute', zIndex: 1, top: '70%', left:'50%', transform: 'translate(-50%, -50%)', textAlign: 'center'}}>
                    <Typography color='white' variant='h4'>物品管理システム</Typography>
                </Box>
            </Box>
        </div>
    )
}