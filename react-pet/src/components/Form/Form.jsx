import classes from './Form.module.scss'
import MyButton from '../UI/Button/MyButton'
import MyInput from '../UI/Input/MuInput'
import { useState, useRef } from 'react'

function Form({createCard,...props}) {
  const [title,setTitle] = useState('')
  const price = useRef()
  const addNewCard = (e) => {
    e.preventDefault();
    const newCard = {
      id: Date.now(),
      title,
      price: price.current.value
    }
    createCard(newCard);
    setTitle('');
    price.current.value = '';
  }
  return (
    <form className={classes.formContainer}>
      <MyInput
        value={title}
        onChange={e => setTitle(e.target.value)}
        type='text'
        placeholder="Товар"
      />
      <MyInput
        type='text'
        placeholder="Цена"
        ref={price}
      />
      <MyButton onClick={addNewCard}>Добавить</MyButton>
    </form>
  )
}

export default Form