import React,{useEffect,useState} from 'react'
import './Home.scss';
import axios from 'axios';
// import {Link} from 'react-router-dom'
// import { BiPlay } from "react-icons/bi"
// import { AiOutlinePlus } from "react-icons/ai"
//
const apiKey ="a1dbba14d04fdfd36d0bebc778d7dac3";
const url ="https://api.themoviedb.org/3";
const upcoming="upcoming";
const top_rated = "top_rated";
const now_playing ="now_playing";
const imgUrl = "https://image.tmdb.org/t/p/original";
//card
const Card = ({img})=>(
  <img className='card' src={img} alt="cover"/>
)

//Row
const Row =({title ,arr=[
  {
    img:"",
  }
]})=>(

  <div className='row'>
    <h2>{title}</h2>
    <div>
   
    {
      arr.map((item,index)=>(
        <Card key={index} img={`${imgUrl}/${item.poster_path}`}/>
      ))
    }
     
    </div>
   
  </div>
)
const Home = () => {
   
const [upcomingMovies, setUpcomingMovies] = useState();
const [topRatedMovies, setTopratedMovies] = useState();
const [nowPlayingMovies, setNowplayingMovies] = useState();
const [genre, setGenre] = useState();
  useEffect(() => {
   
    const fetchUpcoming =async()=>{
     const {data:{results}} = await axios.get(`${url}/movie/${upcoming}?api_key=${apiKey}`);
  
     setUpcomingMovies(results)
       
    };
    const fetchTopRated =async()=>{
      const {data:{results}} = await axios.get(`${url}/movie/${top_rated}?api_key=${apiKey}`);
   
      setTopratedMovies(results)
        
     };
     const fetchNowPlaying =async()=>{
      const {data:{results}} = await axios.get(`${url}/movie/${now_playing}?api_key=${apiKey}`);
   
      setNowplayingMovies(results)
        
     };
     
     
     const fetchGenre =async()=>{
      const {data:{genres},} = await axios.get(`${url}/genre/movie/list?api_key=${apiKey}`);
   
      setGenre(genres)
      console.log(genres)
        
     };
    fetchUpcoming()
    fetchTopRated();
    fetchNowPlaying();
    fetchGenre();
  }, []);
 
  return (
   <section className='home'>
    {/* <div
                className="banner"
                style={{
                    backgroundImage: topRatedMovies[0]
                        ? `url(${`${imgUrl}/${topRatedMovies[0].poster_path}`})`
                        : "rgb(16, 16, 16)",
                }}
            >
                {topRatedMovies[0] && <h1>{topRatedMovies[0].original_title}</h1>}
                {topRatedMovies[0] && <p>{topRatedMovies[0].overview}</p>}

                <div>
                    <button><BiPlay /> Play  </button>
                    <button>My List <AiOutlinePlus /> </button>
                </div>
            </div> */}
    <Row  title={"Upcoming Movies"} arr={upcomingMovies}/>
    <Row  title={"Top Rated Movies"} arr={topRatedMovies}/>
    <Row  title={"Now Playing Movies"} arr={nowPlayingMovies}/>
   
    {/* <div className="gerneBox">
      {genre.map((item)=>(<Link key={item.id} to={`/genre/${item.id}`}>{item.name}</Link>)
        
      )
       
      }
    </div> */}
   </section>
  )
}

export default Home