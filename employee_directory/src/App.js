import React from "react";
import Table from "./components/Table";
import Sort from "./components/Sort";
import Filter from "./components/Filter";
import "./style.css";

function App() {
    return (
        <div>
            <h1 id = "title">Employee Directory</h1>
            <Sort/>
            <Filter/>
            <Table/>
        </div>
    );
}

export default App;