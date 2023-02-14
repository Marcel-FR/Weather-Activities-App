import './App.css';
import { useState } from "react";
import Form from "./components/Form/Form"
import { v4 as uuid } from "uuid";
import List from "./components/List/List"
import  useLocalStorageState  from 'use-local-storage-state'; 

function App() {
  const [activities, setActivities] =  useLocalStorageState("activities", {defaultValues: [] })

  function handleAddActivity(newActivity) {
    const activityWithId = {...newActivity, id: uuid() };
    setActivities([...activities, activityWithId]);
  }
  return (
    <div className="App">
      <Form onAddActivity={handleAddActivity}/>
      <List activities={activities}/>
    </div>
  );
}

export default App;
