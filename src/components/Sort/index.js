import React, { useState, useEffect } from 'react';
import employees from "../employees.json";

// const bands = [
//   {
//     id: 1,
//     name: 'Nightwish',
//     albums: 9,
//     members: 6,
//     formed_in: 1996,
//   },
//   {
//     id: 2,
//     name: 'Metallica',
//     albums: 10,
//     members: 4,
//     formed_in: 1981,
//   },
//   {
//     id: 3,
//     name: 'Nirvana',
//     albums: 3,
//     members: 3,
//     formed_in: 1987,
//   },
// ];

// function Sort() {
//   const [data, setData] = useState([]);
//   const [sortType, setSortType] = useState('albums');

//   useEffect(() => {
//     const sortArray = type => {
//       const types = {
//         albums: 'albums',
//         members: 'members',
//         formed: 'formed_in',
//       };
//       const sortProperty = types[type];
//       const sorted = [...bands].sort((a, b) => b[sortProperty] - a[sortProperty]);
//       setData(sorted);
//     };

//     sortArray(sortType);
//   }, [sortType]); 

//   return (
//     <div className="App">
//       <select onChange={(e) => setSortType(e.target.value)}> 
//         <option value="albums">Albums</option>
//         <option value="members">Members</option>
//         <option value="formed">Formed in</option>
//       </select>

//       {data.map(band => (
//         <div key={band.id} style={{ margin: '30px' }}>
//           <div>{`Band: ${band.name}`}</div>
//           <div>{`Albums: ${band.albums}`}</div>
//           <div>{`Members: ${band.members}`}</div>
//           <div>{`Year of founding: ${band.formed_in}`}</div>
//         </div>
//       ))}
//     </div>
//   );
// }

// // import Table from "../Table";

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
          {/* <option value="id">ID</option> */}
          <option value="name">Name</option>
          <option value="department">Department</option>
        </select>
        {/* <Table/> */}
{/* shows data sorting on these but not on table */}
        {data.map(employee => (
          <div key={employee.id} style={{ margin: '30px' }}>
            {/* <div>{`ID: ${employee.id}`}</div> */}
            <div>{`Name: ${employee.name}`}</div>
            <div>{`Department: ${employee.department}`}</div>
          </div>
        ))}
      </div>
    );
  }
  
export default Sort;