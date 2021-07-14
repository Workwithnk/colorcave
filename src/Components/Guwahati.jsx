import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GuwahatiData } from "../ColorsArray/GuwahatiData";
import "../CSS/Mumbai.css";

toast.configure();

function Guwahati() {
  const [colorVal, setcolorVal] = useState("rgb");

  const selectHandler = (e) => {
    setcolorVal(e.target.value);
  };

  const colorDataHandler = (e) => {
    let color = e.target.innerText;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(color);
      navigator.clipboard.readText();
      toast.success(`${color} Copied`, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
  };
  return (
    <div className="Mumbai_Page">
      <div className="Mumbai_page_header">
        <NavLink to="/">Back</NavLink>
        <select className="Mumbai_Select" onChange={selectHandler}>
          <option>rgb</option>
          <option>hex</option>
        </select>
      </div>
      <div className="Mumbai_Page_All_Data">
        {GuwahatiData.map((data) => {
          return (
            <div
              className="Mumbai_Page_data"
              style={{ backgroundColor: data[colorVal] }}
              key={data.id}
              onClick={colorDataHandler}
            >
              {data[colorVal]}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Guwahati;
