import React from 'react'
import Products from "./views/Products"
import AppBar from "@material-ui/core/AppBar"
import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import Toolbar from "@material-ui/core/Toolbar"
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import ComputerIcon from '@material-ui/icons/Computer'
import Grid from "@material-ui/core/Grid"
import Orders from "./views/Orders"
import Menu from "@material-ui/core/Menu"
import Cart from "./components/Cart"

class App extends React.Component {
  state = {
    showProducts: false,
    anchorEl: ''
  }
  
  handleClick = (event) => {
    this.setState({
      anchorEl: event.currentTarget
    })
  }
  
  handleClose = () => {
    this.setState({
      anchorEl: null
    })
  }
  
  toggle = () => {
    this.setState({
      showProducts: !this.state.showProducts
    })
  }
  
  render () {
    return (
      <div className="App">
        <AppBar position="static">
          <Toolbar className="container">
            <IconButton edge="start" color="inherit" aria-label="menu">
              <ComputerIcon/>
            </IconButton>
            
            <span><b>Configurator</b> PC</span>
            
            <div className="action-buttons">
              <Button onClick={this.toggle} color="inherit">Products</Button>
              <Button onClick={this.toggle} color="inherit">Orders</Button>
  
              <IconButton id="card-button" edge="start" color="inherit" onClick={this.handleClick}>
                <ShoppingCartIcon/>
              </IconButton>
            </div>
            <Menu
              id="simple-menu"
              anchorEl={this.state.anchorEl}
              keepMounted
              open={Boolean(this.state.anchorEl)}
              onClose={this.handleClose}
            >
              <Cart/>
            </Menu>
          </Toolbar>
        </AppBar>
        <div className="container">
          {
            this.state.showProducts ? <Products/> : <Orders/>
          }
        </div>
      </div>
    )
  }
}

export default App
