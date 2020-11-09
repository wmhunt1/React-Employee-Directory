import React from "react";
import employees from "../employees.json";

function Filter() {
  const [searchTerm, setSearchTerm] = React.useState();
  const [searchResults, setSearchResults] = React.useState([]);
  const handleChange = e => {
    setSearchTerm(e.target.value);
  };
  React.useEffect(() => {
    const results = employees.filter(employee =>
      employees.includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);
  return (
    <div className="filter">
       <label>Filter Employees </label>
      <input
        type="text"
        placeholder="Filter"
        value={searchTerm}
        onChange={handleChange}
      />
      <ul>
        {searchResults.map(employee => (
          <div key={employee.id} style={{ margin: '30px' }}>
            <div>{`ID: ${employee.id}`}</div>
            <div>{`Name: ${employee.name}`}</div>
            <div>{`Department: ${employee.department}`}</div>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Filter;