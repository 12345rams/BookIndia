import React from 'react'
import './SearchResult.css'
function SearchResult({results}) {
    return (
      <div className="SearchResultContainer">
        <div className="searchOptions">
            {results.map((item)=>
            <div>{item.name}</div>)}
        </div>
      </div>
    )
}

export default SearchResult
