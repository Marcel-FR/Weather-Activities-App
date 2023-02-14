import { useEffect, useState } from "react";

export default function List() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const storedActivities = localStorage.getItem("activities");
    if (storedActivities) {
      setActivities(JSON.parse(storedActivities));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("activities", JSON.stringify(activities));
  }, [activities]);

  return (
    <ul>
      {activities.map((activity) => (
        <li key={activity.id}>
          {activity.name} ({activity.isForGoodWeather ? "good weather" : "bad weather"})
        </li>
      ))}
    </ul>
  );
}