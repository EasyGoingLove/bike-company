import React from "react";

import icons from '../../images/imgSrc'
import './Header.css'


const Header = () => {



    return(
     <div className="header-container">
        {icons.map((e:string,i:number)=>{
            return(
             <div className="header-btns">
                <img className="header-icons" key={`id:${i}`} src={e} alt={`img:${i}`}/>
             </div>
            )
         })
         }
      
      {/*
      1.Display pariod array dates
      2.Add a new object in the array table
      3.Calculate 
      */}

    </div>
    )
};

export default Header;