import { useState } from "react"
import classes from  "./Hero.module.css"
export const Hero = () => {
    const [search, setSearch] = useState(false)
    const showSearch = () => {
        setSearch(!search)
    }

  return (
    <div className={classes.hero}>
        <div className={classes.nav}>
            <span>HouseWorth</span>
            <ul>
                <li href= "#explore">Explore</li>
                <li onClick={showSearch}>Search </li>
                <li>Sign In as agent</li>
            </ul>
        </div>
        <div className={`${classes.searchBar} ${classes.appear}`}>
            { search && <input  placeholder="Search ....."></input>}
        </div>
    </div>
  )
}
