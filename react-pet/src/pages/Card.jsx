import { useState, useEffect } from 'react'
import { useRequest } from '../hooks/useRequest'
import { useParams } from 'react-router-dom'
import MyLoader from '../components/UI/Loader/MyLoader'
import PostService from '../Api/PostService'

function Card(props) {
 const params = useParams()
 console.log(params.Id)
 const [card, setCard] = useState({})
 const [getCardById, error, isCardLoading] = useRequest( async () => {
  const responce = await PostService.getCardById(params.Id)
  setCard(responce.data)
 })
  useEffect(()=> {
    getCardById()
  }, [])
    return (
      <>
        {isCardLoading
        ? <MyLoader/>
        : <div> {card.id}. {card.title} </div>
        }
      </>
    )
  }
  
  export default Card