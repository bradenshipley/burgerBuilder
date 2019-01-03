import React, { Component } from "react"
import Aux from "../../hoc/Aux"
import SideDrawer from "../Navigation/Sidedrawer/Sidedrawer"
import "./Layout.css"
import Toolbar from "../Navigation/Toolbar/Toolbar"

class Layout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showSideDrawer: false
    }
  }
  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false })
  }
  sideDrawerToggleHandler = () => {
    this.setState(prevState => {
      return { showSideDrawer: !this.state.showSideDrawer }
    })
  }

  render() {
    return (
      <Aux>
        <div>
          <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
          <SideDrawer
            open={this.state.showSideDrawer}
            closed={this.sideDrawerClosedHandler}
          />
          Backdrop
        </div>
        <main className='Content'> {this.props.children}</main>
      </Aux>
    )
  }
}
export default Layout
