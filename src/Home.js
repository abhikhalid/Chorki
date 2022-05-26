import React,{ useState, useEffect} from 'react'
import Nav from './Nav'
import Row from './Row'
import Banner from './Banner'
import Footer from './Footer'



function Home() {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])


    return (
        
        <div>

            
            
            {/* Navbar */}
            <Nav />
            
            {/* Banner */}

            <Banner/>

            
            {/* Movie Rows */}

             <Row
                title="CHORKI ORIGINALS"
                fetchUrl="http://127.0.0.1:8000/api/getChorkiOriginalsMovie"
                isLargeRow
            /> 
            
            <Row title="Trending Now" fetchUrl="http://127.0.0.1:8000/api/getTrendingNewMovie" />

             <Row title="Top Rated" fetchUrl="http://127.0.0.1:8000/api/getTopRatedMovie" />
            
            <Row title="Action Movies" fetchUrl="http://127.0.0.1:8000/api/getActionMovie" />

            <Row title="Comdey Movies" fetchUrl="http://127.0.0.1:8000/api/getComdeyMovie" />
            
            <Row title="Horror Movies" fetchUrl="http://127.0.0.1:8000/api/getHorrorMovie" />
            
            <Row title="Romance Movies" fetchUrl="http://127.0.0.1:8000/api/getRomanceMovie" />
            

           

            <Footer/> 
            
           
     
            
        </div>

        

        
    )
}

export default Home


