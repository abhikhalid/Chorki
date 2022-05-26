import React,{useState, useEffect} from 'react'
import Footer from './Footer'
import Nav from './Nav'
import Row from './Row'



function Movies() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    
    return (

        <>
        <div>

            <Nav />
            
            <br/>
            <br/>
            <br/>
            
            <Row
                title="LATEST"
                fetchUrl="http://127.0.0.1:8000/api/getChorkiOriginalsMovie"
                isLargeRow
            /> 
            
            <Row title="Thriller" fetchUrl="http://127.0.0.1:8000/api/getTrendingNewMovie" />

             <Row title="Dramatic" fetchUrl="http://127.0.0.1:8000/api/getTopRatedMovie" />
            
            <Row title="Family" fetchUrl="http://127.0.0.1:8000/api/getActionMovie" />

            <Row title="Classic Movies" fetchUrl="http://127.0.0.1:8000/api/getComdeyMovie" />
            
            <Row title="Horror Movies" fetchUrl="http://127.0.0.1:8000/api/getHorrorMovie" />
            
            <Row title="Romance Movies" fetchUrl="http://127.0.0.1:8000/api/getRomanceMovie" />
            
            <Footer/> 
           
            
        </div>

       

        </>
    )
}

export default Movies
