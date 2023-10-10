import React from "react";

function SearchResults({results}) {
  return (
    <div>
      {results ? (
        <ul>
          {results.map((result, index) => (
            <li key={index}>{result.name} ({result.country})</li>
          ))}
        </ul>
      ) : (
        null
      )}
    </div>
 );
}

export default React.memo(SearchResults);