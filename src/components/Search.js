import React, { useEffect, useState } from "react";

const Search = () => {

    let API = "http://hn.algolia.com/api/v1/search?query=React"
    const [isLoading, setIsLoading] = useState(true)
    const Call_data = async (url) => {
        let call = await fetch(url)
        let data = await call.json()
        setIsLoading(false)
        console.log(data)
    }
    useEffect(() => {
        Call_data(API) 
    }, [])

    if(isLoading){
        return <h3>Loading...</h3>
    }
    else{
        return(
            <>
                <h3>Search</h3>
            </>
        )
    }

   
}

export default Search;