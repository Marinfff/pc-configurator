import React, {ReactHTML as classes, ReactHTML as rows} from 'react'
import TableContainer from '@material-ui/core/TableContainer'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import TableBody from '@material-ui/core/TableBody'
import {Paper} from '@material-ui/core'
import {StyleSheet as checked} from 'jss'
import Checkbox from '@material-ui/core/Checkbox'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItem from '@material-ui/core/ListItem'
import List from '@material-ui/core/List'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

class Orders extends React.Component {
  render () {
    return (
      <div>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow className="custom-table">
                <TableCell>Name</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Contacts</TableCell>
                <TableCell>Comment</TableCell>
                <TableCell>Products</TableCell>
                <TableCell>Promo code</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Total Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow className="custom-table">
                <TableCell component="th" scope="row"> Aici </TableCell>
                <TableCell>row.calories</TableCell>
                <TableCell>row.fat</TableCell>
                <TableCell>row.carbs</TableCell>
                <TableCell>
                  <List dense>
                    {[0, 1, 2].map((value) => {
                      const labelId = `checkbox-list-secondary-label-${value}`
                      return (
                        <ListItem key={value} button>
                          <ListItemAvatar>
                            <Avatar
                              alt={`Avatar n°${value + 1}`}
                              src={require(`../assets/ram/${value + 1}.png`)}
                            />
                          </ListItemAvatar>
                          <ListItemText id={labelId} primary={`Line item ${value + 1}`}/>
                          <ListItemSecondaryAction>
                            <div> 1 x 500 $</div>
                          </ListItemSecondaryAction>
                        </ListItem>
                      )
                    })}
                  </List>
                </TableCell>
                <TableCell>row.protein</TableCell>
                <TableCell>row.protein</TableCell>
                <TableCell>row.protein</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <div className="modal">
          <div className="client-info">
            <TextField id="standard-basic" label="First Name*"/>
            <TextField id="standard-basic" label="Last Name*"/>
            <TextField id="standard-basic" label="Phone*"/>
            <TextField id="standard-basic" label="Email*"/>
          </div>
          <div className="padding">
            <TextField label="Promotional code*"  className="padding-child" />
          </div>
          <div className="to-pay">
            <Typography> Total: 1000 $</Typography>
            <Typography> Promotion: 0 $</Typography>
            <Typography>To Pay: 1000 $</Typography>
          </div>
          <div className="to-pay">
            <Button color="secondary">Close</Button>
            <Button color="secondary">Checkout</Button>
          </div>
        </div>
      </div>
    )
  }
}

export default Orders
