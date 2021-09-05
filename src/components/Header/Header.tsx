import React from "react";

import icons from '../../images/imgSrc'
import './Header.css'

type HeaderProps = {
    element:any
};

const Header = (props:HeaderProps) => {
  const explenation: string[] = [
      "Add new period",
      "Calculate existing periods",
      "Show all periods"
  ];


    return(
     <div className="header-container">
         <h1 className="logo">BikeRent</h1>
        {icons.map((e:string,i:number)=>{
            return(
             <div className="header-btns" id={`id:${i}`} onClick={props.element}>
                <img id={`id:${i}`} className="header-icons" key={`id:${i}`} src={e} alt={`img:${i}`}/>
                <h3 id={`id:${i}`} className="button-info">{explenation[i]}</h3>
             </div>
            )
         })
         }
    </div>
    )
};

export default Header;