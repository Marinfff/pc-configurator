import React from 'react';
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import List from '@material-ui/core/List'
import TextField from '@material-ui/core/TextField'
import CancelIcon from '@material-ui/icons/Cancel';
import Button from '@material-ui/core/Button'

class Cart extends React.Component {
    render() {
        return (
            <div className="store-card">
                Cart
                <List dense>
                {[0, 1, 2].map((value) => {
                    const labelId = `checkbox-list-secondary-label-${value}`;
                    return (
                      <ListItem key={value} button>
                          <ListItemAvatar>
                              <Avatar
                                alt={`Avatar n°${value + 1}`}
                                src={require(`../assets/ram/${value + 1}.png`)}
                              />
                          </ListItemAvatar>
                          <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
                          <ListItemSecondaryAction>
                              <div> <TextField id="standard-basic" placeholder="1" type="number"  className="count"/> x 500 $
                                <CancelIcon/>
                              </div>
                          </ListItemSecondaryAction>
                      </ListItem>
                    );
                })}
            </List>
              <div className="divider"/>
              <div className="">
                <span className="text-total-price"> Total: 1001 $</span>
                <Button variant="contained" color="secondary">
                  Checkout
                </Button>
              </div>
            </div>
        );
    }
}

export default Cart;
