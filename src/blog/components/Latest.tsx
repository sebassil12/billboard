import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
// import Pagination from '@mui/material/Pagination';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';

const articleInfo = [
  {
    tag: 'Philosophy',
    title: 'La educación como motor del cambio',
    description: 'La educación es el arma más poderosa para transformar el mundo.',
    authors: [
      { name: 'Nelson Mandela', avatar: '/static/images/avatar/1.jpg' },
    ],
  },
  {
    tag: 'Philosophy',
    title: 'El valor de la experiencia',
    description: 'Todo conocimiento auténtico comienza en la experiencia.',
    authors: [
      { name: 'Immanuel Kant', avatar: '/static/images/avatar/2.jpg' },
    ],
  },
  {
    tag: 'Philosophy',
    title: 'Aprender con el corazón y la mente',
    description: 'Educar la mente sin involucrar el corazón no tiene sentido.',
    authors: [
      { name: 'Aristóteles', avatar: '/static/images/avatar/3.jpg' },
    ],
  },
  {
    tag: 'Philosophy',
    title: 'La humildad del saber',
    description: 'La verdadera sabiduría está en reconocer nuestra ignorancia.',
    authors: [
      { name: 'Sócrates', avatar: '/static/images/avatar/4.jpg' },
    ],
  },
  {
    tag: 'Philosophy',
    title: 'El aprendizaje como fuente inagotable',
    description: 'El aprendizaje no cansa a la mente, la enriquece.',
    authors: [
      { name: 'Leonardo da Vinci', avatar: '/static/images/avatar/5.jpg' },
    ],
  },
  {
    tag: 'Philosophy',
    title: 'La vida es educación',
    description: 'La educación no es preparación para la vida; es la vida misma.',
    authors: [
      { name: 'John Dewey', avatar: '/static/images/avatar/6.jpg' },
    ],
  },
  {
    tag: 'Philosophy',
    title: 'El poder del conocimiento',
    description: 'Saber te da la fuerza para cambiar tu realidad.',
    authors: [
      { name: 'Francis Bacon', avatar: '/static/images/avatar/7.jpg' },
    ],
  },
  {
    tag: 'Philosophy',
    title: 'Encender la pasión por aprender',
    description: 'La educación no llena un vacío, enciende una llama.',
    authors: [
      { name: 'William Butler Yeats', avatar: '/static/images/avatar/8.jpg' },
    ],
  },
  {
    tag: 'Philosophy',
    title: 'Los frutos del aprendizaje',
    description: 'Aunque el proceso de aprender puede ser arduo, su recompensa es dulce.',
    authors: [
      { name: 'Aristóteles', avatar: '/static/images/avatar/9.jpg' },
    ],
  },
  {
    tag: 'Philosophy',
    title: 'El propósito del conocimiento',
    description: 'La educación tiene el poder de iluminar el camino hacia la verdad.',
    authors: [
      { name: 'John F. Kennedy', avatar: '/static/images/avatar/10.jpg' },
    ],
  },
];

const StyledTypography = styled(Typography)({
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 2,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

const TitleTypography = styled(Typography)(({ theme }) => ({
  position: 'relative',
  textDecoration: 'none',
  '&:hover': { cursor: 'pointer' },
  '& .arrow': {
    visibility: 'hidden',
    position: 'absolute',
    right: 0,
    top: '50%',
    transform: 'translateY(-50%)',
  },
  '&:hover .arrow': {
    visibility: 'visible',
    opacity: 0.7,
  },
  '&:focus-visible': {
    outline: '3px solid',
    outlineColor: 'hsla(210, 98%, 48%, 0.5)',
    outlineOffset: '3px',
    borderRadius: '8px',
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    width: 0,
    height: '1px',
    bottom: 0,
    left: 0,
    backgroundColor: theme.palette.text.primary,
    opacity: 0.3,
    transition: 'width 0.3s ease, opacity 0.3s ease',
  },
  '&:hover::before': {
    width: '100%',
  },
}));

function Author({ authors }: { authors: { name: string; avatar: string }[] }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        gap: 2,
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Box
        sx={{ display: 'flex', flexDirection: 'row', gap: 1, alignItems: 'center' }}
      >
        <AvatarGroup max={3}>
          {authors.map((author, index) => (
            <Avatar
              key={index}
              alt={author.name}
              src={author.avatar}
              sx={{ width: 24, height: 24 }}
            />
          ))}
        </AvatarGroup>
        <Typography variant="caption">
          {authors.map((author) => author.name).join(', ')}
        </Typography>
      </Box>
    </Box>
  );
}

export default function Latest() {
  const [focusedCardIndex, setFocusedCardIndex] = React.useState<number | null>(
    null,
  );

  const handleFocus = (index: number) => {
    setFocusedCardIndex(index);
  };

  const handleBlur = () => {
    setFocusedCardIndex(null);
  };

  return (
    <div>
      <Typography variant="h2" gutterBottom>
        Frases Célebres
      </Typography>
      <Grid container spacing={8} columns={12} sx={{ my: 4 }}>
        {articleInfo.map((article, index) => (
          <Grid key={index} size={{ xs: 12, sm: 6 }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: 1,
                height: '100%',
              }}
            >
              <Typography gutterBottom variant="caption" component="div">
                {article.tag}
              </Typography>
              <TitleTypography
                gutterBottom
                variant="h6"
                onFocus={() => handleFocus(index)}
                onBlur={handleBlur}
                tabIndex={0}
                className={focusedCardIndex === index ? 'Mui-focused' : ''}
              >
                {article.title}
                <NavigateNextRoundedIcon
                  className="arrow"
                  sx={{ fontSize: '1rem' }}
                />
              </TitleTypography>
              <StyledTypography variant="body2" color="text.secondary" gutterBottom>
                {article.description}
              </StyledTypography>

              <Author authors={article.authors} />
            </Box>
          </Grid>
        ))}
      </Grid>
      {/* <Box sx={{ display: 'flex', flexDirection: 'row', pt: 4 }}>
        <Pagination hidePrevButton hideNextButton count={10} boundaryCount={10} />
      </Box> */}
    </div>
  );
}
