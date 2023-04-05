import {
    Box,
    Card,
    CardContent,
    CardMedia,
    Grid,
    Modal,
    Typography,
} from '@mui/material';

import { FC, useEffect } from 'react';
import { PersonalityStatistics } from '../../../inference-machine/types';

import './PredictedPersonalityModal.scss';
import { makeStyles } from '@material-ui/core/styles';
import { Bar, BarChart, Legend, Tooltip, XAxis, YAxis } from 'recharts';

interface PredictedPersonalityModalProps {
    personalityStatistics?: PersonalityStatistics;
    open: boolean;
    onClose: any;
}

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
    },
    cardMedia: {
        height: 400,
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
        description:
            'Architect individuals are analytical and strategic thinkers who excel at solving complex problems. They are natural leaders who are skilled at organizing people and resources to achieve their goals. They are often drawn to careers in science, engineering, and business.',
    },
    {
        type: 'INTP',
        nickname: 'The Logician',
        image: '../../../asset/resource/intp-logician.svg',
        description:
            'Logician individuals are analytical and curious individuals who enjoy exploring the underlying principles of the world around them. They are often drawn to careers in science, engineering, and technology.',
    },
    {
        type: 'ENTJ',
        nickname: 'The Commander',
        image: '../../../asset/resource/entj-commander.svg',
        description:
            'Commander individuals are confident and assertive individuals who have a natural talent for organizing people and resources to achieve their goals. They are often drawn to careers in business, law, and politics.',
    },
    {
        type: 'ENTP',
        nickname: 'The Debater',
        image: '../../../asset/resource/entp-debater.svg',
        description:
            'Debater individuals are quick-witted and curious individuals who enjoy debating ideas and challenging others to think differently. They are often drawn to careers in law, business, and technology.',
    },
    {
        type: 'INFJ',
        nickname: 'The Advocate',
        image: '../../../asset/resource/infj-advocate.svg',
        description:
            'Advocate individuals are creative and insightful individuals who have a deep understanding of human motivations and relationships. They enjoy exploring philosophical and spiritual ideas and are often drawn to careers in counseling, teaching, and the arts.',
    },
    {
        type: 'INFP',
        nickname: 'The Mediator',
        image: '../../../asset/resource/infp-mediator.svg',
        description:
            'Mediator individuals are empathetic and idealistic individuals who have a strong sense of compassion and a desire to make the world a better place. They are often drawn to careers in counseling, social work, and the arts.',
    },
    {
        type: 'ENFJ',
        nickname: 'The Protagonist',
        image: '../../../asset/resource/enfj-protagonist.svg',
        description:
            'Protagonist individuals are charismatic and inspiring individuals who have a natural ability to lead and motivate others. They are often drawn to careers in teaching, counseling, and social work.',
    },
    {
        type: 'ENFP',
        nickname: 'The Campaigner',
        image: '../../../asset/resource/enfp-campaigner.svg',
        description:
            'Campaigner individuals are enthusiastic and imaginative individuals who enjoy exploring new ideas and possibilities. They are often drawn to careers in the arts, counseling, and social work.',
    },

    {
        type: 'ISTJ',
        nickname: 'The Logistician',
        image: '../../../asset/resource/istj-logistician.svg',
        description:
            'Logistician individuals are practical and reliable individuals who have a strong sense of duty and responsibility. They are often drawn to careers in finance, accounting, and law enforcement.',
    },
    {
        type: 'ISFJ',
        nickname: 'The Defender',
        image: '../../../asset/resource/isfj-defender.svg',
        description:
            'Defender individuals are caring and loyal individuals who have a deep sense of empathy and a desire to help others. They are often drawn to careers in nursing, social work, and education.',
    },
    {
        type: 'ESTJ',
        nickname: 'The Executive',
        image: '../../../asset/resource/estj-executive.svg',
        description:
            'Executive individuals are confident and decisive individuals who have a natural talent for managing people and projects. They are often drawn to careers in business, law enforcement, and the military.',
    },
    {
        type: 'ESFJ',
        nickname: 'The Consul',
        image: '../../../asset/resource/esfj-consul.svg',
        description:
            'Consul individuals are warm and caring individuals who enjoy creating harmony and stability in their environments. They are often drawn to careers in healthcare, education, and social work.',
    },
    {
        type: 'ISTP',
        nickname: 'The Virtuoso',
        image: '../../../asset/resource/istp-virtuoso.svg',
        description:
            'Virtuoso individuals are adventurous and independent individuals who enjoy exploring the world around them. They are often drawn to careers in the arts, engineering, and sports.',
    },
    {
        type: 'ISFP',
        nickname: 'The Adventurer',
        image: '../../../asset/resource/isfp-adventurer.svg',
        description:
            'Adventurer individuals are artistic and spontaneous individuals who enjoy exploring new experiences and sensations. They are often drawn to careers in the arts, hospitality, and travel.',
    },
    {
        type: 'ESTP',
        nickname: 'The Entrepreneur',
        image: '../../../asset/resource/estp-entrepreneur.svg',
        description:
            'Entrepreneur individuals are energetic and confident individuals who have a natural talent for taking risks and seizing opportunities. They are often drawn to careers in sales, marketing, and entertainment.',
    },
    {
        type: 'ESFP',
        nickname: 'The Entertainer',
        image: '../../../asset/resource/esfp-entertainer.svg',
        description:
            'Entertainer individuals are outgoing and sociable individuals who enjoy making others laugh and feel good. They are often drawn to careers in the arts, hospitality, and customer service.',
    },
];

