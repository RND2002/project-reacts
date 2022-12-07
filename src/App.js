import React,{useState,useEffect} from 'react'
//import Card from './components/cards/Card'
import Cards from './components/cards/Cards'
import Loading from './components/cards/Loading'
const url = 'https://course-api.com/react-tours-project'

const App = () => {
  const [cards, setCards] = useState([])
  const [loading,setLoading]=useState(true)

  const removeTour = (id) => {
    const newTours = cards.filter((tour) => tour.id !== id)
    setCards(newTours)
  }


  const fetchTours=async ()=>{
    setLoading(true)
    try {
      const response=await fetch(url)
      const cards=await response.json()
      setLoading(false)
      setCards(cards)
    } catch (error) {
      setLoading(false)
      console.log(error)
      
    }
  }
  useEffect(()=>{
    fetchTours()
  },[])
  if(loading){
    return(
      <main>
        <Loading/>
      </main>
    );
  } 
  if (cards.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>no tours left</h2>
          <button className='btn' onClick={() => fetchTours()}>
            refresh
          </button>
        </div>
      </main>
    )
  }
  return(
    <main>
      <Cards cards={cards} removeTour={removeTour}/>
    </main>
  );



}

export default App