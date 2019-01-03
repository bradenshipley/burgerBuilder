import React from "react"
import Logo from "../../Logo/Logo"
import NavigationItems from "../NavigationItems/NavigationItems"
import "./Sidedrawer.css"
import Backdrop from "../../UI/Backdrop/Backdrop"
import Aux from "../../../hoc/Aux"

const sideDrawer = props => {
  var attachedClasses = ["SideDrawer", "Close"]
  if (props.open) {
    attachedClasses = ["SideDrawer", "Open"]
  }
  return (
    <Aux>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(" ")}>
        <Logo height='11%' margin='32px' />
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  )
}
export default sideDrawer
