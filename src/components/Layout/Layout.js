import React from 'react';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import Toolbar from '../Navigation/Toolbar/Toolbar'
import classes from './Layout.module.css';

class Layout extends React.Component {
  state = {
    showSideDrawer: false
  }
  
  sideDrawerClosedHadler = () => {
    this.setState({
      showSideDrawer: false
    });
  };

  sideDrawerOpenHandler = () => {
    this.setState({
      showSideDrawer: true
    });
    console.log('clicked');
  };
  
  render() {
    return (
      <>
        <Toolbar opened={this.sideDrawerOpenHandler} />
        <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHadler} />

        <main className={classes.Content}>
          { this.props.children }
        </main>
      </>
    )
  }
}


export default Layout;