import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import CardList from '../components/Card/CardList'
import CardFilter from '../components/Filter/CardFilter'
import Form from '../components/Form/Form'
import MyButton from '../components/UI/Button/MyButton'
import MyModal from '../components/UI/Modal/MyModal'
import { useCards } from '../hooks/useCards'

function Index(props) {
  const [cards,setCards] = useState([])

  const [filter, setFilter] = useState({
    sort:'',
    query:''
  })
  const [modal, setModal] = useState(false)
  const sortedAndSerchedCards = useCards (cards, filter.sort, filter.query)

  useEffect(()=> {
    getCardsResponse()
  })

  async function getCardsResponse() {
    const responce = await axios.get('https://jsonplaceholder.typicode.com/posts')
    setCards(responce.data)
  }

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
        <Form createCard={addCard}></Form>
      </MyModal>
      <CardFilter
        filter={filter}
        setFilter={setFilter}
      />
      <CardList cards={sortedAndSerchedCards} deleteCard={deleteCard}></CardList>
    </div>
  )
}

export default Index