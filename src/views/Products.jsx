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
import Button from '@material-ui/core/Button'
import CardActions from '@material-ui/core/CardActions'
import Typography from '@material-ui/core/Typography'
import CardContent from '@material-ui/core/CardContent'
import Card from '@material-ui/core/Card'

class Products extends React.Component {
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
                <ListItem button>
                  <ListItemIcon>
                    <DashboardIcon />
                  </ListItemIcon>
                  <ListItemText primary="Motherboards" />
                </ListItem>
                <ListItem button>
                  <ListItemIcon>
                    <MemoryIcon />
                  </ListItemIcon>
                  <ListItemText primary="Processors" />
                </ListItem>
                <ListItem button>
                  <ListItemIcon>
                    <DragHandleIcon />
                  </ListItemIcon>
                  <ListItemText primary="Ram" />
                </ListItem>
                <ListItem button>
                  <ListItemIcon>
                    <DonutLargeIcon />
                  </ListItemIcon>
                  <ListItemText primary="Rom" />
                </ListItem>
                <ListItem button>
                  <ListItemIcon>
                    <VideocamIcon />
                  </ListItemIcon>
                  <ListItemText primary="Videocards" />
                </ListItem>
                <ListItem button>
                  <ListItemIcon>
                    <DesktopWindowsIcon />
                  </ListItemIcon>
                  <ListItemText primary="Monitors" />
                </ListItem>
                <ListItem button>
                  <ListItemIcon>
                    <MouseIcon />
                  </ListItemIcon>
                  <ListItemText primary="Mouses" />
                </ListItem>
                <ListItem button>
                  <ListItemIcon>
                    <KeyboardIcon />
                  </ListItemIcon>
                  <ListItemText primary="Keyboards" />
                </ListItem>
              </List>
            </div>
            <div className="second-grid">
              {[... new Array(10)].map(() =>
                <Card>
                  <CardContent>
                    <img src={require(`../assets/ram/1.png`)} className="image-product" />
                    <Typography variant="h5" component="h2">
                      HDD 320GB Western Digital WD3200AANM Caviar® Red™
                    </Typography>
                    <Typography color="textSecondary">
                      FAVPNG.com Cat Play And Toys Amazon.com Mouse, PNG, 512x512px, Cat, Amazon
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Typography color="textSecondary">
                      500 $
                    </Typography>
                    <ShoppingCartIcon className="icon-add-cart"/>
                  </CardActions>
                </Card>
              )}
            </div>
          </div>
        );
    }
}

export default Products;
