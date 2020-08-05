import React, { Component } from "react";
import Container from '@material-ui/core/Container';
import ShoppingCartHeader from "../../components/ShoppingCart/ShoppingCartHeader";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableHead from '@material-ui/core/TableHead';
import { connect } from "react-redux";

class ShoppingCart extends Component {
  constructor(props) {
    super(props)
  }


  render() {
    // cosnt { classes } = this.props;

    return (
      <div className="shopping-cart" align="center">
        <Container>
          <ShoppingCartHeader />
          <TableHead>
            <TableRow >
              <TableCell>Product</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Unit Price($)</TableCell>
            </TableRow>
          </TableHead>
        </Container>
      </div>
    )
  }
};
export default ShoppingCart;
