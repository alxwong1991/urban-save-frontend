import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { shoppingCart } from '../stores/actions/shoppingCartActions'
import { connect } from 'react-redux'


const useStyles = (theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
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
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
});


class About extends Component {

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.heroContent}>
        <Container maxWidth="sm">
          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            About Us
            </Typography>
          <Typography variant="h5" align="center" color="textSecondary" paragraph>
            Moving to a smaller office or planning to close your company? 
            We at Urban Save will save you all the hassles in selling your office furnitures and equipments.
            Please feel free to browse our pages and don't forget to become a fan of us on social medias!
            </Typography>

        </Container>
      </div>
    )
  }
}

export default withStyles(useStyles)(About)