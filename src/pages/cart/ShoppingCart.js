import React, { Component } from "react";
import Container from '@material-ui/core/Container';
import ShoppingCartHeader from "../../components/ShoppingCart/ShoppingCartHeader";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableHead from '@material-ui/core/TableHead';

class ShoppingCart extends Component {
  render() {
    return (
      <div className="shopping-cart" align="center">
        <Container>
          <ShoppingCartHeader />
          <TableHead align="right">
          <TableRow >
            <TableCell>Product</TableCell>
            <TableCell>Item</TableCell>
            <TableCell>Item</TableCell>
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
