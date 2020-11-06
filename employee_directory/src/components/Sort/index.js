//import React from "react";
import React, { useState, useEffect } from 'react';
import employees from "../employees.json";
// import Table from "../Table";

// function sortByProperty(property) {
//     return function (a, b) {
//         if (a[property] > b[property])
//             return 1;
//         else if (a[property] < b[property])
//             return -1;

//         return 0;
//     }
// }
// employees.sort(sortByProperty("id"));
function Sort() {
    const [data, setData] = useState([]);
    const [sortType, setSortType] = useState('id');
  
    useEffect(() => {
      const sortArray = type => {
        const types = {
          id: 'id',
          name: 'name',
          department: 'department',
        };
        const sortProperty = types[type];
        const sorted = [...employees].sort((a, b) => b[sortProperty] - a[sortProperty]);
        setData(sorted);
      };
  
      sortArray(sortType);
    }, [sortType]); 
  
    return (
      <div className="select">
          <label>Sort Employees </label>
        <select onChange={(e) => setSortType(e.target.value)}> 
          <option value="id">ID</option>
          <option value="name">Name</option>
          <option value="department">Department</option>
        </select>
  
        {/* {data.map(employee => (
          <div key={employee.id} style={{ margin: '30px' }}>
            <div>{`ID: ${employee.id}`}</div>
            <div>{`Name: ${employee.name}`}</div>
            <div>{`Department: ${employee.department}`}</div>
          </div>
        ))} */}
        {/* <Table/> */}
      </div>
    );
  }
  
  export default Sort;