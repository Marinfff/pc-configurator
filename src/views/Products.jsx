import React from 'react';
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItem from '@material-ui/core/ListItem'
import List from '@material-ui/core/List'
import DragHandleIcon from '@material-ui/icons/DragHandle';
import MemoryIcon from '@material-ui/icons/Memory';
import DashboardIcon from '@material-ui/icons/Dashboard';
import VideocamIcon from '@material-ui/icons/Videocam';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MouseIcon from '@material-ui/icons/Mouse';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';
import ListSubheader from '@material-ui/core/ListSubheader'
import CardActions from '@material-ui/core/CardActions'
import Typography from '@material-ui/core/Typography'
import CardContent from '@material-ui/core/CardContent'
import Card from '@material-ui/core/Card'
import {connect} from "react-redux";
import IconButton from "@material-ui/core/IconButton";

class Products extends React.Component {
  constructor() {
    super();
    this.state = {
      items: {},
      selectedComponent: "motherboards"
    }
  }

  componentDidMount() {
    this.loadData()
  }

  filteredItems = () => {
    const items = Object.assign({}, this.state.items)
    const processorIndex = this.props.cart.findIndex(item => item.type === 'processors')
    const motherboardIndex = this.props.cart.findIndex(item => item.type === 'motherboards')
    const ramIndex = this.props.cart.findIndex(item => item.type === 'ram')

    if (processorIndex !== -1) {
      const processor = this.props.cart[processorIndex].product

      items.motherboards = items.motherboards.filter(item => item.socket === processor.socket)
    }

    if (motherboardIndex !== -1) {
      const motherboard = this.props.cart[motherboardIndex].product

      items.processors = items.processors.filter(item => item.socket === motherboard.socket)
      items.ram = items.ram.filter(item => item.memoryType === motherboard.memoryType)
    }

    if (ramIndex !== -1) {
      const ram = this.props.cart[ramIndex].product

      items.motherboards = items.motherboards.filter(item => item.memoryType === ram.memoryType)
    }

    return items
  }

  loadData = async () => {
    this.setState({
      items: (await import("../server/components.json")).default
    })
  }

  changeList = (selectedComponent) => {
    this.setState({
      selectedComponent
    })
  }

  addToCart = (product) => {
    this.props.addToCart({
      product,
      type: this.state.selectedComponent
    })
  }

  render() {
    return (
      <div className="grid">
        <div>
          <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader component="div" id="nested-list-subheader">
                Components
              </ListSubheader>
            }>
            <ListItem onClick={() => this.changeList("motherboards")} button>
              <ListItemIcon>
                <DashboardIcon/>
              </ListItemIcon>
              <ListItemText primary="Motherboards"/>
            </ListItem>
            <ListItem onClick={() => this.changeList("processors")} button>
              <ListItemIcon>
                <MemoryIcon/>
              </ListItemIcon>
              <ListItemText primary="Processors"/>
            </ListItem>
            <ListItem onClick={() => this.changeList("ram")} button>
              <ListItemIcon>
                <DragHandleIcon/>
              </ListItemIcon>
              <ListItemText primary="Ram"/>
            </ListItem>
            <ListItem onClick={() => this.changeList("rom")} button>
              <ListItemIcon>
                <DonutLargeIcon/>
              </ListItemIcon>
              <ListItemText primary="Rom"/>
            </ListItem>
            <ListItem onClick={() => this.changeList("videocards")} button>
              <ListItemIcon>
                <VideocamIcon/>
              </ListItemIcon>
              <ListItemText primary="Videocards"/>
            </ListItem>
            <ListItem onClick={() => this.changeList("monitors")} button>
              <ListItemIcon>
                <DesktopWindowsIcon/>
              </ListItemIcon>
              <ListItemText primary="Monitors"/>
            </ListItem>
            <ListItem onClick={() => this.changeList("mouses")} button>
              <ListItemIcon>
                <MouseIcon/>
              </ListItemIcon>
              <ListItemText primary="Mouses"/>
            </ListItem>
            <ListItem onClick={() => this.changeList("keyboards")} button>
              <ListItemIcon>
                <KeyboardIcon/>
              </ListItemIcon>
              <ListItemText primary="Keyboards"/>
            </ListItem>
          </List>
        </div>
        <div className="second-grid">
          {this.filteredItems()[this.state.selectedComponent]?.map((item, key) =>
            <Card key={key}>
              <CardContent>
                <img src={require("../" + item.image)} className="image-product"/>
                <Typography variant="h5" component="h2">
                  {item.name}
                </Typography>
                <Typography color="textSecondary">
                  {item.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Typography color="textSecondary">
                  {item.price} $
                </Typography>

                <IconButton onClick={() => this.addToCart(item)} edge="start" color="inherit">
                  <ShoppingCartIcon className="icon-add-cart"/>
                </IconButton>
              </CardActions>
            </Card>
          )}
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    cart: state.cart
  }),
  dispatch => ({
    addToCart: (product) => {
      dispatch({type: "ADD_PRODUCT", payload: product})
    }
  })
)(Products);
;
