import React from "react";
import { useState } from "react";
import "./Page.css";
import Time from "./Time";
import Data from './Data.json'


export default function Page() {
 
  const [currentPage,setCurrentPage] = useState(1)
  const recordsPerPage = 5;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex =lastIndex - recordsPerPage;
  const records = Data.slice(firstIndex,lastIndex);
  const npage= Math.ceil(Data.length/recordsPerPage)
  const numbers = [...Array(npage + 1).keys()].slice(1)
  

  const [isActive, setIsActive] = useState(false);
  const [selected, setIsSelected] = useState("Choose one");

  return (
    <div className="container">
      <div className="buttons">
        <div><a href="#" onClick={prePage}> Previous week</a></div>
        <div><a href="#" onClick={nextPage}> Next week</a></div>
        
      </div>
      <div className="timezone">
        Timezone:
        <div className="dropdown">
          <div
            onClick={(e) => {
              setIsActive(!isActive);
            }}
            className="dropdown-btn"
          >
            {selected}
            <span
              className={isActive ? "fas fa-caret-up" : "fas fa-caret-down"}
            />
          </div>
          <div
            className="dropdown-content"
            style={{ display: isActive ? "block" : "none" }}
          >
            <div
              onClick={(e) => {
                setIsSelected(e.target.textContent);
                setIsActive(!isActive);
              }}
              className="item"
            >
              &#91;UTC - 05&#93; Eastern Standard Time
            </div>
            <div
              className="item"
              onClick={(e) => {
                setIsSelected(e.target.textContent);
                setIsActive(!isActive);
              }}
            >
              &#91;UTC - 02&#93; Brazil
            </div>
          </div>
        </div>
      </div>
    <div className="timepage">
     
     {records.map((data)=>(
       <Time  day={data.day} date={data.date} time={data.time} />
     ))}
    </div>
    </div>
  );

  function  prePage(){
      if(currentPage !== firstIndex){
        setCurrentPage(currentPage -1)
      }
  }

  function  nextPage(){
    if(currentPage !== lastIndex){
      setCurrentPage(currentPage + 1)
    }
  }
}
