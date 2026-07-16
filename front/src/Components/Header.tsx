import { AppBar, Stack, Toolbar, Typography } from "@mui/material";
import { LogoImage } from "./Logo";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export const Header = () => {
    const navigate = useNavigate();
    const [headerHeight, setHeaderHeight] = useState(120); // 初期は通常の高さ
    const handleClick = (ref: string) => {
        navigate(ref)
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                // スクロール位置が50pxを超えたら高さを縮小
                setHeaderHeight(100);
            } else {
                // 元の高さに戻す
                setHeaderHeight(120);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <AppBar color="transparent" sx={{
            boxShadow: 'none', width: '100%', backgroundColor: 'black',
            //  position: 'fixed', zIndex: '1300',
            overflow: 'hidden', height: headerHeight,
            WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 75%, transparent 100%)',
            maskImage: 'linear-gradient(to bottom, black 0%, black 75%, transparent 100%)',
        }}
        >
            <Toolbar sx={{ justifyContent: 'space-between', }}>
                {/* <Stack direction="row" spacing={30} > */}
                <LogoImage />
                <Typography color="white" onClick={() => handleClick("/introduction")} sx={{
                    cursor: 'pointer', // カーソルをポインター（指マーク）にする
                    transition: 'color 0.1s ease, opacity 0.1s ease', // 変化を滑らかにする
                    '&:hover': {
                        color: '#1976d2', // ホバー時の文字色（例：MUIブルー）
                        // またはシンプルに少し薄くする場合：
                        // opacity: 0.7 
                    }
                }}>会社概要</Typography>
                <Typography color="white" onClick={() => handleClick("/ceo")} sx={{
                    cursor: 'pointer', // カーソルをポインター（指マーク）にする
                    transition: 'color 0.1s ease, opacity 0.1s ease', // 変化を滑らかにする
                    '&:hover': {
                        color: '#1976d2', // ホバー時の文字色（例：MUIブルー）
                        // またはシンプルに少し薄くする場合：
                        // opacity: 0.7 
                    }
                }}>トップメッセージ</Typography>
                <Typography color="white" onClick={() => handleClick("/business")} sx={{
                    cursor: 'pointer', // カーソルをポインター（指マーク）にする
                    transition: 'color 0.1s ease, opacity 0.1s ease', // 変化を滑らかにする
                    '&:hover': {
                        color: '#1976d2', // ホバー時の文字色（例：MUIブルー）
                        // またはシンプルに少し薄くする場合：
                        // opacity: 0.7 
                    }
                }}>事業案内</Typography>
                <Typography color="white" onClick={() => handleClick("/recruit")} sx={{
                    cursor: 'pointer', // カーソルをポインター（指マーク）にする
                    transition: 'color 0.1s ease, opacity 0.1s ease', // 変化を滑らかにする
                    '&:hover': {
                        color: '#1976d2', // ホバー時の文字色（例：MUIブルー）
                        // またはシンプルに少し薄くする場合：
                        // opacity: 0.7 
                    }
                }}>採用情報</Typography>
                <Typography color="white" onClick={() => handleClick("/contact")} sx={{
                    cursor: 'pointer', // カーソルをポインター（指マーク）にする
                    transition: 'color 0.1s ease, opacity 0.1s ease', // 変化を滑らかにする
                    '&:hover': {
                        color: '#1976d2', // ホバー時の文字色（例：MUIブルー）
                        // またはシンプルに少し薄くする場合：
                        // opacity: 0.7 
                    }
                }}>お問合せ</Typography>
                {/* </Stack> */}
            </Toolbar>
        </AppBar>
    );
}