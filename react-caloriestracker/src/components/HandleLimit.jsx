import React, {useCallback, useEffect, useState} from 'react';

function Limit({ data, limitType, initialLimit, limitName }) {
    let [limit, setLimit] = useState(initialLimit);
    const [isTextboxOpen, setIsTextboxOpen] = useState(true);
    const [isExistLimit, setIsExistLimit] = useState(true);

    const prepareLimitData = useCallback(() => {
        return data.reduce((object, item) => {
            const {dateTime, [limitName]: limitValue} = item;
            const key = limitType === 'price' ? new Date(dateTime).getMonth() : new Date(dateTime).toLocaleDateString();
            object[key] = (object[key] || 0) + parseInt(limitValue);
            return object;
        }, {});
    }, [data, limitType, limitName]);

    const handleLimitData = useCallback((newLimit = 0) => {
        const counts = prepareLimitData()
        const currentDate = limitType === 'price' ? new Date().getMonth() : new Date().toLocaleDateString();
        limit = newLimit > 0 ? newLimit : limit;
        const limitCheck = !counts.hasOwnProperty(currentDate) || limit >= counts[currentDate];
        setIsExistLimit(limitCheck);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [limit, prepareLimitData]);

    useEffect(() => {
        handleLimitData();
    }, [data, limit, handleLimitData]);

    const handleTextBox = () => {
        setIsTextboxOpen(!isTextboxOpen);
    };

    const updateLimit = (e) => {
        const newLimit = e.target.value;
        setLimit(newLimit);
        handleLimitData(newLimit);
    };

    return (
        <section className={`${limitType}-limit-container limit-container`}>
            <p>Your {limitType === 'price' ? 'Price Limit' : 'Calories Limit'}: {limit}/
                {limitType === 'price' ? new Date().toLocaleString('en-us',{month:'short', year:'numeric'}) : 'day'}</p>
            {!isExistLimit && (
                <div className={`${limitType}-limit-content`}>
                    <p className="warning">{`Warning: Your ${limitType === 'price' ? 'Price' : 'Calories'} Limit exists today.`}</p>
                    <p>
                        Please update your {limitType === 'price' ? 'price' : 'calories'} limit <span className="link" onClick={handleTextBox}>here</span>
                        {!isTextboxOpen && (
                            <input
                                type="text"
                                value={limit}
                                onChange={updateLimit}
                                placeholder={`Increase your ${limitType === 'price' ? 'price' : 'calories'} limit`}
                            />
                        )}
                        .
                    </p>
                </div>
            )}
        </section>
    );
}

function HandleLimit({ data }) {
    return (
        <div className="limits-container">
            <Limit data={data} limitType="price" initialLimit={1000} limitName="price" />
            <Limit data={data} limitType="calories" initialLimit={2100} limitName="calories" />
        </div>
    );
}

export default HandleLimit;
