import React, { useEffect, useState } from 'react';
import "./Events.css";

const Events = () => {
  const [percentageChange, setPercentageChange] = useState(null);
  const [changeCategory, setChangeCategory] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('your-backend-url');
      const jsonData = await response.json();

      // Process the data
      var data = JSON.parse(jsonData);
      var dates = Object.keys(data).sort();

      var latestDate = dates[dates.length - 1];
      var previousDate = dates[dates.length - 2];
      var latestPrice = parseFloat(data[latestDate].price);
      var previousPrice = parseFloat(data[previousDate].price);

      var percentageChange = ((latestPrice - previousPrice) / Math.abs(previousPrice)) * 100;
      var changeCategory = getChangeCategory(percentageChange);

      // Update state with the calculated data
      setPercentageChange(percentageChange.toFixed(2));
      setChangeCategory(changeCategory);
    } catch (error) {
      console.error('Error fetching data from the backend:', error);
    }
  };

  const getChangeCategory = (percentageChange) => {
    // ... The same getChangeCategory function from the backend code ...
  };

  const randomChoice = (arr) => {
    // ... The same randomChoice function from the backend code ...
  };

  return (
    <div>
      {percentageChange !== null && (
        <p>The price changed by {percentageChange}%</p>
      )}
      {changeCategory !== null && (
        <p>The change category is: {changeCategory}</p>
      )}
    </div>
  );
};

export default Events;