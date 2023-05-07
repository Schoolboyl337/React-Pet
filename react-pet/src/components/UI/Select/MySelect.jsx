import classes from './MySelect.module.scss'

function MySelect({options, defaultValue, value, onChange}) {
  return (
    <select
      value={value}
      onChange={event => onChange(event.target.value)}
      className={classes.container}
    >
      <option disabled value="">{defaultValue}</option>
      {options.map(option => 
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      )}
    </select>
  )
}

export default MySelect