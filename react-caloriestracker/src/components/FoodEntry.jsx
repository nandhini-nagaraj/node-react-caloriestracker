import React, { useState } from 'react';
import axios from "axios";

function FoodEntry() {
    const [foodEntries, setFoodEntries] = useState([]);
    const [dateTime, setDateTime] = useState('');
    const [foodName, setFoodName] = useState('');
    const [calories, setCalories] = useState('');
    const [price, setPrice] = useState('');

    const setDataToServer = (newEntry) => {
        axios.post('/api/sendData', { data: newEntry })
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newEntry = {
            dateTime,
            foodName,
            calories,
            price
        };

        setFoodEntries([ ...foodEntries, newEntry]);
        setDataToServer(newEntry);
        setDateTime('');
        setFoodName('');
        setCalories('');
        setPrice('');
    };

    return (
        <div className={"food-entry-container"}>
            <h2>Food Entry Form</h2>
            <form onSubmit={handleSubmit}>
                <div className={"date-time"}>
                    <label>Date/Time</label>
                    <input
                        type="datetime-local"
                        value={dateTime}
                        className={"input-text"}
                        onChange={(e) => setDateTime(e.target.value)}
                        required
                    />
                </div>
                <div className={"food-name"}>
                    <label>Food Name</label>
                    <input
                        type="text"
                        value={foodName}
                        className={"input-text"}
                        onChange={(e) => setFoodName(e.target.value)}
                        required
                    />
                </div>
                <div className={"calories"}>
                    <label>Calorie Value</label>
                    <input
                        type="number"
                        value={calories}
                        className={"input-text"}
                        onChange={(e) => setCalories(e.target.value)}
                        required
                    />
                </div>
                <div className={"price"}>
                    <label>Price</label>
                    <input
                        type="number"
                        value={price}
                        className={"input-text"}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                    />
                </div>
                <button className={"submit"} type="submit">Add Food Entry</button>
                <a className={'link'} rel="noreferrer" href={'/'}>View all meals</a>
            </form>
        </div>
    );
}

export default FoodEntry;