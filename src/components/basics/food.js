import React, { useState } from 'react'
import './style.css'
import MenuCard from './MenuCard'
import Menu from './menuApi.js'
import Navbar from './Navbar'

const uniqueList = [
  ...new Set(
    Menu.map((curElem) => {
      return curElem.category;
    })
  ),
  "All",
]

const Food = () => {
  const [menuData,setMenuData] = useState(Menu);
  const [menuList,setMenuList] = useState(uniqueList);
  
   const filterItem = (category) =>{
     if(category === "All") {
       setMenuData(Menu);
       return;
     }
     const updatedList = Menu.filter((curElem) => {
       return curElem.category === category;
     } )
      setMenuData(updatedList);
   }
  return (
    <div>
      <Navbar filterItem={filterItem} menuList={menuList}/> 
      <MenuCard menuData={menuData}/>
    </div>
  )
}

export default  Food