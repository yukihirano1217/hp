import { Box, Typography } from "@mui/material";
import Card3 from '../assets/card3.png'
import { useNavigate } from "react-router-dom";

export const BodyCard3 = () => {
  const navigate = useNavigate();
  return (
    // <div style={{
    //     backgroundColor: 'black',
    //     borderRadius: '8px',
    //     // padding: '16px',
    //     boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    //     margin: '100px',
    //     textAlign: 'center'
    // }}>
    <Box
      sx={{
        width: 400,        // お好みのサイズ
        height: 250,
        overflow: 'hidden',
        borderRadius: 2,
        position: 'relative',
        // ホバー可能な環境のみ反応（モバイルでの意図せぬ拡大を避ける）
        '@media (hover: hover) and (pointer: fine)': {
          '&:hover img': { transform: 'scale(1.06)' },
        },
        // キーボード操作にも配慮（Tabでフォーカス時）
        '&:focus-within img': { transform: 'scale(1.06)' },
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '140px', opacity: 0.8, marginTop: '32px', position: 'relative' }}>
        <Box
          component="img"
          src={Card3}
          onClick={() => navigate("/recruit")}
          sx={{
            display: 'flex',
            alignItems: 'center',
            objectFit: 'contain',
            height: '400px',
            width: '470px',
            zIndex: 1,
            boxShadow: 3
          }} />
        <Box sx={{ position: 'absolute', zIndex: 1, top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
          <Typography color="white" fontSize={30}>採用情報</Typography>

        </Box>
      </Box>
    </Box>

    // </div>
  );
}
