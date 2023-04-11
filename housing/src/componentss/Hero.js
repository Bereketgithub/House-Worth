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
<<<<<<< HEAD
        <div className={`${classes.searchBar} ${classes.appear}`}>
            { search && <DropdownMenu/>} 
        </div>
=======
        {search && <div className={classes.filter}>
          <DropdownMenu />
        </div>}
>>>>>>> 78287f51998f08034e4489c7459a805a9911f8ad
    </div>
  )
}