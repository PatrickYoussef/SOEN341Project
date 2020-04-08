import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CameraIcon from "@material-ui/icons/PhotoCamera";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CommentIcon from "@material-ui/icons/Comment";
import { NavMenu } from "./Navbar/NavMenu";


function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      StockHut {new Date().getFullYear()}
          {"."}

        </Typography>

  );
}
 
const useStyles = makeStyles((theme) => ({


  icon: {
      marginRight: theme.spacing(2),
      width: '100%',
    },
  heroContent: {
      backgroundColor: '#98ce7d',
      
    
  },
  heroButtons: {
      marginTop: theme.spacing(4),
      align: 'right',
      flexGrow: 1,
  },
    cardGrid: {
        backgroundColor: '#98ce7d',
    paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
        
        
  },
    card: {
        
    
    display: "flex",
    flexDirection: "column",
  },
    cardMedia: {
     height: "100%",  
    paddingTop: "56.25%", // 16:9
    //David: Change it to 100% to view
  },
  cardContent: {
      flexGrow: 1,
      
  },
    footer: {
       
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
    },
    listText: {
        fontfamily: [
            'Gill Sans',
            'Gill Sans MT',
            'Calibri',
            'Trebuchet MS',
            'sans - serif'
        ].join(','),
    },
}));

export default function Profile(props) {
  const classes = useStyles();

  const [cards, setCards] = useState([]);
  const [input, setInput] = useState("");
  const [caption, setCaption] = useState([]);
  const [count, setCount] = useState(0);

  const fileSelectedHandler = (event) => {
    setCards([URL.createObjectURL(event.target.files[0]), ...cards]);
  };

  const inputHandler = (event) => {
    setInput(event.target.value);
  };

  const addCaption = () => {
    setCaption(caption.concat(input));
  };

  return (
  
        <div >
      <NavMenu />

          <main>
        {/* Hero unit */}
              <div className={classes.heroContent} >
                  
                  <Container>
                      <div width="50%" display="flex">
           <img src="https://cloudcone.com/wp-content/uploads/2019/03/blank-avatar.jpg" width="20%" height="30%"  />

          <Typography
          font= "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif" 
          component="h1"
          variant="h4"
          align="left"
          color="textPrimary"
          gutterBottom
        >
          Adam21
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Name
            </Typography>
            <Typography
              variant="h5"
              align="left"
              color="textSecondary"
                          paragraph
                          display="flex"
            >
              Description
            </Typography></ div>
             <div className={classes.heroButtons} flexGrow="1" >

              <Grid container spacing={1} justify="center">
                <Grid item>
                  Post a Picture &ensp;                
                 <input
                    type="file"
                    name="file"
                    placeholder="Upload Image"
                    onChange={fileSelectedHandler}
                  />
                  <br />
                  <br />
                  Caption: &ensp;                
                  <input
                    type="text"
                    id="caption"
                    name="caption"
                    onChange={inputHandler}
                  />{" "}
                  &ensp;
                
                  <button onClick={addCaption}
                    style={{ font: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif ",
                    text: 'uppercase',
                    background: 'rgb(88, 165, 90)',
                    width: '30%',    
                    lineHeight: '20%',
                        display: 'inline - block',
                        padding: '4%',
                        border: 'none',
                    color: 'white',
                    fontsize: '100%',
                    cursor: 'pointer'}}>

                   Submit </button>

               </Grid>
              </Grid>
            
            </div>
        </Container>
        </div>

        <Container className={classes.cardGrid} maxWidth="md" >
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={card}
                    title="Image"
                        />
                        <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h10" component="h4">
                      UserName
                    </Typography>
                    <Typography>
                      Caption. You can use this section to describe the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      <FavoriteIcon onClick={() => setCount(count + 1)} />{" "}
                      {count}

                    </Button>
                        <Button size="small" color="primary">
                      <CommentIcon />
                    </Button>

                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>


          <Copyright />
          
       </div>
  );
}

//Image Upload Useful Notes:
//https://stackoverflow.com/questions/43992427/how-to-display-a-image-selected-from-input-type-file-in-reactjs
//https://reactjs.org/docs/hooks-state.html
//https://www.youtube.com/watch?time_continue=1&v=XeiOnkEI7XI&feature=emb_title
//Display image from <input type = "file"/> : https://stackoverflow.com/questions/43992427/how-to-display-a-image-selected-from-input-type-file-in-reactjs
//Add value to an array: https://stackoverflow.com/questions/26505064/what-is-the-best-way-to-add-a-value-to-an-array-in-state
//useState with array: https://www.youtube.com/watch?v=RZ5wKYbOM_I
