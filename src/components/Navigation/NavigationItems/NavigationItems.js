import React from "react"
import NavigationItem from "./NavigationItem/NavigationItem"
import "./NavigationItems.css"
const navigationItems = () => (
  <ul className='NavigationItems'>
    <li>
      <NavigationItem link='/' active>
        Burger Builder
      </NavigationItem>
    </li>
    <li>
      <NavigationItem link='/'>Checkout</NavigationItem>
    </li>
  </ul>
)
export default navigationItems
