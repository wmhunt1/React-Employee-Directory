import React from "react";

function Sort() {
    return (
        <div>
            <label for="sortEmployees">Sort</label>
            <select name="sortEmployees" id="sortEmployees">
                <option value="name">Name</option>
                <option value="department">Department</option>
            </select>
        </div>
    )
}
export default Sort;