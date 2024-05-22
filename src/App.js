import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { tabs } from "./tabs";

function App() {
  let [activeData, setactiveData] = useState(0);
  let [activeContant, setactiveContant] = useState(tabs[0]);
  let changeData = (index) => {
    setactiveData(index);
    setactiveContant(tabs[index]);
  };

  let [todolist, settodolist] = useState([]);

  let list = todolist.map((value, index) => {
    return (
      <ToDoListItem
        value={value}
        key={index}
        indexNumber={index}
        todolist={todolist}
        settodolist={settodolist}
      />
    );
  });

  let SaveToDoList = (event) => {
    let toname = event.target.toname.value;
    if (!todolist.includes(toname)) {
      let FinalToDoList = [...todolist, toname];
      settodolist(FinalToDoList);
    } else {
      alert("ToDoname Already Exist...... ");
    }
    event.preventDefault();
  };

  // html page start
  return (
    <div className="App">
      <div className="tabsOuter">
        <h1>tabs management system</h1>
        <div>
          <ul>
            {tabs.map((tabsItem, index) => {
              return (
                <li>
                  <button
                    onClick={() => changeData(index)}
                    className={activeData == index ? "activeButton" : ""}
                  >
                    {tabsItem.title}
                  </button>
                </li>
              );
            })}
          </ul>
          {activeContant !== undefined ? <p>{activeContant.detail}</p> : ""}
        </div>
      </div>

      <h1>ToDoList</h1>
      <form onSubmit={SaveToDoList}>
        <input type="text" name="toname" /> <button>save</button>
      </form>

      <div className="Overlay">
        <ul>{list}</ul>
      </div>
    </div>
  );
}

export default App;

function ToDoListItem({ value, indexNumber, todolist, settodolist }) {
  let [status, setstatus] = useState(false);

  let deleteRow = () => {
    let finalData = todolist.filter((v, i) => {
      return i != indexNumber;
    });
    settodolist(finalData);
  };

  let cheakStatus = () => {
    setstatus(!status);
  };
  return (
    <li className={status ? "activetab" : ""} onClick={cheakStatus}>
      {value} <span onClick={deleteRow}>&times;</span>
    </li>
  );
}
