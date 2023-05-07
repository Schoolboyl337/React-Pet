import { useState } from 'react'
import CardList from '../components/Card/CardList'
import Form from '../components/Form/Form'
import MySelect from '../components/UI/Select/MySelect'

function Index(props) {
  const [cards,setCards] = useState([
    {id:1, title:'Pivo', price: '100'},
    {id:2, title:'Dangen Master', price: '300'},
    {id:3, title:'A4', price: '1000'}
  ])

  const [selectedSort, setSelectedSort] = useState('')

  const addCard = (newCard) => {
    setCards([...cards, newCard])
  }

  const selectSort = (sort) => {
    setSelectedSort(sort)
    setCards([...cards].sort((a, b) => a[sort].localeCompare(b[sort])))
  }

  const deleteCard = (card) => {
    setCards(cards.filter(item => item.id !== card.id))
  }

  return (
    <div>
      <Form createCard={addCard}></Form>
      <MySelect
        value={selectedSort}
        onChange={selectSort}
        defaultValue="Сортировать по"
        options= {[
          {value:'title', name:'По названию'},
          {value:'price', name:'По цене'},
        ]}
      />
      { cards.length
        ? 
        <CardList cards={cards} deleteCard={deleteCard}></CardList>
        : 
        <h2 style={{textAlign: "center"}}>
          Ты всё купил!
        </h2>
      }
      
    </div>
  )
}

export default Index