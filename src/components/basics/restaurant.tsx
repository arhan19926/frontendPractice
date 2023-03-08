import React, { useState } from "react";
import Menu from "./menuApi";
import { MenuCard } from "./MenuCard";
import Navbar from "./navbar";
export const Restaurant = () => {
  const categoryList = Menu.map((c) => c.category);

  const uniqueCategoryList = [...Array.from(new Set(categoryList)), "Misc"];

  const [menuData, setMenuData] = useState(Menu);
  const [navList, setMenuList] = useState(uniqueCategoryList);

  const filterItem = (category: string) => {
    if (category === "Misc") {
      setMenuData(Menu);
      return;
    }
    const updatedList = Menu.filter((c) => c.category === category);
    setMenuData(updatedList);
  };

  return (
    <>
      <Navbar filterItem={filterItem} navList={navList}></Navbar>
      <MenuCard menuData={menuData}></MenuCard>
    </>
  );
};
