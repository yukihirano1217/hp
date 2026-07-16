import { Box, Typography } from "@mui/material";
import { Footer } from "../Components/Footer";
import { Header } from "../Components/Header";
import { CEOImage } from "../Components/CEOImage";
import Company from '../assets/company.png'
import React from "react";
import { headerHeight } from "./TopPage";

export const CEOPage = () => {
    React.useEffect(() => {
        window.scrollTo(0, 0)
    }, [location])
    return (
        <>
            <Box sx={{ backgroundColor: 'white', }}>
                <Header></Header>
                <Box sx={{ justifyContent: 'center', display: 'flex', backgroundColor: 'black', position: 'relative', overflow: 'hidden', paddingTop: headerHeight, }}>
                    <Box
                        component="img"
                        src={Company}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            objectFit: 'contain',
                            // height: '400px',
                            width: '100%',
                            zIndex: 1,
                        }}
                    />
                    <Typography sx={{ position: 'absolute', top: '150px', left: '30px', color: 'white', zIndex: 2 }}>
                        ホーム　＞　トップメッセージ
                    </Typography>

                    <Typography
                        variant="h4"
                        sx={{
                            position: 'absolute',
                            top: '200px',
                            left: '100px',
                            // transform: 'translate(-50%, -50%)',
                            color: 'white',
                            textAlign: 'center',
                            zIndex: 2,
                        }}
                    >トップメッセージ</Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            position: 'absolute',
                            top: '270px',
                            left: '160px',
                            // transform: 'translate(-50%, -50%)',
                            color: 'white',
                            textAlign: 'center',
                            zIndex: 2,
                        }}
                    >
                        社長からのメッセージをご紹介します。
                    </Typography>
                </Box>

            </Box>
            <Typography sx={{ color: 'black', marginLeft: '100px', fontSize: '2rem', my: '5%' }}>トップメッセージ</Typography>
            <Box sx={{ backgroundColor: 'white', marginX: '100px' }}>
                <Box sx={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', }}>
                    <Typography
                        variant="h5"
                        color="#F28B2B"
                        sx={{ mx: '150px', mb: '50px', textAlign: 'justify' }}
                    >
                        システム作りは建築と同じ　-創業時から変わらぬ哲学
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        sx={{ mx: '200px', mb: '50px', textAlign: 'justify' }}
                    >

                        SEは実際の建物の図面をひく人、PGはその画面をもとに建物を建てる人。 素晴らしい建物ができるか否かは、すぐれた知識や技術、両者の連携はもちろん、 それぞれがいい建物を造りたいという思いと、それを形として表現する際の美意識をどれだけ持 てるか、ということではないでしょうか。<br />
                        ITの世界も同じ。大切なことは、美意識であり愛情であり、お客様との信頼関係といった人間の 感性の部分。 つまりそれは、デジタルのように数値では決して表すことのできないものであり、 そのような意味で、いわばアナログ的な要素とも言えることです。<br />
                        <br />
                    </Typography>
                    <Typography
                        variant="h5"
                        color="#F28B2B"
                        sx={{ mx: '150px', mb: '50px', textAlign: 'justify' }}
                    >
                        お客様との信頼関係　-築き上げた実績と更なる深化
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        sx={{ mx: '200px', mb: '50px', textAlign: 'justify' }}
                    >
                        そしてもうひとつ大切なことは、お客様との信頼関係です。<br />
                        私自身、SEとして１７年間のサラリーマン生活を経験しています。 その中で、ものを造る喜びや、自分のつくったものをお客様に満足していただいたときの感激を 何度も味わいました。<br />
                        お客様の求めていることをどう実現するシステムを造るかというのは、 いわば、建築家や大工さんがいかに住みやすい家を建てるかということです。<br />
                        機能性、利便性、使い勝手のよさ。この３つを備えたシステムづくりに欠かせないのは、 一人ひとりのいいものを造りたいという熱意と高い技術力に裏打ちされたクリエイティビティと オリジナリティであるということ。<br />
                        厳しいせめぎ合いが続くIT業界の中で築いた確固たる地位。 それを支えたのは、ある種の普遍的な、けれども多くの企業が忘れがちになっている”アナログ志向”なのです。<br />
                    </Typography>
                    <Box sx={{ justifyContent: 'center', display:'flex' }}>
                        <CEOImage />
                    </Box>
                </Box>
            </Box>

            <Footer />
        </>
    );
}
