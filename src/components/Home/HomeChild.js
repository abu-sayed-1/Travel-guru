import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';
// import  imagesBad  from '../images/travel-guru-master/Image/Rectangle 27.png'


const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });

const HomeChild = (props) => {
    const {img,title,id} = props.allData;
    const classes = useStyles();

    const history = useHistory()

    const handleBooking = (numId) => {
         history.push(`/detail/${numId}`)    
    
      };

    

    return (
        <div>
          <button onClick={() => handleBooking(id)}>Learn</button>
         {/* <img src={`../images/travel-guru-master/Image/${imgs}.png`} alt=""/>
           <p style={{color:'red'}}>{allNum}</p>
           <p style={{color:'red'}}>{imgs}</p>

           <p>rakib</p> */}
           
            {/* <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
        
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card> */}
        </div>
    );
};

export default HomeChild;