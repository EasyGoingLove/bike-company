import React from "react";

import icons from '../../images/imgSrc'
import './Header.css'


const Header = () => {



    return(
     <div className="header-container">
         <h1 className="logo">BikeRent</h1>
        {icons.map((e:string,i:number)=>{
            return(
             <div className="header-btns">
                <img className="header-icons" key={`id:${i}`} src={e} alt={`img:${i}`}/>
             </div>
            )
         })
         }
    </div>
    )
};

export default Header;