import { useState, useEffect } from 'react'
import { useRequest } from '../hooks/useRequest'
import { useParams, Link } from 'react-router-dom'
import MyLoader from '../components/UI/Loader/MyLoader'
import MyButton from '../components/UI/Button/MyButton'
import PostService from '../Api/PostService'
import styles from './Card.module.scss'

function CardSlug(props) {
 const params = useParams()
 console.log(params.Id)
 const [card, setCard] = useState({})
 const [comment, setComment] = useState([])
 const [getCardById, error, isCardLoading] = useRequest( async () => {
  const responce = await PostService.getCardById(params.Id)
  setCard(responce.data)
 })
 const [getCardCommentById, errorComment, isCardCommentLoading] = useRequest( async () => {
  const responce = await PostService.getCardCommentById(params.Id)
  setComment(responce.data)
 })
  useEffect(()=> {
    getCardById(),
    getCardCommentById()
  }, [])
    return (
      <>
      <MyButton className={styles.btn}>
        <Link to='/cards'>
          Назад
        </Link>
      </MyButton>
        {isCardLoading
        ? <MyLoader/>
        : <div className={styles.container}>
            <div>
              {card.id}
            </div> 
            <div>
              {card.title}
            </div>
            <div>
              Цена: <span>{ card.body?.length }$</span>
            </div>
          </div>
        }
        {isCardCommentLoading
        ? <MyLoader/>
        : <div>
            <h4>Коментарии пользователей:</h4>
            {comment.map( comment =>
            <div className={styles.containerComment}>
               <div>
                Пользователь: {comment.email}
              </div> 
              <div>
                Коментарий: {comment.body}
              </div>
            </div>
            )}
          </div>
        }
      </>
    )
  }
  
  export default CardSlug