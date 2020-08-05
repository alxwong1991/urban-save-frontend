import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";

export default function ShoppingCart() {
  const useStyles = makeStyles({

    title: {
      fontSize: 50,
      marginBottom:"-18px",
      left:"42%"
    },
    pos: {
      marginBottom: 12
    },
    Line: {
      width: "100%",
      color:"transparent"
    }
    ,
    basket: {
      fontSize:"210%",
      position:"relative",
     
    }
  });
  const classes = useStyles();

  return (
    <Grid container direction="row" spacing={0}>
      <Typography className={classes.title} gutterBottom>
        Shopping Cart
      </Typography>
      <hr className={classes.Line}/>

      <Grid container direction="row" spacing={0}>
        <Link className={classes.button} to="/">
          <Button>
            <ArrowLeftIcon />
            Back to Shopping
          </Button>
        </Link>
      </Grid>
      <hr className={classes.Line}/>
    </Grid>
  );
}