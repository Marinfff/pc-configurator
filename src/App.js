import React from 'react'
import Products from "./views/Products"
import AppBar from "@material-ui/core/AppBar"
import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import Toolbar from "@material-ui/core/Toolbar"
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import ComputerIcon from '@material-ui/icons/Computer'
import Orders from "./views/Orders"
import Menu from "@material-ui/core/Menu"
import Cart from "./components/Cart"
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";

class App extends React.Component {
  state = {
    showProducts: false,
    anchorEl: null
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

  render () {
    return (
      <Router className="App">
        <AppBar position="static">
          <Toolbar className="container">
            <IconButton edge="start" color="inherit" aria-label="menu">
              <ComputerIcon/>
            </IconButton>

            <span><b>Configurator</b> PC</span>

            <div className="action-buttons">
              <Button color="inherit">
                <Link to="/">Products</Link>
              </Button>
              <Button color="inherit">
                <Link to="/orders">Orders</Link>
              </Button>

              <IconButton aria-controls="simple-menu" id="card-button" edge="start" color="inherit"
                          onClick={this.handleClick}>
                <ShoppingCartIcon/>
              </IconButton>
            </div>
            {this.state.anchorEl ?
              <Menu
                id="simple-menu"
                anchorEl={this.state.anchorEl}
                keepMounted
                open={Boolean(this.state.anchorEl)}
                onClose={this.handleClose}
              >
                <Cart/>
              </Menu> : ""
            }
          </Toolbar>
        </AppBar>
        <div className="container">

          <Switch>
            <Route exact path="/">
              <Products/>
            </Route>
            <Route path="/orders">
              <Orders/>
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
