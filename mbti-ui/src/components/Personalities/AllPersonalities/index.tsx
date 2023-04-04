import React from 'react';
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
        padding: theme.spacing(4),
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
        type: 'INFJ',
        image: '/images/infj.png',
        description:
            'Advocate personalities are creative and insightful individuals who have a deep understanding of human motivations and relationships. They enjoy exploring philosophical and spiritual ideas and are often drawn to careers in counseling, teaching, and the arts.',
    },
    {
        type: 'INTJ',
        image: '/images/intj.png',
        description:
            'Architect personalities are analytical and strategic thinkers who excel at solving complex problems. They are natural leaders who are skilled at organizing people and resources to achieve their goals. They are often drawn to careers in science, engineering, and business.',
    },
    {
        type: 'INFP',
        image: '/images/infp.png',
        description:
            'Mediator personalities are empathetic and idealistic individuals who have a strong sense of compassion and a desire to make the world a better place. They are often drawn to careers in counseling, social work, and the arts.',
    },
    {
        type: 'INTP',
        image: '/images/intp.png',
        description:
            'Logician personalities are analytical and curious individuals who enjoy exploring the underlying principles of the world around them. They are often drawn to careers in science, engineering, and technology.',
    },
    {
        type: 'ENFJ',
        image: '/images/enfj.png',
        description:
            'Protagonist personalities are charismatic and inspiring individuals who have a natural ability to lead and motivate others. They are often drawn to careers in teaching, counseling, and social work.',
    },
    {
        type: 'ENTJ',
        image: '/images/entj.png',
        description:
            'Commander personalities are confident and assertive individuals who have a natural talent for organizing people and resources to achieve their goals. They are often drawn to careers in business, law, and politics.',
    },
    {
        type: 'ENFP',
        image: '/images/enfp.png',
        description:
            'Campaigner personalities are enthusiastic and imaginative individuals who enjoy exploring new ideas and possibilities. They are often drawn to careers in the arts, counseling, and social work.',
    },
    {
        type: 'ENTP',
        image: '/imagesentp.png',
        description:
            'Debater personalities are quick-witted and curious individuals who enjoy debating ideas and challenging others to think differently. They are often drawn to careers in law, business, and technology.',
    },
    {
        type: 'ISTJ',
        image: '/images/istj.png',
        description:
            'Logistician personalities are practical and reliable individuals who have a strong sense of duty and responsibility. They are often drawn to careers in finance, accounting, and law enforcement.',
    },
    {
        type: 'ISFJ',
        image: '/images/isfj.png',
        description:
            'Defender personalities are caring and loyal individuals who have a deep sense of empathy and a desire to help others. They are often drawn to careers in nursing, social work, and education.',
    },
    {
        type: 'ESTJ',
        image: '/images/estj.png',
        description:
            'Executive personalities are confident and decisive individuals who have a natural talent for managing people and projects. They are often drawn to careers in business, law enforcement, and the military.',
    },
    {
        type: 'ESFJ',
        image: '/images/esfj.png',
        description:
            'Consul personalities are warm and caring individuals who enjoy creating harmony and stability in their environments. They are often drawn to careers in healthcare, education, and social work.',
    },
    {
        type: 'ISTP',
        image: '/images/istp.png',
        description:
            'Virtuoso personalities are adventurous and independent individuals who enjoy exploring the world around them. They are often drawn to careers in the arts, engineering, and sports.',
    },
    {
        type: 'ISFP',
        image: '/images/isfp.png',
        description:
            'Adventurer personalities are artistic and spontaneous individuals who enjoy exploring new experiences and sensations. They are often drawn to careers in the arts, hospitality, and travel.',
    },
    {
        type: 'ESTP',
        image: '/images/estp.png',
        description:
            'Entrepreneur personalities are energetic and confident individuals who have a natural talent for taking risks and seizing opportunities. They are often drawn to careers in sales, marketing, and entertainment.',
    },
    {
        type: 'ESFP',
        image: '/images/esfp.png',
        description:
            'Entertainer personalities are outgoing and sociable individuals who enjoy making others laugh and feel good. They are often drawn to careers in the arts, hospitality, and customer service.',
    },
];

const AllPersonalities = () => {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Grid container rowSpacing={10} columnSpacing={4}>
                {personalities.map((personality) => (
                    <Grid key={personality.type} item xs={12} sm={6} md={3}>
                        <Card className={classes.card}>
                            <CardMedia
                                className={classes.cardMedia}
                                image={personality.image}
                                title={personality.type}
                            />
                            <CardContent>
                                <Typography className={classes.cardTitle}>
                                    {personality.type}
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

export default AllPersonalities;
