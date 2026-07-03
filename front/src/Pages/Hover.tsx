import React from 'react';
import { Box, useMediaQuery } from '@mui/material';
import Ikemen from '../assets/ikemen.png';

export default function Hover() {
  const reduceMotion = useMediaQuery('(prefers-reduced-motion: reduce)', { noSsr: true });

  return (
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
      <Box
        component="img"
        src={Ikemen}
        alt="sample"
        tabIndex={0} // キーボードフォーカス可能に
        sx={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
          transformOrigin: 'center',
          willChange: 'transform',
          transition: reduceMotion ? 'none' : 'transform 300ms ease',
          transform: 'scale(1)', // 初期状態
        }}
      />
    </Box>
  );
}
