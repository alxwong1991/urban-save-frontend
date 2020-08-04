import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { getProductTables } from '../../stores/actions/getProductsAction';
import { connect } from 'react-redux'

const useStyles = (theme) => ({

  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
});

class Tables extends Component {
  // constructor(props) {
  //   super(props)
  // }

  componentDidMount() {
    this.props.getProductTableDispacther();
  }

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <CssBaseline />
        <main>
          {/* Hero unit */}
          <div className={classes.heroContent}>
            <Container maxWidth="sm">
              <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                Office Tables
            </Typography>
            </Container>
          </div>
          <Container className={classes.cardGrid} maxWidth="md">
            {/* End hero unit */}
            <Grid container spacing={10}>
              {this.props.item.length > 0 ? this.props.item.map((card) => (
                <Grid item key={card} xs={12} sm={6}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image={card.product_image}
                      title={card.product_name}
                    />
                    <CardContent className={classes.cardContent}>
                    </CardContent>
                    <Typography gutterBottom variant="h5" component="h2" align="center">
                      {card.product_name}
                    </Typography>
                    <Typography align="center">
                      {card.product_description}
                    </Typography>
                    <CardActions>
                      <Button size="small" color="primary">
                        View
                    </Button>
                      <Button size="small" color="primary">
                        Add to cart
                    </Button>
                    <Typography color="primary">
                      Price: ${card.product_price},
                      Stock Left: {card.max_stock_available}
                    </Typography>
                    </CardActions>
                  </Card>
                </Grid>
              )) : ''}
            </Grid>
          </Container>
        </main>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    item: state.tableData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getProductTableDispacther: () => {
      dispatch(getProductTables())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(useStyles)(Tables))