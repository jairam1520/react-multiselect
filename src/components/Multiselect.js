import React, { useState } from "react";
import Options from "./Options";
import "./Myltiselect.css";

export const Multiselect = () => {
  const selectedArr = new Array(Options.length).fill(false);
  const [isSelected, setIsSelected] = useState(selectedArr);
  const [showOptions, setShowOptions] = useState(false);
  const[selectedCount,setSelectedCount] = useState(0);
  return (
    <>
      <div>
        <button
          onClick={() => {
            setShowOptions((prev) => !prev);
            const currState = isSelected;
            
            setIsSelected([...currState.map(item=>false)]);
            setSelectedCount((prev)=>prev-prev);
          }}
        >
          {selectedCount>0? `${selectedCount} selected`: `--select your states--`}
          <i className={`arrow ${showOptions? 'right' :'down'}`}></i>
        </button>

        {showOptions && (<>
            <div className="select-all">Indian States
                <div className="line"></div>
            </div>
          <div className="multiselect-grid">
            
            {Options.map((item, idx) => {
              return (
                <div key={idx}
                  className={`grid-item ${
                    isSelected[idx] ? "isSelected" : "isNotSelected"
                  }`}
                >
                  <input
                    onChange={() => {
                      const currState = isSelected;
                      currState[idx] = !currState[idx];
                      setIsSelected([...currState]);

                      if(currState[idx]){
                        setSelectedCount((pre)=>pre+1);
                      }else{
                        setSelectedCount((pre)=>pre-1);
                      }
                    }}
                    className="option-checkbox"
                    id={item.key}
                    type="checkbox"
                  ></input>
                  <label className="option-label" htmlFor={item.key}>
                    {item.name}
                  </label>
                </div>
              );
            })}
          </div>
          </>)}
      </div>
    </>
  );
};
