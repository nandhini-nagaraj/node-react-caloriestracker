import React from 'react';

export default function Listout({data, title = false}) {
    return (
        <div className="list-container">
            <table>
                <tbody>
                {
                    title
                    && data.length > 0
                    && <tr className={'title'}>
                        <th><span>Date/Time</span></th>
                        <th><span>Food Name</span></th>
                            <th><span>Calories</span></th>
                                <th><span>Price</span></th>
                    </tr>
                }

                {
                    data && data.map((entry, index) => {
                    return <tr key={index}>
                        <td> <span>{new Date(entry.dateTime).toLocaleString()}</span></td>
                        <td>  <span>{entry.foodName}</span></td>
                        <td> <span>{entry.calories}</span></td>
                        <td>  <span>{entry.price}</span></td>
                    </tr>
                })
                }
                </tbody>
            </table>
        </div>
    );
}