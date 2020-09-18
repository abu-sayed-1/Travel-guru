import React from 'react';
import './Home.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import fakeData from '../data.json'
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});


const Home = () => {
  // console.log(fakeData[0].title)
  // const numberId = fakeData.map(fake =>fake.id);
  const all = fakeData[1].id;
  console.log(all);

 const history = useHistory()
  const handleBtn = (numId) => {
     history.push(`/detail/${numId}`)    

  };
    
    const classes = useStyles();
    return (
    <section>
    
        <div className="overlay">
        {/* {
       numberId.find( dd =><p>nam:{dd}</p> ) 
      } */}
        <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={() => handleBtn(all)}  size="small" color="primary">  
          Learn More
        </Button>
        <Button onClick={() => handleBtn(all)}  size="small" color="primary">  
          Learn More
        </Button>
        <Button onClick={() => handleBtn(all)}  size="small" color="primary">  
          Learn More
        </Button>
      </CardActions>
    </Card>
 
        </div>

        </section>
    
    );
};

export default Home;