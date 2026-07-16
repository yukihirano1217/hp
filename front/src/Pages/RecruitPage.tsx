import { Box, Button, Card, CardContent, Container, Divider, Grid, IconButton, Modal, Paper, Typography } from "@mui/material";
import { Header } from "../Components/Header";
// import { CompanyImage } from "../Components/CompanyImage";
import { Footer } from "../Components/Footer";
import AddIcon from '@mui/icons-material/Add';
import Fukuoka from '../assets/fukuoka.png'
import { useEffect, useState } from "react";
import Saiyotanto from '../assets/saiyotanto.png'
import Saiyo from '../assets/saiyo.png'
import Ikemen from '../assets/ikemen.png'
import It from '../assets/it.png'
import Skillup from '../assets/skillup.png'
import Relax from '../assets/relax.png'
import Ote from '../assets/ote.png'
import Hyouka from '../assets/hyouka.png'
import Fukurikosei from '../assets/fukurikosei.png'
import Remote from '../assets/remote.png'
import Kenjitsu from '../assets/kenjitsu.png'
import Team from '../assets/team.png'
import Joryu from '../assets/joryu.png'
import Athome from '../assets/athome.png'
import Company from '../assets/company.png'
import { styled } from "@mui/system";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import React from "react";
import { headerHeight } from "./TopPage";
import CloseIcon from '@mui/icons-material/Close'

