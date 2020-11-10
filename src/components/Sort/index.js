import React, { useState, useEffect } from 'react';
import employees from "../employees.json";

//to sort by name by default
function sortByProperty(property) {
    return function (a, b) {
        if (a[property] > b[property])
            return 1;
        else if (a[property] < b[property])
            return -1;

        return 0;
    }
}
employees.sort(sortByProperty("name"));
function Sort() {
    const [data, setData] = useState([]);
    const [sortType, setSortType] = useState('name');
  
    useEffect(() => {
      const sortArray = type => {
        const types = {
          id: 'id',
          name: 'name',
          //switched to dept to see if will sort
          dept: 'dept',
        };
        const sortProperty = types[type];
        const sorted = [...employees].sort((a, b) => a[sortProperty] - b[sortProperty]);
        //changed from a-b to fix id sort
        setData(sorted);
      };
  
      sortArray(sortType);
    }, [sortType]); 
  
    return (
      <div className="select">
          <label>Sort Employees </label>
        <select onChange={(e) => setSortType(e.target.value)}> 
        {/* sorts id in reverse order need an option to change from a-b instead */}
          <option value="id">ID</option>
          {/* sorts by name */}
          <option value="name">Name</option>
          {/* doesn't work */}
          <option value="dept">Department</option>
        </select>
{/* shows data sorting on these but not on table */}
        {data.map(employee => (
          <div key={employee.id}>
            <div>{`ID: ${employee.id}`}</div>
            <div>{`Name: ${employee.name}`}</div>
            <div>{`Department: ${employee.dept}`}</div>
          </div>
        ))}
      </div>
    );
  }
  
export default Sort;