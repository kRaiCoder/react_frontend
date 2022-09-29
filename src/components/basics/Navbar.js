import React from 'react'

const Navbar = ( {filterItem, menuList}) => {
  return (
    <div>
        <nav className='navbar'>
          {/* <h1 className='title1'>Yummy🍹Corner</h1> */}
          <img src="images/yummy.png" height={120} alt="" />
        <div className="btn-group">
          {menuList.map((curElem) => {
            return(
              <button className='btn-group__item' onClick={() => filterItem(curElem)}>{curElem}</button>  
            )
          })}
         

        </div>
      </nav>
    </div>
  )
}

export default Navbar