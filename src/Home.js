import React, {useState, useEffect} from 'react';
import "./Home.css";
import requests from './requests';
import axios from './axios';

function Home() {
    const[movie, setMovies] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovies(request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
            ]);
            return request;
        }
        fetchData();
    }, []);
    console.log(movie);

    function Truncate(string, n) {
        return string?.length > n? string.substr(0, n-1) + ".....": string;
    }

  return (
    <div className='home'> 
  
        <div className='image' style={{backgroundImage: `URL("https://wallpapercave.com/wp/wp6157135.jpg")`, backgroundPosition:"center center", backgroundSize:"cover"}} >
            <div className='banner-contents'>
                <h1 className='title'>Movie Name</h1>
                <div className='button'>
                    <button className='banner-button'>Play</button>
                    <button className='banner-button'>MyList</button>

                </div>
   
                <div>
                    <h2 className='banner-caption'>{Truncate("This is an action movie where the hero shows all the skills and moves that he has got .It invloves stunts performed which are risky and they are a treat to the eyes", 50 )}</h2>
                </div>
                

            </div>
        
      </div>
      
    </div>
  )
}

export default Home;
