import { Link } from 'react-router-dom';
import './TitleCards.css'
import { useRef,useEffect, useState } from 'react'


// eslint-disable-next-line react/prop-types
const TitleCards = ({title,category}) => {
  const [apiData,setApiData] = useState([])

 const cardsRef = useRef();
 const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMWMyNGQ1NWI2NjNmYWYxZGEyZTc0ZjhlMzYwZTA4NCIsInN1YiI6IjY2NTlhMzE5NDZmMzBmMTM3NDc1MWM3ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2H5PvIzezwx0E9hSsKgZfs3anuC4YCP6owQxWrxRxIs'
  }
};
useEffect(()=>{
  fetch(`https://api.themoviedb.org/3/movie/${category?category:'now_playing'}?language=en-US&page=1`, options)
  .then(response => response.json())
  .then(response => setApiData(response.results))
  .catch(err => console.error(err));

// eslint-disable-next-line react-hooks/exhaustive-deps
},[])

 const handleWheel = (event)=>{
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
 };
 
 


 useEffect(()=>{
   cardsRef.current.addEventListener('wheel',handleWheel)
 },[])

  return (
    <div className='titlecards'>
      <p>{title?title:'Popular on Netflix'}</p>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card,index)=>{
            return (
            <Link to={`/player/${card.id}`} className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
            <p>{card.original_title}</p>
            </Link>
            )
        })}
      </div>
    </div>
  )
}

export default TitleCards
