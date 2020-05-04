import React from 'react'
import TableContainer from '@material-ui/core/TableContainer'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import TableBody from '@material-ui/core/TableBody'
import {Paper} from '@material-ui/core'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItem from '@material-ui/core/ListItem'
import List from '@material-ui/core/List'

class Orders extends React.Component {
  getOrders = () => {
    return JSON.parse(localStorage.getItem('orders')) || []
  }

  render() {
    return (
      <>
        {
          this.getOrders().length
            ? <div>
              <TableContainer component={Paper}>
                <Table aria-label="simple table">
                  <TableHead>
                    <TableRow className="custom-table">
                      <TableCell>Name</TableCell>
                      <TableCell>Date</TableCell>
                      <TableCell>Contacts</TableCell>
                      <TableCell>Products</TableCell>
                      <TableCell>Promo code</TableCell>
                      <TableCell>Price</TableCell>
                      <TableCell>Total Price</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {
                      this.getOrders().map((item, index) =>
                        <TableRow key={index} className="custom-table">
                          <TableCell component="th" scope="row">{item.user.first_name} {item.user.second_name}</TableCell>
                          <TableCell>{item.date}</TableCell>
                          <TableCell>
                            <div>{item.user.phone}</div>
                            <div>{item.user.email}</div>
                          </TableCell>
                          <TableCell>
                            <List dense>
                              {item.items.map((product, key) => {
                                const labelId = `checkbox-list-secondary-label-${key}`
                                return (
                                  <ListItem key={key} button>
                                    <ListItemAvatar>
                                      <Avatar
                                        src={require("../" + product.product.image)}
                                      />
                                    </ListItemAvatar>
                                    <ListItemText id={labelId} primary={product.product.name}/>
                                    <ListItemSecondaryAction>
                                      <div> {product.quantity} x {product.product.price} $</div>
                                    </ListItemSecondaryAction>
                                  </ListItem>
                                )
                              })}
                            </List>
                          </TableCell>
                          <TableCell>{item.user.promo}</TableCell>
                          <TableCell>{item.price} $</TableCell>
                          <TableCell>{item.total} $</TableCell>
                        </TableRow>
                      )
                    }
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
            : <div>Orders is empty!</div>
        }
      </>
    )
  }
}

export default Orders
