import { Box, Typography } from "@mui/material"
import { Header } from "../Components/Header"
import { CompanyImage } from "../Components/CompanyImage"
import { Footer } from "../Components/Footer"
import { CEOImage } from "../Components/CEOImage"

export const CEOPage = () => {
    return (
        <>
            <Box sx={{ backgroundColor: 'black' }}>
                <Header></Header>
                <Box sx={{ justifyContent: 'center', display: 'flex', backgroundColor: 'black', position: 'relative', overflow: 'hidden' }}>
                    <CompanyImage />
                    <Typography sx={{ position: 'absolute', top: '30px', left: '30px', color: 'white', zIndex: 2 }}>
                        ホーム　＞　会社案内
                    </Typography>

                    <Typography
                        variant="h4"
                        sx={{
                            position: 'absolute',
                            top: '20%',
                            left: '20%',
                            transform: 'translate(-50%, -50%)',
                            textAlign: 'center',
                            zIndex: 2,
                        }}
                    >会社案内</Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            position: 'absolute',
                            top: '30%',
                            left: '32%',
                            transform: 'translate(-50%, -50%)',
                            color: 'white',
                            textAlign: 'center',
                            zIndex: 2,
                        }}
                    >
                        システムプロステージの基本情報をご紹介します
                    </Typography>
                </Box>
            </Box>
            <Box sx={{ backgroundColor: 'white', padding: '100px', marginX: '100px' }}>
                <Typography
                    variant="h5"
                >ご挨拶
                </Typography>
                <Box sx={{ justifyContent: 'center', display: 'flex', marginY: '50px', }}>
                    <Typography
                        variant='body1'
                        sx={{ margin: '50px', textAlign: 'justify' }}
                    >
                        システムづくりは建築と同じです。<br />
                        SEは実際の建物の図面をひく人、PGはその画面をもとに建物を建てる人。 素晴らしい建物ができるか否かは､すぐれた知識や技術、両者の連携はもちろん、 それぞれがいい建物を造りたいという思いと､それを形として表現する際の美意識をどれだけ持 てるか、ということではないでしょうか。<br />
                        ITの世界も同じ。大切なことは､美意識であり愛情であり､お客様との信頼関係といった人間の 感性の部分。 つまりそれは、デジタルのように数値では決して表すことのできないものであり、 そのような意味で、いわばアナログ的な要素とも言えることです。<br />
                        <br />
                        そしてもうひとつ大切なことは、お客様との信頼関係です。
                        私自身､SEとして１７年間のサラリーマン生活を経験しています。 その中で､ものを造る喜びや､自分のつくったものをお客様に満足していただいたときの感激を 何度も味わいました。<br />
                        お客様の求めていることをどう実現するシステムを造るかというのは､ いわば､建築家や大工さんがいかに住みやすい家を建てるかということです。<br />
                        機能性、利便性､使い勝手のよさ。この３つを備えたシステムづくりに欠かせないのは、 一人ひとりのいいものを造りたいという熱意と高い技術力に裏打ちされたクリエイティビティと オリジナリティであるということ。<br />
                        厳しいせめぎ合いが続くIT業界の中で築いた確固たる地位。 それを支えたのは、ある種の普遍的な、けれども多くの企業が忘れがちになっている”アナログ志向”なのです。<br />
                    </Typography>
                    <CEOImage />
                </Box>
            </Box>
            <Footer />
        </>
    )
}