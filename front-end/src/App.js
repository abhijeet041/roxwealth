import React, { useState, useEffect } from 'react';
import './App.css';

const Restaurant = ({ name, location, chef, awards, ambiance, sustainability, events, online_presence, menu }) => (
  <div className="restaurant">
    <h1>{name}</h1>
    <div className="location">
      <p>{location.address}</p>
      <p>{`Latitude: ${location.latitude}, Longitude: ${location.longitude}`}</p>
    </div>
    <div className="chef">
      <h2>Chef</h2>
      <p>{chef.name}</p>
      <p>{chef.bio}</p>
      <p>{`Signature Dish: ${chef.signatureDish}`}</p>
    </div>
    <div className="awards">
      <h2>Awards</h2>
      <ul>
        {awards.map((award) => (
          <li key={award.year}>
            {award.year} - {award.organization} - {award.award}
          </li>
        ))}
      </ul>
    </div>
    <div className="ambiance">
      <h2>Ambiance</h2>
      <p>{ambiance.description}</p>
    </div>
    <div className="sustainability">
      <h2>Sustainability Initiatives</h2>
      <ul>
        {sustainability.initiatives.map((initiative) => (
          <li key={initiative.name}>
            {initiative.name} - {initiative.description}
          </li>
        ))}
      </ul>
    </div>
    <div className="events">
      <h2>Upcoming Events</h2>
      <ul>
        {events.upcoming_events.map((event) => (
          <li key={event.name}>
            {event.name} - {event.date} - {event.description}
          </li>
        ))}
      </ul>
    </div>
    <div className="onlinePresence">
      <h2>Online Presence</h2>
      <ul>
        <li>Website: <a href={online_presence.website}>{online_presence.website}</a></li>
        <li>Facebook: <a href={online_presence.social_media.facebook}>{online_presence.social_media.facebook}</a></li>
        <li>Instagram: <a href={online_presence.social_media.instagram}>{online_presence.social_media.instagram}</a></li>
        <li>Twitter: <a href={online_presence.social_media.twitter}>{online_presence.social_media.twitter}</a></li>
      </ul>
    </div>
    <div className="menu">
      <h2>Menu</h2>
      {menu.categories.map((category) => (
        <div key={category.name}>
          <h3>{category.name}</h3>
          <ul>
            {category.items.map((item) => (
              <li key={item.name}>
                <h4>{item.name}</h4>
                <p>{item.description}</p>
                <p>{`Price: ${item.price}`}</p>
                <p>Ingredients: {item.ingredients.join(', ')}</p>
                <p>
                  Nutritional Info: Calories: {item.nutritional_info.calories}, Protein: {item.nutritional_info.protein},
                  Carbohydrates: {item.nutritional_info.carbohydrates}, Fat: {item.nutritional_info.fat}
                </p>
                <p>Seasonal Availability: {item.seasonal_availability.join(', ')}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
);

const App = () => {
  const [restaurantData, setRestaurantData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/restaurantData')
      .then((response) => response.json())
      .then((data) => setRestaurantData(data.restaurant))
      .catch((error) => console.error(error));
  }, []);

  if (!restaurantData) {
    return <div>Loading...</div>;
  }


return (<Restaurant {...restaurantData}></Restaurant>)
};

export default App;
