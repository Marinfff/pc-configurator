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
import {connect} from "react-redux"
import IconButton from "@material-ui/core/IconButton";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Typography from "@material-ui/core/Typography";

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false,
      first_name: "",
      second_name: "",
      email: "",
      phone: "",
      promo: ""
    }
    this.form = React.createRef()
  }

  totalPrice = () => {
    return this.props.cart.reduce((sum, item) => (item.quantity * item.product.price) + sum, 0) // tot ce este cu this.props este legat cu store
  }

  modifyProduct = (index, e) => {
    this.props.modifyProductQuantity({index, itemQuantity: e.target.value})
  }

  handleClickOpen = () => {
    this.setState({
      open: true
    })
  };

  getPromo = () => {
    if (this.state.promo === "1111") {
      return 500
    }
    return 0
  };

  handleClose = (e) => {
    e.preventDefault()

    if (this.form.current.reportValidity()) {
      const orders = JSON.parse(localStorage.getItem('orders')) || [] // scoate continutul din local storage , daca nui nimic pune masiv gol

      const order = {
        items: this.props.cart,//continutul la cart din store
        price: this.totalPrice(),
        total: this.totalPrice() - this.getPromo(),
        user: {
          first_name: this.state.first_name,
          second_name: this.state.second_name,
          email: this.state.email,
          phone: this.state.phone,
          promo: this.state.promo
        },
        date: new Date().toISOString().split('T')[0] // primim data
      }
      orders.push(order)
      localStorage.setItem('orders', JSON.stringify(orders)) //face push in masiv apoi in local storage
      document.location.reload() //update la pagina dupa checkout
    }
  };

  render() {
    return (
      <>
        {this.props.cart.length // validare daca cosul este gol atunci se executa codul   tot if se face prin operator ternar
          ? <div className="store-card">
            <List dense>
              {this.props.cart.map((item, index) => {  // map = ciclu
                const labelId = `checkbox-list-secondary-label-${index}`;
                return (
                  <ListItem key={index} button>
                    <ListItemAvatar>
                      <Avatar
                        alt=""
                        src={require("../" + item.product.image)}
                      />
                    </ListItemAvatar>
                    <ListItemText id={labelId} primary={item.product.name}/>
                    <ListItemSecondaryAction>
                      <div>
                        <TextField id="standard-basic"
                                   onChange={(e) => this.modifyProduct(index, e)} //== modifyProduct(index, $event)
                                   value={item.quantity} placeholder="1" type="number"
                                   className="count"/> x {item.product.price} $

                        <IconButton onClick={() => this.props.deleteProduct(index)} edge="start"
                                    color="inherit">
                          <CancelIcon/>
                        </IconButton>
                      </div>
                    </ListItemSecondaryAction>
                  </ListItem>
                );
              })}
            </List>
            <div className="divider"/>
            <div className="">
              <span className="text-total-price"> Total: {this.totalPrice()} $</span>
              <Button variant="contained" color="secondary" onClick={this.handleClickOpen}>
                Checkout
              </Button>
              <Dialog
                open={this.state.open}
                onClose={this.handleClose}
                aria-labelledby="form-dialog-title"
              >
                <form ref={this.form}>
                  <DialogTitle id="form-dialog-title">Checkout</DialogTitle>
                  <DialogContent>
                    <div className="client-info">
                      <TextField
                        required={true}
                        id="standard-basic"
                        onChange={(e) => this.setState({
                          first_name: e.target.value
                        })}
                        label="First Name*"
                      />
                      <TextField
                        required={true}
                        id="standard-basic"
                        onChange={(e) => this.setState({
                          second_name: e.target.value
                        })}
                        label="Last Name*"
                      />
                      <TextField
                        type="number"
                        required={true}
                        id="standard-basic"
                        onChange={(e) => this.setState({
                          phone: e.target.value
                        })}
                        label="Phone*"
                      />
                      <TextField
                        type="email"
                        required={true}
                        id="standard-basic"
                        onChange={(e) => this.setState({
                          email: e.target.value
                        })}
                        label="Email*"
                      />
                    </div>
                    <div className="padding">
                      <TextField
                        label="Promotional code*"
                        onChange={(e) => this.setState({
                          promo: e.target.value
                        })}
                        className="padding-child"
                      />
                    </div>
                    <div className="to-pay">
                      <Typography> Total: {this.totalPrice()} $</Typography>
                      <Typography> Promotion: {this.getPromo()} $</Typography>
                      <Typography>To Pay: {this.totalPrice() - this.getPromo()} $</Typography>
                    </div>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={this.handleClose} color="primary">
                      Close
                    </Button>
                    <Button type="submit" onClick={this.handleClose} color="primary">
                      Checkout
                    </Button>
                  </DialogActions>
                </form>
              </Dialog>
            </div>
          </div>
          : <div>Card is empty!</div>
        }
      </>
    );
  }
}
//legatura componentului cu store
export default connect(
  state => ({
    cart: state.cart //primirea datelor  this.props cart => state.card
  }),
  dispatch => ({
    deleteProduct: (payload) => {
      dispatch({type: "DELETE_PRODUCT", payload})
    },
    modifyProductQuantity: (payload) => {
      dispatch({type: "MODIFY_PRODUCT", payload})
    }
  })
)(Cart);
// dispatch cheama din store meetoda
//payload datele care se transmit
