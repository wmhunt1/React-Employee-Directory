import React, { useState } from "react";
import employees from "../employees.json";

//works, just need to tie it all together
function Filter (){
    const [value, setValue] = useState('')
  
    return (
      <div>
        <label>Filter Employees </label>
        <input id = "filter"
          type="text"
          value={value} 
          onChange={e => setValue(e.target.value)} 
        />
  
        {employees
          .filter(employee => {
            if (!value) return true
            if (employee.name.includes(value)) {
              return true
            }
          })
          .map(employee => (
            <div>
              <p>{`ID: ${employee.id}`}</p>
              <p>{`Name: ${employee.name}`}</p>
              <p>{`Department: ${employee.dept}`}</p>
            </div>
          )
          )
        }
      </div>
    )
}
export default Filter;