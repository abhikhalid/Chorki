import React,{ useState, useEffect} from 'react'
import Footer from './Footer'
import Nav from './Nav'
import Row from './Row'



function TvShows() {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])


    return (
        <div>

            <Nav />

            <br/>
            <br/>
            <br/>
            
            
            <Row
                title="LATEST NOW"
                fetchUrl="http://127.0.0.1:8000/api/getChorkiOriginalsMovie"
                isLargeRow
            /> 
            
            <Row title="Comedy" fetchUrl="http://127.0.0.1:8000/api/getTrendingNewMovie" />

             <Row title="Drama" fetchUrl="http://127.0.0.1:8000/api/getTopRatedMovie" />
            
            <Row title="Thriller" fetchUrl="http://127.0.0.1:8000/api/getActionMovie" />

            <Row title="Detective" fetchUrl="http://127.0.0.1:8000/api/getComdeyMovie" />
            
            <Row title="All Time Favourite" fetchUrl="http://127.0.0.1:8000/api/getHorrorMovie" />
            
            <Row title="Documentary" fetchUrl="http://127.0.0.1:8000/api/getRomanceMovie" /> 
            

            <Footer/> 
            
        </div>
    )
}

export default TvShows
