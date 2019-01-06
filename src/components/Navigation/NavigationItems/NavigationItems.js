import React from "react"
import NavigationItem from "./NavigationItem/NavigationItem"
import "./NavigationItems.css"
const navigationItems = () => (
  <ul className='NavigationItems'>
    <li>
      <NavigationItem link='/' exact>
        Burger Builder
      </NavigationItem>
    </li>
    <li>
      <NavigationItem link='/orders'>Orders</NavigationItem>
    </li>
  </ul>
)
export default navigationItems
