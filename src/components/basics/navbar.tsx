import React from "react";

const Navbar = ({ filterItem, navList }:any) => {
  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          {navList.map((c:any) => {
            return (
              <button
                className="btn-group__item"
                onClick={() => filterItem(c)}
              >
                {c}
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
