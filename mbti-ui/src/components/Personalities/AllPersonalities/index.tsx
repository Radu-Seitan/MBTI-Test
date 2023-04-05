import { makeStyles } from '@material-ui/core/styles';
import Grid from '@mui/material/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Box } from '@mui/material';

const useStyles = makeStyles((theme: any) => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(5),
        backgroundColor: '#efefef',
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: theme.spacing(2),
        borderRadius: theme.spacing(1),
        boxShadow: theme.shadows[3],
        transition: 'transform 0.3s ease-out',
        '&:hover': {
            transform: 'scale(1.05)',
            cursor: 'pointer',
        },
    },
    cardMedia: {
        height: 200,
        width: '100%',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    },
    cardTitle: {
        marginTop: theme.spacing(2),
        fontWeight: 'bold',
        fontSize: '1.25rem',
        textAlign: 'center',
    },
    cardDescription: {
        marginTop: theme.spacing(2),
        fontSize: '1rem',
        textAlign: 'center',
    },
}));

const personalities = [
    {
        type: 'INTJ',
        nickname: 'The Architect',
        image: '../../../asset/resource/intj-architect.svg',
        link: 'https://www.16personalities.com/intj-personality',
        description:
            'Architect individuals are analytical and strategic thinkers who excel at solving complex problems. They are natural leaders who are skilled at organizing people and resources to achieve their goals. They are often drawn to careers in science, engineering, and business.',
    },
    {
        type: 'INTP',
        nickname: 'The Logician',
        image: '../../../asset/resource/intp-logician.svg',
        link: 'https://www.16personalities.com/intp-personality',
        description:
            'Logician individuals are analytical and curious individuals who enjoy exploring the underlying principles of the world around them. They are often drawn to careers in science, engineering, and technology.',
    },
    {
        type: 'ENTJ',
        nickname: 'The Commander',
        image: '../../../asset/resource/entj-commander.svg',
        link: 'https://www.16personalities.com/entj-personality',
        description:
            'Commander individuals are confident and assertive individuals who have a natural talent for organizing people and resources to achieve their goals. They are often drawn to careers in business, law, and politics.',
    },
    {
        type: 'ENTP',
        nickname: 'The Debater',
        image: '../../../asset/resource/entp-debater.svg',
        link: 'https://www.16personalities.com/entp-personality',
        description:
            'Debater individuals are quick-witted and curious individuals who enjoy debating ideas and challenging others to think differently. They are often drawn to careers in law, business, and technology.',
    },
    {
        type: 'INFJ',
        nickname: 'The Advocate',
        image: '../../../asset/resource/infj-advocate.svg',
        link: 'https://www.16personalities.com/infj-personality',
        description:
            'Advocate individuals are creative and insightful individuals who have a deep understanding of human motivations and relationships. They enjoy exploring philosophical and spiritual ideas and are often drawn to careers in counseling, teaching, and the arts.',
    },
    {
        type: 'INFP',
        nickname: 'The Mediator',
        image: '../../../asset/resource/infp-mediator.svg',
        link: 'https://www.16personalities.com/infp-personality',
        description:
            'Mediator individuals are empathetic and idealistic individuals who have a strong sense of compassion and a desire to make the world a better place. They are often drawn to careers in counseling, social work, and the arts.',
    },
    {
        type: 'ENFJ',
        nickname: 'The Protagonist',
        image: '../../../asset/resource/enfj-protagonist.svg',
        link: 'https://www.16personalities.com/enfj-personality',
        description:
            'Protagonist individuals are charismatic and inspiring individuals who have a natural ability to lead and motivate others. They are often drawn to careers in teaching, counseling, and social work.',
    },
    {
        type: 'ENFP',
        nickname: 'The Campaigner',
        image: '../../../asset/resource/enfp-campaigner.svg',
        link: 'https://www.16personalities.com/enfp-personality',
        description:
            'Campaigner individuals are enthusiastic and imaginative individuals who enjoy exploring new ideas and possibilities. They are often drawn to careers in the arts, counseling, and social work.',
    },

    {
        type: 'ISTJ',
        nickname: 'The Logistician',
        image: '../../../asset/resource/istj-logistician.svg',
        link: 'https://www.16personalities.com/istj-personality',
        description:
            'Logistician individuals are practical and reliable individuals who have a strong sense of duty and responsibility. They are often drawn to careers in finance, accounting, and law enforcement.',
    },
    {
        type: 'ISFJ',
        nickname: 'The Defender',
        image: '../../../asset/resource/isfj-defender.svg',
        link: 'https://www.16personalities.com/isfj-personality',
        description:
            'Defender individuals are caring and loyal individuals who have a deep sense of empathy and a desire to help others. They are often drawn to careers in nursing, social work, and education.',
    },
    {
        type: 'ESTJ',
        nickname: 'The Executive',
        image: '../../../asset/resource/estj-executive.svg',
        link: 'https://www.16personalities.com/estj-personality',
        description:
            'Executive individuals are confident and decisive individuals who have a natural talent for managing people and projects. They are often drawn to careers in business, law enforcement, and the military.',
    },
    {
        type: 'ESFJ',
        nickname: 'The Consul',
        image: '../../../asset/resource/esfj-consul.svg',
        link: 'https://www.16personalities.com/esfj-personality',
        description:
            'Consul individuals are warm and caring individuals who enjoy creating harmony and stability in their environments. They are often drawn to careers in healthcare, education, and social work.',
    },
    {
        type: 'ISTP',
        nickname: 'The Virtuoso',
        image: '../../../asset/resource/istp-virtuoso.svg',
        link: 'https://www.16personalities.com/istp-personality',
        description:
            'Virtuoso individuals are adventurous and independent individuals who enjoy exploring the world around them. They are often drawn to careers in the arts, engineering, and sports.',
    },
    {
        type: 'ISFP',
        nickname: 'The Adventurer',
        image: '../../../asset/resource/isfp-adventurer.svg',
        link: 'https://www.16personalities.com/isfp-personality',
        description:
            'Adventurer individuals are artistic and spontaneous individuals who enjoy exploring new experiences and sensations. They are often drawn to careers in the arts, hospitality, and travel.',
    },
    {
        type: 'ESTP',
        nickname: 'The Entrepreneur',
        image: '../../../asset/resource/estp-entrepreneur.svg',
        link: 'https://www.16personalities.com/estp-personality',
        description:
            'Entrepreneur individuals are energetic and confident individuals who have a natural talent for taking risks and seizing opportunities. They are often drawn to careers in sales, marketing, and entertainment.',
    },
    {
        type: 'ESFP',
        nickname: 'The Entertainer',
        image: '../../../asset/resource/esfp-entertainer.svg',
        link: 'https://www.16personalities.com/esfp-personality',
        description:
            'Entertainer individuals are outgoing and sociable individuals who enjoy making others laugh and feel good. They are often drawn to careers in the arts, hospitality, and customer service.',
    },
];

export const AllPersonalities = () => {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Grid container rowSpacing={10} columnSpacing={4}>
                {personalities.map((personality) => (
                    <Grid key={personality.type} item xs={12} sm={6} md={3}>
                        <Card
                            className={classes.card}
                            onClick={() =>
                                window.open(personality.link, '_blank')
                            }
                        >
                            <CardMedia
                                className={classes.cardMedia}
                                image={personality.image}
                                title={personality.type}
                            />

                            <CardContent>
                                <Typography className={classes.cardTitle}>
                                    {personality.type}
                                </Typography>
                                <Typography className={classes.cardTitle}>
                                    {personality.nickname}
                                </Typography>
                                <Typography className={classes.cardDescription}>
                                    {personality.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};
