import React, { useState } from "react";
import image from '../../images/maggy.jpeg'
import Menu from "./menuApi";
import { MenuCard } from "./MenuCard";
export const Restaurant = () => {

    const [menuData,setMenuData]=useState(Menu);
    
    const categoryList =Menu.map((c)=>c.category);
    const uniqueCategoryList = [Array.from(new Set(categoryList))];
    console.log(uniqueCategoryList);
    

    const filterItem = (category:string)=>{
      const updatedList=Menu.filter((c)=>c.category===category);
      setMenuData(updatedList);
    }

  return (
    <>
    <nav className="navbar">
      <div className="btn-group">
        <button className="btn-group__item" onClick={()=>filterItem("Breakfast")}>Breakfast</button>
        <button className="btn-group__item" onClick={()=>filterItem("Lunch")}>Lunch</button>
        <button className="btn-group__item" onClick={()=>filterItem("Brunch")}>Brunch</button>
        <button className="btn-group__item" onClick={()=>filterItem("Dinner")}>Dinner</button>
        <button className="btn-group__item" onClick={()=>setMenuData(Menu)}>Other</button>
      </div>
    </nav>
     <MenuCard menuData={menuData}></MenuCard>
    </>
  );
};
