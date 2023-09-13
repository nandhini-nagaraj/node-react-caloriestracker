import React, {useEffect, useState} from 'react';
import '../CaloriesTracker.css';
import Search from "./Search";
import MealLists from "./Listout";
import HandleLimit from "./HandleLimit";
import axios from "axios";

function HomePage() {
    const [fetchedData, setFetchedData] = useState([]);

    useEffect(() => {
        let ignore = false;

        async function startFetching() {
            await axios({
                method: 'get',
                url: '/api/fetchData',
                responseType: 'json'
            })
                .then(function (response) {
                    if (!ignore) {
                        setFetchedData(convertArray(response));
                    }
                }).catch((error) => {
                    console.error('Error fetching data:', error);
                });
        }

        startFetching();
        return () => {
            ignore = true;
        }

    }, []);

    const convertArray = (r) => {
        return r.data.data.reduce((a, c) => a.concat(c), []);
    }

    return (
        <div className={"main"}>
            <div className={`wrapper`} >
                <div className={"content"}>
                    <h2>Food Entries</h2>
                    <Search data={fetchedData} />
                    <HandleLimit data={fetchedData} />
                </div>

                {
                    fetchedData.length > 0 ? (
                        <MealLists data={fetchedData} title={true} />
                    ) : (
                        <p className={`${!fetchedData || fetchedData.length <= 0 ? 'shown' : 'hidden'}`}>
                            There is no Food entries for track your calories. <a rel="noreferrer" href={'/food_entry'}>Add here</a>.
                        </p>

                    )
                }
            </div>
        </div>
    );
}

export default HomePage;