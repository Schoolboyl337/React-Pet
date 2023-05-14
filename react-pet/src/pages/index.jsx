import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import PostService from '../Api/PostService'
import CardList from '../components/Card/CardList'
import CardFilter from '../components/Filter/CardFilter'
import Form from '../components/Form/Form'
import MyButton from '../components/UI/Button/MyButton'
import MyLoader from '../components/UI/Loader/MyLoader'
import MyModal from '../components/UI/Modal/MyModal'
import { useRequest } from '../hooks/useRequest'
import { useCards } from '../hooks/useCards'

function Index(props) {
  const [cards,setCards] = useState([])
  const [getCardsResponse, error, isCardsLoading] =  useRequest( async ()=> {
    const arrayCards = await PostService.getCards()
    setCards(arrayCards)
  })

  const [filter, setFilter] = useState({
    sort:'',
    query:''
  })
  const [modal, setModal] = useState(false)
  const sortedAndSerchedCards = useCards (cards, filter.sort, filter.query)

  useEffect(()=> {
    getCardsResponse()
  },[])


  const addCard = (newCard) => {
    setCards([...cards, newCard])
    setModal(false)
  }

  const deleteCard = (card) => {
    setCards(cards.filter(item => item.id !== card.id))
  }

  return (
    <div>
      <MyButton onClick={()=> setModal(true)}>
        Добавить карточку товара
      </MyButton>
      <MyModal 
        isVisible={modal}
        setVisible={setModal}
      > 
        <Form createCard={addCard}/>
      </MyModal>
      <CardFilter
        filter={filter}
        setFilter={setFilter}
      />
      {error &&
        <h2>Ну типа случалась ошибка {error}</h2>
      }
      {isCardsLoading
        ? <MyLoader/>
        : <CardList cards={sortedAndSerchedCards} deleteCard={deleteCard}></CardList>
      }
    </div>
  )
}

export default Index