import { useState } from "react";

export default function Form({ onAddActivity }) {
    const [activityName, setActivityName] = useState("")
    const [isGoodWeather, setIsGoodWeather] = useState(false)

    function handleSubmit(event) {
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
            value={activityName}
            onChange={(event) => setActivityName(event.target.value)}
            />
        </label>
        <label>
            Is this a good weather activity?
            <input type="checkbox" 
            checked={isGoodWeather}
            onChange={(event) => setIsGoodWeather(event.target.checked)}
            />
        </label>
        <button type="submit">Submit</button>
    </form>
);
}