type RecruitCard = {
    title: string;
    image: string;
    text?: string;
}
export const RecruitPage = () => {

    React.useEffect(() => {
        window.scrollTo(0, 0)
    }, [location])

    const cards: RecruitCard[] = [
        {
            title: 'アットホーム',
            image: Athome,
            text: '社員それぞれが「等身大の自分」で働いています。\n近すぎず遠すぎない距離感、ありのままの自分を受け入れてくれる、\nそんな職場です。'
        },
        {
            title: '落ち着いた\nコミュニケーション',
            image: Relax,
            text: "穏やかな方が多く、声を荒げている社員は見たことがありません。\n相手を思いやったコミュニケーションが社内に根付いています。"
        },
        {
            title: 'スキルアップ',
            image: Skillup,
            text: "希望や適性に応じて多種多様なプロジェクトに参画可能です。\n〇個以上の言語を操る社員も。"
        },

        {
            title: '大手案件',
            image: Ote,
            text: "クライアントのほとんどは大手企業。\nお客様の近くで、お客様と直接仕様検討する案件も多数。\n円滑なコミュニケーションのもと依頼を頂けるので「やらされ感」がありません。"
        },
        {
            title: '公平な\n評価制度',
            image: Hyouka,
            text: "年に一度、自身の業務について定量的成果と定性的成果を振り返り、上長や社長との面談で報告します。\n会社への貢献度によって賞与額や昇給幅が大きくなるのでモチベーションになります。"
        },
        {
            title: '大手並みの\n福利厚生',
            image: Fukurikosei,
            text: "年間休日125日以上、様々なケースに寄り添った休暇制度、家族手当や住宅手当などの各種手当、フレックスタイム制度などなど。（詳細は下記へ）\n仕事に集中できる環境と、オフの時間を満喫できる余裕があります。"
        },
        {
            title: 'リモートあり',
            image: Remote,
            text: "ニアショア案件を中心にリモートワークも選択できます。\n家庭や自身のライフスタイルに合わせた働き方ができます。"
        },
        {
            title: '堅実経営',
            image: Kenjitsu,
            text: "1989年の設立以来、〇年連続無借金経営を達成しています。\n〇年連続売上高を拡大しており、安心して働き続けられる会社です。"
        },
        {
            title: 'チームで\nプロジェクト',
            image: Team,
            text: "開発は2～5名のチーム制。\n助け合いながら、高め合いながら仕事に臨めます。"
        },
        {
            title: '福岡で働ける',
            image: Fukuoka,
            text: "地元・福岡で働きたい方、福岡に移住したい方、大歓迎です。\n引越支援制度も。（詳細は下記へ）"
        },
        {
            title: '上流の仕事も\nできる',
            image: Joryu,
            text: "プログラマーとして経験を積めば、要件定義や設計業務も担当できます。\n着実なスキルアップができる環境が整っています。"
        },
        // {
        //     title: '博多駅より\n徒歩3分',
        //     image: Fukuoka,
        // },
        // {
        //     title: 'ビジネス\nカジュアル',
        //     image: Fukuoka,
        // },
        // {
        //     title: '育休取得\n推進',
        //     image: Fukuoka,
        // },
        // {
        //     title: '会社に声を\n届けやすい',
        //     image: Fukuoka,
        // },
        // {
        //     title: '自由参加の\n社内イベント',
        //     image: Fukuoka,
        // },
        // // {
        // //     title: 'グループミーティング',
        // //     image: Fukuoka,
        // // },
        // {
        //     title: 'スタディ\nコンベンション',
        //     image: Fukuoka,
        // },
        // {
        //     title: '未経験歓迎',
        //     image: Fukuoka,
        // },
        // // {
        // //     title: '東京勤務可',
        // //     image: Fukuoka,
        // // },
        // {
        //     title: '資格支援',
        //     image: Fukuoka,
        // },

    ];

    const [recruitModalOpen, setRecruitModalOpen] = useState(false);
    const [modalState, setModalState] = useState<RecruitCard>({ title: '', image: '', text: "" });

    const RecruitModal = ({ title, image, text }: RecruitCard) => {

        return (
            <Box sx={{
                background: 'white',
                borderRadius: 4,
                border: '4px solid #F28B2B',
                justifyContent: 'center',
                marginX: 'auto',
                marginY: '150px',
                width: { sm: '380px', md: '500px', lg: '1000px' },
                overflowX: 'auto',
                height: '500px',
                "@media (max-height: 700px)": {
                    height: '500px'
                },
                "@media (max-height: 500px)": {
                    height: '340px'
                },
                display: 'flex',
                gap: 5,
            }}>
                <IconButton
                    aria-label="close"
                    onClick={() => setRecruitModalOpen(false)}
                    size='small'
                    sx={{
                        position: 'absolute',
                        right: 280,
                        top: 160,
                        color: (theme) => theme.palette.grey[500],
                        border: '2px solid', // 枠線をつける
                        borderColor: (theme) => theme.palette.grey[400],
                    }}
                >
                    <CloseIcon sx={{
                        fontSize: '12px',
                        stroke: "currentColor", // 親のcolor（グレー）を引き継ぐ
                        strokeWidth: 5,
                        transition: 'transform 0.2s',
                        '&:hover': {
                            transform: 'scale(1.4)'
                        }
                    }} />
                </IconButton>
                <img
                    src={image}
                    alt=""
                    style={{
                        width: '40%',
                        // width: 500,
                        objectFit: 'contain',
                        display: 'block',
                        margin: '0 auto',
                        padding: 30
                    }}
                />
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 10, padding: '30px' }}>
                    <Typography variant="h3" sx={{ my: 0 }}>{title}</Typography>
                    <Typography variant="h5" sx={{ whiteSpace: 'pre-line' }}>{text}</Typography>
                </Box>
            </Box>
        )
    }

    const handleModalOpen = (index: number) => {
        setModalState(cards[index])
        setRecruitModalOpen(true)
    }

    type CardProps = {
        title: string;
        image: string;
        text?: string;
        index: number;
    };

    const CardItem: React.FC<CardProps> = ({ title, image, index }) => (
        <Card
            sx={{
                background: '#F28B2B',
                borderRadius: 4,
                boxShadow: 'none',
                position: 'relative',
                minHeight: 350,
                width: 240,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
            }}
        >
            <CardContent>
                <Typography
                    variant="body1"
                    sx={{ fontWeight: 'bold', whiteSpace: 'pre-line', fontSize: '1.5rem', lineHeight: 1.2 }}
                >
                    {title}
                </Typography>
            </CardContent>
            <Box sx={{ position: 'relative', p: 2, pt: 0 }}>
                <img
                    src={image}
                    alt=""
                    style={{
                        width: '100%',
                        height: '100%',
                        maxWidth: '1200px',
                        objectFit: 'contain',
                        display: 'block',
                        margin: '0 auto',
                    }}
                />
                <IconButton
                    sx={{
                        position: 'absolute',
                        bottom: 8,
                        right: 8,
                        background: '#111',
                        color: '#fff',
                        width: 32,
                        height: 32,
                        transition: 'transform 0.2s',
                        '&:hover': {
                            transform: 'scale(1.4)'
                        }
                    }}
                    size="small"
                    onClick={() => handleModalOpen(index)}
                >
                    <AddIcon />
                </IconButton>
            </Box>
        </Card>
    );

    const TitleBox = styled(Box)(({ theme }) => ({
        display: "flex",
        alignItems: "center",
        gap: theme.spacing(2),
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(1),
    }));

    const YellowSquare = styled("span")(({ theme }) => ({
        width: 24,
        height: 24,
        backgroundColor: "#F28B2B", // 黄色四角
        display: "inline-block",
        borderRadius: 2,
    }));

    const DlGrid = styled("dl")(({ theme }) => ({
        margin: 0,
    }));

    const Dt = styled("dt")(({ theme }) => ({
        fontWeight: 700,
        // color: theme.palette.text.primary,
        width: 220, // 左カラム幅（調整可）
        paddingRight: theme.spacing(3),
        alignSelf: "start",
    }));

    const Dd = styled("dd")(({ theme }) => ({
        margin: 0,
        // color: theme.palette.text.secondary,
    }));

    const Row = styled(Box)(({ theme }) => ({
        display: "grid",
        gridTemplateColumns: "220px 1fr",
        alignItems: "start",
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        borderBottom: `1px solid ${theme.palette.divider}`,
        position: "relative",
        [theme.breakpoints.down("sm")]: {
            gridTemplateColumns: "1fr",
            paddingTop: theme.spacing(2),
            paddingBottom: theme.spacing(2),
        },
    }));

    // 黄色アクセントライン（左カラム下に短く表示）
    const Accent = styled("span")(({ theme }) => ({
        position: "absolute",
        // 左カラム内の左からのオフセット（Dtの幅 + paddingRight の一部に合わせる）
        left: theme.spacing(0), // 微調整: Dtの左端からのオフセット
        // 行の下辺から少し上に見せる
        bottom: 0,
        height: 2,
        width: 220, // 黄色ラインの長さ（調整可）
        backgroundColor: "#F28B2B",
        borderRadius: 0,
        // スマホでは左カラムが上になるのでアクセントを非表示にするか幅をフルにする
        [theme.breakpoints.down("sm")]: {
            display: "none",
        },
    }));

    // 黄色アクセントライン（左カラム下に短く表示）
    const Border = styled("span")(({ theme }) => ({
        position: "absolute",
        // 左カラム内の左からのオフセット（Dtの幅 + paddingRight の一部に合わせる）
        left: theme.spacing(27), // 微調整: Dtの左端からのオフセット
        // 行の下辺から少し上に見せる
        bottom: 0,
        height: 2,
        width: 900, // 黄色ラインの長さ（調整可）
        backgroundColor: "black",
        borderRadius: 0,
        // スマホでは左カラムが上になるのでアクセントを非表示にするか幅をフルにする
        [theme.breakpoints.down("sm")]: {
            display: "none",
        },
    }));

    const FlowItem = ({ label, children, showArrow = true }) => {
        return (
            <Box sx={{ position: 'relative', mb: 7 }}>
                <Box display="flex" alignItems="stretch">
                    {/* ラベル */}
                    <Box
                        sx={{
                            width: 160,
                            bgcolor: '#F28B2B',
                            color: '#fff',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            p: 2,
                            borderRadius: 1,
                            boxShadow: 1,
                            flexShrink: 0,
                            position: 'relative', // 親基準の絶対配置用
                        }}
                    >
                        <Typography variant="subtitle1" align="center" sx={{ fontWeight: 'bold' }} fontSize="18px">
                            {label}
                        </Typography>

                        {/* 矢印（ラベル幅の中央に配置） */}
                        {showArrow && (
                            <Box
                                sx={{
                                    position: 'absolute',
                                    left: '50%', // ラベル幅方向の中央
                                    bottom: -50, // ラベルの下、内容Boxとの間に表示
                                    transform: 'translateX(-50%)',
                                    bgcolor: 'transparent',
                                }}
                            >
                                <ArrowDownwardIcon sx={{ color: '#F28B2B', fontSize: "28px" }} />
                            </Box>
                        )}
                    </Box>

                    {/* 内容 */}
                    <Paper
                        variant="outlined"
                        sx={{
                            flex: 1,
                            p: 2,
                            borderColor: '#F28B2B',
                            bgcolor: 'rgba(255,255,255,0.9)',
                            minHeight: 72,
                        }}
                    >
                        <Typography variant="body2" component="div" sx={{ whiteSpace: 'pre-line' }}>
                            {children}
                        </Typography>
                    </Paper>
                </Box>
            </Box>
        );
    };


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
                        ホーム　＞　採用情報
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
                    >採用情報</Typography>
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
                        採用にかかわる情報の発信、および当社の求める人材、募集要項についてご案内します
                    </Typography>
                </Box>

            </Box>

            {/* <Box sx={{ width: '100%', bgcolor: 'white', boxSizing: 'border-box', p: 4, }}> */}
            <Typography sx={{ color: 'black', marginLeft: '100px', fontSize: '2rem', my: '5%' }}>当社の魅力</Typography>
            <Grid
                container
                spacing={6}
                sx={{
                    // maxWidth: 1200,
                    // minWidth: 900,
                    mx: '100px',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                }}
            >
                {cards.map((card, i) => (
                    <Grid item key={i}>
                        <CardItem {...card} index={i} />
                    </Grid>
                ))}
            </Grid>
            {/* </Box> */}
            <Modal open={recruitModalOpen} onClose={() => setRecruitModalOpen(false)} BackdropProps={{
                sx: {
                    backgroundColor: 'rgba(255,255,255,0.6)', // 白い透過（明るい）
                }
            }}>
                <RecruitModal title={modalState.title} image={modalState.image} text={modalState.text} />
            </Modal>


            {/* <Box sx={{ width: '100%', bgcolor: 'white', boxSizing: 'border-box', p: 4 }}> */}
            <Typography sx={{ color: 'black', marginLeft: '100px', fontSize: '2rem', my: '100px' }}>採用担当者からのメッセージ </Typography>
            <Box sx={{ justifyContent: 'center', marginTop: '50px', marginBottom: '50px' }}>
                <Box sx={{ m: '100px' }}>
                    <img
                        src={Saiyotanto}
                        alt=""
                        style={{
                            width: '100%',
                            // maxWidth: 120,
                            objectFit: 'contain',
                            display: 'block',
                            margin: '0 auto',
                        }}
                    />
                </Box>

                <Box
                    sx={{
                        width: '100%',
                        maxWidth: '1000px',
                        mx: 'auto',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography
                        sx={{
                            width: '100%',
                            margin: '30px auto',
                            textAlign: 'justify',
                            fontSize: '1.2rem',
                        }}
                    >
                        システムプロステージの採用ページをご覧いただき、ありがとうございます。
                    </Typography>

                    <Typography
                        sx={{
                            width: '100%',
                            margin: '30px auto',
                            textAlign: 'justify',
                            fontSize: '1.2rem'
                        }}
                    >
                        私たちは移り変わりの激しいこの業界において堅実に右肩上がりの成長を続けてきました。
                    </Typography>
                    <Typography
                        sx={{
                            width: '100%',
                            margin: '30px auto',
                            textAlign: 'justify',
                            fontSize: '1.2rem'
                        }}
                    >
                        これは従業員一丸となって自己研鑽を怠らず、お客様からの信頼を勝ち取り続けてきた結果だと考えています。
                    </Typography>
                    <Typography
                        sx={{
                            width: '100%',
                            margin: '30px auto',
                            textAlign: 'justify',
                            fontSize: '1.2rem'
                        }}
                    >
                        そして今、IT業界は大きな転換期を迎えています。
                    </Typography>
                    <Typography
                        sx={{
                            width: '100%',
                            margin: '30px auto',
                            textAlign: 'justify',
                            fontSize: '1.2rem'
                        }}
                    >
                        AIの台頭により激変する業務内容、価値創造のプロセス、これらに対応しながら
                    </Typography>
                    <Typography
                        sx={{
                            width: '100%',
                            margin: '30px auto',
                            textAlign: 'justify',
                            fontSize: '1.2rem'
                        }}
                    >
                        お客様からの信頼をより確かなものにしていかなければなりません。
                    </Typography>
                    <Typography
                        sx={{
                            width: '100%',
                            margin: '30px auto',
                            textAlign: 'justify',
                            fontSize: '1.2rem'
                        }}
                    >
                        この難しい挑戦の中心にいるのは、私たち一人ひとりです。
                    </Typography>
                    <Typography
                        sx={{
                            width: '100%',
                            margin: '30px auto',
                            textAlign: 'justify',
                            fontSize: '1.2rem'
                        }}
                    >
                        だからこそ、未来を見据えて挑戦し、お客様と向き合い続ける意欲を持った仲間を求めています。
                    </Typography>
                    <Typography
                        sx={{
                            width: '100%',
                            margin: '30px auto',
                            textAlign: 'justify',
                            fontSize: '1.2rem'
                        }}
                    >
                        設立から36年の堅実経営により、福利厚生をはじめ挑戦するのに十分な環境は整っています。
                    </Typography>
                    <Typography
                        sx={{
                            width: '100%',
                            margin: '30px auto',
                            textAlign: 'justify',
                            fontSize: '1.2rem'
                        }}
                    >
                        システムプロステージであなたのこれまで培った技術力、ノウハウを発揮してみませんか？
                    </Typography>
                    <Typography
                        sx={{
                            width: '100%',
                            margin: '30px auto',
                            textAlign: 'justify',
                            fontSize: '1.2rem'
                        }}
                    >
                        皆さんにお会いできることを、心より楽しみにしています。
                    </Typography>
                </Box>
                <Box
                    sx={{
                        width: '100%',
                        maxWidth: '1000px',
                        mx: 'auto',
                    }}
                >
                    <Typography
                        sx={{
                            width: '100%',
                            margin: '30px auto',
                            textAlign: 'justify',
                            fontSize: '1.2rem'
                        }}
                    >
                        採用担当
                    </Typography>
                </Box>
                <Box sx={{ justifyContent: 'center', marginTop: '50px', marginBottom: '50px' }}>
                    <Box sx={{ m: '100px' }}>
                        <img
                            src={Saiyo}
                            alt=""
                            style={{
                                width: '100%',
                                // maxWidth: 120,
                                objectFit: 'contain',
                                display: 'block',
                                margin: '0 auto',
                            }}
                        />
                    </Box>
                </Box>

                {/*
                    <Typography
                        variant="h5"
                    >先輩社員インタビュー
                    </Typography>
                    BOXを写真で並べる
                    <Typography
                        variant="h5"
                    >女性社員座談会
                    </Typography>
                    大きな写真
                    */}
            </Box>

            <Container maxWidth="lg">
                {/* タイトル */}
                <TitleBox>
                    <YellowSquare />
                    <Typography variant="h5" component="h1">
                        募集要項
                    </Typography>
                </TitleBox>

                <Divider sx={{ mb: 4 }} />

                <Box component="section">
                    <DlGrid>
                        <Row>
                            <Dt>応募資格</Dt>
                            <Dd>
                                高卒以上　年齢不問<br />
                                ※業界経験がある方は優遇いたします。
                            </Dd>
                            <Accent />
                            <Border />
                        </Row>

                        <Row>
                            <Dt>主な使用言語</Dt>
                            <Dd>
                                <Typography component="div" sx={{ fontWeight: 700, }}>
                                    C#、.NET、Javaなど
                                </Typography>
                                <Typography >※いずれかの言語知識に精通した方、優遇いたします</Typography>
                            </Dd>
                            <Accent />
                            <Border />
                        </Row>

                        <Row>
                            <Dt>勤務地</Dt>
                            <Dd>
                                福岡市内、北九州市内<br />
                                ※東京での勤務も可能です。
                            </Dd>
                            <Accent />
                            <Border />
                        </Row>
                        <Row>
                            <Dt>勤務時間</Dt>
                            <Dd>
                                フレックスタイム制<br />
                                (コアタイム13：00～16：00／標準労働時間8時間)<br />
                                ※本社勤務の場合
                            </Dd>
                            <Accent />
                            <Border />
                        </Row>
                        <Row>
                            <Dt>給与</Dt>
                            <Dd>
                                月給240,121円～410,000円<br />
                                ※年齢、経験、能力、前職給与を十分考慮の上、決定いたします。<br />
                                <br />
                                ［給与例］<br />
                                30歳／入社8年／月給33万円※SE<br />
                                25歳／入社3年／月給27万8000円※SE
                            </Dd>
                            <Accent />
                            <Border />
                        </Row>
                        <Row>
                            <Dt>昇給・賞与</Dt>
                            <Dd>
                                昇給／年1回<br />
                                賞与／年2回(7月・12月)
                            </Dd>
                            <Accent />
                            <Border />
                        </Row>
                        <Row>
                            <Dt>諸手当</Dt>
                            <Dd>
                                時間外手当、通勤交通費（※全額支給）、家族手当、住宅手当（※扶養加算あり、また単身者住宅補助あり）<br />
                                資格手当（※下記参照）、その他手当あり
                            </Dd>
                            <Accent />
                            <Border />
                        </Row>
                        <Row>
                            <Dt>休日・休暇</Dt>
                            <Dd>
                                完全週休2日制(土・日)、祝日、年次有給、年末年始、夏季、アニバーサリー休暇、赴任休暇、結婚休暇、忌引休暇<br />
                                生理休暇、配偶者出産休暇、産前・産後休業、育児・介護休業、子の看護等休暇、裁判員等のための休暇、特別休暇<br />
                                ※年間休日120日以上（令和7年予定：125日）
                            </Dd>
                            <Accent />
                            <Border />
                        </Row>
                        <Row>
                            <Dt>福利厚生</Dt>
                            <Dd>
                                ■資格手当（※毎月支給）<br />
                                ・ＩＴストラテジスト試験／5万円<br />
                                ・プロジェクトマネージャ試験／3.5万円<br />
                                ・システムアーキテクト試験／3万円<br />
                                ・ネットワークスペシャリスト試験、データベーススペシャリスト試験／2.5万円<br />
                                ・情報セキュリティスペシャリスト試験／2万円<br />
                                ・エンベデッドシステムスペシャリスト試験／1.5万円<br />
                                ・ITサービスマネージャ試験／1.5万円<br />
                                ・応用情報技術者試験／1万円<br />
                                その他対象資格あり
                            </Dd>
                            <Accent />
                            <Border />
                        </Row>
                        <Row>
                            <Dt>資格手当詳細</Dt>
                            <Dd>
                                ■各種社会保険完備(雇用、労災、健康、厚生年金)<br />
                                ■退職金制度<br />
                                ■資格取得補助<br />
                                ■育児休暇制度<br />
                                ■介護休暇制度<br />
                                ■アニバーサリー休暇制度<br />
                                ■社員旅行（台湾、蔵王、金沢など）<br />
                            </Dd>
                            <Accent />
                            <Border />
                        </Row>
                    </DlGrid>
                </Box>
            </Container>
            <Box sx={{ my: 10 }} />

            <Typography sx={{ color: 'black', marginLeft: '100px', fontSize: '2rem', marginBottom: '5%' }}>よくある質問</Typography>
            <Box sx={{ display: "flex", justifyContent: "center", width: "100%", mb: 2 }}>
                <Box sx={{ display: "row" }}>
                    <Box
                        sx={{
                            position: "relative",
                            width: 1200,
                            height: 210,
                            // border: "1.5px solid #1F2A44",
                            borderRadius: "36px",
                            bgcolor: "#F6E0D4",
                            overflow: "visible",
                            mb: 10
                        }}
                    >
                        {/* X */}
                        <Typography
                            sx={{
                                position: "absolute",
                                top: -35,
                                left: 16,
                                fontSize: 64,
                                fontWeight: 800,
                                lineHeight: 1,
                                color: "transparent",
                                WebkitTextStroke: "3px #F28B2B",
                                textShadow: "0 1px 0 rgba(0,0,0,0.05)",
                                userSelect: "none",
                                pointerEvents: "none",
                            }}
                        >
                            {"Q"}
                        </Typography>

                        {/* Y */}
                        <Typography
                            sx={{
                                position: "absolute",
                                top: -35,
                                left: "50%",
                                transform: "translateX(-50%)",
                                fontSize: 72,
                                fontWeight: 800,
                                lineHeight: 1,
                                color: "transparent",
                                WebkitTextStroke: "3px #F28B2B",
                                textShadow: "0 1px 0 rgba(0,0,0,0.05)",
                                userSelect: "none",
                                pointerEvents: "none",
                            }}
                        >
                            {"A"}
                        </Typography>

                        {/* 中身 */}
                        <Box
                            sx={{
                                height: "100%",
                                px: 6,
                                display: "grid",
                                gridTemplateColumns: "3fr 1fr 4fr",
                                alignItems: "center",
                                // pt: 4, // 上のラベルとかぶらないように少し下げる
                            }}
                        >
                            <Typography sx={{ mt: 2 }} fontSize="18px">土日の面接は可能ですか？</Typography>
                            <Typography color='#F28B2B' sx={{ mt: 2, fontSize: '40px' }}>→</Typography>
                            <Typography sx={{ mt: 2 }} fontSize="18px">
                                基本的には平日の実施となりますが、ご相談頂ければ柔軟に対応致します。
                            </Typography>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            position: "relative",
                            width: 1200,
                            height: 210,
                            // border: "1.5px solid #1F2A44",
                            borderRadius: "36px",
                            bgcolor: "#F6E0D4",
                            overflow: "visible",
                            mb: 10
                        }}
                    >
                        {/* X */}
                        <Typography
                            sx={{
                                position: "absolute",
                                top: -35,
                                left: 16,
                                fontSize: 64,
                                fontWeight: 800,
                                lineHeight: 1,
                                color: "transparent",
                                WebkitTextStroke: "3px #F28B2B",
                                textShadow: "0 1px 0 rgba(0,0,0,0.05)",
                                userSelect: "none",
                                pointerEvents: "none",
                            }}
                        >
                            {"Q"}
                        </Typography>

                        {/* Y */}
                        <Typography
                            sx={{
                                position: "absolute",
                                top: -35,
                                left: "50%",
                                transform: "translateX(-50%)",
                                fontSize: 72,
                                fontWeight: 800,
                                lineHeight: 1,
                                color: "transparent",
                                WebkitTextStroke: "3px #F28B2B",
                                textShadow: "0 1px 0 rgba(0,0,0,0.05)",
                                userSelect: "none",
                                pointerEvents: "none",
                            }}
                        >
                            {"A"}
                        </Typography>

                        {/* 中身 */}
                        <Box
                            sx={{
                                height: "100%",
                                px: 6,
                                display: "grid",
                                gridTemplateColumns: "3fr 1fr 4fr",
                                alignItems: "center",
                                // pt: 4, // 上のラベルとかぶらないように少し下げる
                            }}
                        >
                            <Typography sx={{ mt: 2 }} fontSize="18px">合否の連絡はどのようになされますか？</Typography>
                            <Typography color='#F28B2B' sx={{ mt: 2, fontSize: '40px' }}>→</Typography>
                            <Typography sx={{ mt: 2 }} fontSize="18px">
                                お電話またはメールにてご連絡致します。<br />
                                ご希望がございましたら事前にご相談ください。
                            </Typography>
                        </Box>
                    </Box>

                    <Box
                        sx={{
                            position: "relative",
                            width: 1200,
                            height: 210,
                            // border: "1.5px solid #1F2A44",
                            borderRadius: "36px",
                            bgcolor: "#F6E0D4",
                            overflow: "visible",
                            mb: 10
                        }}
                    >
                        {/* X */}
                        <Typography
                            sx={{
                                position: "absolute",
                                top: -35,
                                left: 16,
                                fontSize: 64,
                                fontWeight: 800,
                                lineHeight: 1,
                                color: "transparent",
                                WebkitTextStroke: "3px #F28B2B",
                                textShadow: "0 1px 0 rgba(0,0,0,0.05)",
                                userSelect: "none",
                                pointerEvents: "none",
                            }}
                        >
                            {"Q"}
                        </Typography>

                        {/* Y */}
                        <Typography
                            sx={{
                                position: "absolute",
                                top: -35,
                                left: "50%",
                                transform: "translateX(-50%)",
                                fontSize: 72,
                                fontWeight: 800,
                                lineHeight: 1,
                                color: "transparent",
                                WebkitTextStroke: "3px #F28B2B",
                                textShadow: "0 1px 0 rgba(0,0,0,0.05)",
                                userSelect: "none",
                                pointerEvents: "none",
                            }}
                        >
                            {"A"}
                        </Typography>

                        {/* 中身 */}
                        <Box
                            sx={{
                                height: "100%",
                                px: 6,
                                display: "grid",
                                gridTemplateColumns: "3fr 1fr 4fr",
                                alignItems: "center",
                                // pt: 4, // 上のラベルとかぶらないように少し下げる
                            }}
                        >
                            <Typography sx={{ mt: 2 }} fontSize="18px">面接はどのような雰囲気ですか？</Typography>
                            <Typography color='#F28B2B' sx={{ mt: 2, fontSize: '40px' }}>→</Typography>
                            <Typography sx={{ mt: 2 }} fontSize="18px">
                                1次面接はエンジニアのマネージャー、最終面接は社長が対応します。<br />
                                どちらもカジュアルな雰囲気でこれまでのあなたのご経験を軸にお話を聞かせて頂きます。
                            </Typography>
                        </Box>
                    </Box>

                    <Box
                        sx={{
                            position: "relative",
                            width: 1200,
                            height: 210,
                            // border: "1.5px solid #1F2A44",
                            borderRadius: "36px",
                            bgcolor: "#F6E0D4",
                            overflow: "visible",
                        }}
                    >
                        {/* X */}
                        <Typography
                            sx={{
                                position: "absolute",
                                top: -35,
                                left: 16,
                                fontSize: 64,
                                fontWeight: 800,
                                lineHeight: 1,
                                color: "transparent",
                                WebkitTextStroke: "3px #F28B2B",
                                textShadow: "0 1px 0 rgba(0,0,0,0.05)",
                                userSelect: "none",
                                pointerEvents: "none",
                            }}
                        >
                            {"Q"}
                        </Typography>

                        {/* Y */}
                        <Typography
                            sx={{
                                position: "absolute",
                                top: -35,
                                left: "50%",
                                transform: "translateX(-50%)",
                                fontSize: 72,
                                fontWeight: 800,
                                lineHeight: 1,
                                color: "transparent",
                                WebkitTextStroke: "3px #F28B2B",
                                textShadow: "0 1px 0 rgba(0,0,0,0.05)",
                                userSelect: "none",
                                pointerEvents: "none",
                            }}
                        >
                            {"A"}
                        </Typography>

                        {/* 中身 */}
                        <Box
                            sx={{
                                height: "100%",
                                px: 6,
                                display: "grid",
                                gridTemplateColumns: "3fr 1fr 4fr",
                                alignItems: "center",
                                // pt: 4, // 上のラベルとかぶらないように少し下げる
                            }}
                        >
                            <Typography sx={{ mt: 2 }} fontSize="18px">適性試験はどのような試験ですか？</Typography>
                            <Typography color='#F28B2B' sx={{ mt: 2, fontSize: '40px' }}>→</Typography>
                            <Typography sx={{ mt: 2 }} fontSize="18px">
                                弊社独自のものです。<br />
                                頭の体操のような試験ですので事前準備や予備知識は不要です。
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>

            <Box sx={{ my: 10 }} />
            <Typography sx={{ color: 'black', marginLeft: '100px', fontSize: '2rem', marginBottom: '5%' }}>選考フロー</Typography>

            <Box sx={{ maxWidth: 780, mx: 'auto', mt: 4, px: 2 }}>

                {/* フロー */}
                <FlowItem label="エントリー">
                    <Typography fontSize="18px">
                        ・saiyou@system-prostage.co.jp宛にご応募の旨、メールをお願いします。<br />
                        ・外部の求職サイトからのエントリーでも結構です。
                    </Typography>
                </FlowItem>

                <FlowItem label="書類選考">
                    <Typography fontSize="18px">
                        ・履歴書、職務経歴書をもとに選考致します。
                    </Typography>
                </FlowItem>


                <FlowItem label="適性検査">
                    <Typography fontSize="18px">
                        ・簡単な筆記試験を受けて頂きます。<br />
                        （所要時間：30分程度）
                    </Typography>
                </FlowItem>

                <FlowItem label="面接">
                    <Typography fontSize="18px">
                        ・1次：マネージャ職のエンジニアとの面接です<br />
                        ・最終：社長との面接です<br />
                        （所要時間：1.5時間程度）
                    </Typography>
                </FlowItem>


                <FlowItem label="内定" showArrow={false}>
                    <Typography fontSize="18px">
                        ・雇用契約書交付
                    </Typography>
                </FlowItem>

            </Box>



            {/* </Box > */}




            <Footer />
        </>
    );
}