export const PredictedPersonalityModal: FC<PredictedPersonalityModalProps> = ({
    personalityStatistics,
    open,
    onClose,
}) => {
    const classes = useStyles();

    const computePersonalityType = (
        personalityStatisticsParam: PersonalityStatistics
    ) => {
        const mind =
            personalityStatisticsParam.Extraverted >
            personalityStatisticsParam.Introverted
                ? 'E'
                : 'I';

        const energy =
            personalityStatisticsParam.Intuitive >
            personalityStatisticsParam.Sensing
                ? 'N'
                : 'S';

        const nature =
            personalityStatisticsParam.Thinking >
            personalityStatisticsParam.Feeling
                ? 'T'
                : 'F';

        const tactics =
            personalityStatisticsParam.Perceiving >
            personalityStatisticsParam.Judging
                ? 'P'
                : 'J';

        return `${mind}${energy}${nature}${tactics}`;
    };

    const personality = personalities.find(
        (p) => p.type === computePersonalityType(personalityStatistics!)
    );

    const dataIntroverted = [
        { name: 'Introverted', Mind: personalityStatistics?.Introverted },
        { name: 'Extraverted', Mind: personalityStatistics?.Extraverted },
    ];

    const dataIntuitive = [
        { name: 'Intuitive', Energy: personalityStatistics?.Intuitive },
        { name: 'Sensing', Energy: personalityStatistics?.Sensing },
    ];

    const dataThinking = [
        { name: 'Thinking', Nature: personalityStatistics?.Thinking },
        { name: 'Feeling', Nature: personalityStatistics?.Feeling },
    ];

    const dataPerceiving = [
        { name: 'Perceiving', Tactics: personalityStatistics?.Perceiving },
        { name: 'Judging', Tactics: personalityStatistics?.Judging },
    ];

    return (
        <Modal open={open} onClose={onClose}>
            <Box className={'personality-modal'}>
                <Typography
                    className={classes.cardTitle}
                    sx={{ paddingBottom: '1rem' }}
                >
                    Your personality is ...
                </Typography>
                <Box className={'modal-content'}>
                    <Card className={classes.card}>
                        <CardMedia
                            className={classes.cardMedia}
                            image={personality!.image}
                            title={personality!.type}
                        />

                        <CardContent>
                            <Typography className={classes.cardTitle}>
                                {personality!.type}
                            </Typography>
                            <Typography className={classes.cardTitle}>
                                {personality!.nickname}
                            </Typography>
                            <Typography className={classes.cardDescription}>
                                {personality!.description}
                            </Typography>
                        </CardContent>
                    </Card>
                    <Box>
                        <Box>
                            <BarChart
                                width={400}
                                height={150}
                                data={dataIntroverted}
                            >
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="Mind" fill="#88619a" />
                            </BarChart>

                            <BarChart
                                width={400}
                                height={150}
                                data={dataIntuitive}
                            >
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="Energy" fill="#33a474" />
                            </BarChart>
                        </Box>
                        <Box>
                            <BarChart
                                width={400}
                                height={150}
                                data={dataThinking}
                            >
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="Nature" fill="#4298b4" />
                            </BarChart>

                            <BarChart
                                width={400}
                                height={150}
                                data={dataPerceiving}
                            >
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="Tactics" fill="#d8a537" />
                            </BarChart>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Modal>
    );
};
