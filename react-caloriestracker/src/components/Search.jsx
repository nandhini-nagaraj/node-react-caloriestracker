import React, {useState} from 'react';
import Listout from "./Listout";

function Search ({data}) {
    const [searchResults, setSearchResults] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (e) => {
        const searchTerm = e.target.value;
        let searchResults = [];
        setSearchTerm(searchTerm);

        searchResults = searchTerm && data.length > 0 && data.filter((item) =>
            item.foodName.toLowerCase().includes(searchTerm.toLowerCase())
        );

        setSearchResults( searchResults );
    };

    return (
        <div className="search-container">
            <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleSearchChange}
                className={"input-text search-box"}
            />

            {
                searchResults.length > 0 ? (
                    <Listout data={searchResults} />
                ) : (
                    <p className={`${searchTerm ? 'shown' : 'hidden'}`}>
                    {
                        searchTerm
                            ? `We couldn't find any matches for ${searchTerm}. Please check your spelling or try again using a different search term.`
                            : ''}
                    </p>
                )
            }
        </div>
    );
}

export default Search;