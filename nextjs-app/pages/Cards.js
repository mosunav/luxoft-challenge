import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

const Cards = () => {
  const arrayData = [
    {
      id: 1,
      img:
        'https://media.glampinghub.com/CACHE/images/accommodations/vintage-vw-campervan-rentals-surrey-uk-1498818115677/8f36645baed7fb6ed800e6e09fc4a335.jpg',
      location: 'Camper Van - Costa Mesa, Ca',
      description: 'Volkswagen Big Beautiful Day Windows: Westfalia',
      details: '$185 ***** (12)',
    },
    {
      id: 2,
      img:
        'https://media.glampinghub.com/CACHE/images/accommodations/vintage-vw-campervan-rentals-surrey-uk-1498818115677/8f36645baed7fb6ed800e6e09fc4a335.jpg',
      location: 'Camper Van - Costa Mesa, Ca',
      description: '1984 WestFalia Volkswagen',
      details: '$182 ***** (12)',
    },
    {
      id: 3,
      img:
        'https://media.glampinghub.com/CACHE/images/accommodations/vintage-vw-campervan-rentals-surrey-uk-1498818115677/8f36645baed7fb6ed800e6e09fc4a335.jpg',
      location: 'Camper Van - Costa Mesa, Ca',
      description: 'Jepp Camper Window',
      details: '$190 ***** (12)',
    },
    {
      id: 4,
      img:
        'https://media.glampinghub.com/CACHE/images/accommodations/vintage-vw-campervan-rentals-surrey-uk-1498818115677/8f36645baed7fb6ed800e6e09fc4a335.jpg',
      location: 'Camper Van - Costa Mesa, Ca',
      description: 'Window Camper Volkswagen',
      details: '$180 ***** (12)',
    },
  ];

  const useStyles = makeStyles({
    root: {
      maxWidth: '30rem',
      maxHeight: '15rem',
      margin: '1.5rem 3rem',
    },
    info: {
      display: 'flex',
      flexDirection: 'column',
      padding: '1.5rem 1rem',
      maxWidth: '12rem',
      maxHeight: '10rem',
      textAlign: 'initial',
    },
    location: {
      color: 'gray',
      fontWeight: 600,
      fontSize: '.5rem',
      textTransform: 'uppercase',
    },
    description: {
      color: 'black',
      fontWeight: 600,
      fontSize: '.6rem',
      maxWidth: '10rem',
      marginBottom: '2rem',
    },
    image: {
      maxWidth: '12rem',
      maxHeight: '15rem',
    },
    box: {
      margin: '2rem 1rem 2rem 3rem;',
      maxHeight: '15rem',
      maxWidth: '22rem',
    },
  });

  const renderCard = card => {
    const classes = useStyles();
    console.log(card);
    return (
      <div key={card.id}>
        <ButtonBase>
          <Card className={classes.box}>
            <CardMedia className={classes.image} component="img" height="140" image={card.img} />
            <CardContent className={classes.info}>
              <Typography className={classes.location} gutterBottom component="h3">
                {card.location}
              </Typography>
              <Typography className={classes.description} component="p">
                {card.description}
              </Typography>
              <Typography className={classes.description} component="p">
                {card.details}
              </Typography>
            </CardContent>
          </Card>
        </ButtonBase>
      </div>
    );
  };
  return <div className="grid">{arrayData.map(renderCard)}</div>;
};

export default Cards;
