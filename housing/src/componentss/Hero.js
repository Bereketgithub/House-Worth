import { useState } from "react"
import classes from  "./Hero.module.css"
import DropdownMenu from "./DropdownMenu"
export const Hero = () => {
    const [search, setSearch] = useState(false)
    const [activeFilter, setActiveFilter] = useState('')
    const showSearch = () => {
        setSearch(!search)
    }

  return (
    <div className={classes.hero}>
        <div className={classes.nav}>
            <span>HouseWorth</span>
            <ul>
                <li href= "#explore">Explore</li>
                <li onClick={showSearch}>Show</li>
                <li>Sign In as agent</li>
            </ul>
        </div>
        <div className={classes.DropdownMenu}>
            { search && <DropdownMenu/>} 
        </div>
    </div>
  )
}