import { useState } from "react";

export default function Form({ onAddActivity }) {
    const [activityName, setActivityName] = useState("")
    const [isGoodWeather, setIsGoodWeather] = useState(false)

    function handleSubmit() {
        onAddActivity(activityName, isGoodWeather);
        setActivityName("");
        setIsGoodWeather(false);
    }

return (
    <form onSubmit={handleSubmit}>
        <h2>Add new Activity</h2>
        <label>
            Name of activity:
            <input type="text"
            value={activityName}/>
        </label>
        <label>
            Is this a good weather activity?
            <input type="checkbox"
            checked={isGoodWeather}/>
        </label>
        <button type="submit">Submit</button>
    </form>
);
}