import React, { Component } from "react";
import Container from '@material-ui/core/Container';
import ShoppingCartHeader from "../../components/ShoppingCart/ShoppingCartHeader";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableHead from '@material-ui/core/TableHead';

class ShoppingCart extends Component {
  render() {
    return (
      <div className="shopping-cart">
        <Container>
          <ShoppingCartHeader />
          <TableHead>
          <TableRow>
            <TableCell align="center">Product</TableCell>
            <TableCell align="center">Item</TableCell>
            <TableCell align="center">Item</TableCell>
            <TableCell align="center">Quantity</TableCell>
            <TableCell align="center">Unit Price($)</TableCell>
            <TableCell align="center"></TableCell>
          </TableRow>
          </TableHead>
        </Container>
      </div>
    )
  }
};
export default ShoppingCart;
