import './App.css';
import { useState } from "react";
import Form from "./components/Form/Form"
import { v4 as uuid } from "uuid";
import List from "./components/List/List"

function App() {
  const [activities, setActivities] = useState([]);

  function handleAddActivity(newActivity) {
    const activityWithId = {...newActivity, id: uuid() };
    setActivities([...activities, activityWithId]);
  }
  return (
    <div className="App">
      <Form onAddActivity={handleAddActivity}/>
      <List />
    </div>
  );
}

export default App;
