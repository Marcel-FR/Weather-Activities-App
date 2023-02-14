import React from "react";

export default function List({ activities, isGoodWeather }) {
  return (
    <div>
        <h3>{isGoodWeather ? "The weather is awesome! Go outside and:" : "Bad weather outside! Here's what you can do now:"}</h3>
      <ul>
        {activities.map(activity => <li key={activity.id}>{activity.name}</li>)}
      </ul>
    </div>
  );
}
