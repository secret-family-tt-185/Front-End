import React, { useState } from 'react'

function SearchBar() {

const [keyword, setKeyword] = useState('')

    return (
        <div>
            <input
            value={keyword}
            placeholder="search for recipes"
            onChange={(e) => setKeyword(e.target.value)}
            />
        </div>
    )
}

export default SearchBar
