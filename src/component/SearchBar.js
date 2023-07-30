import React from "react";

const SearchBox = (prop) => {
    return(
        <div className="col col-sm-4">
            <input className="form-control" value={prop.value} onChange={(event)=> prop.setSearchValue(event.target.value)} placeholder="search movies..."></input>
        </div>
    )
}

export default SearchBox