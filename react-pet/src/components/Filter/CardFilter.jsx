import MyInput from '../UI/Input/MuInput'
import MySelect from '../UI/Select/MySelect'

function CardFilter({filter, setFilter}) {
  return (
  <>
    <MyInput
      placeholder="Поиск..."
      value={filter.query}
      onChange={e => setFilter({...filter, query:e.target.value})}
    />
    <MySelect
      value={filter.sort}
      onChange={selectedSort => setFilter({...filter, sort:selectedSort})}
      defaultValue="Сортировать по"
      options= {[
        {value:'title', name:'По названию'},
        {value:'body', name:'По цене'},
      ]}
    />
  </>
  )
}

export default CardFilter