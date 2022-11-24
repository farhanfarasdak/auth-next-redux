import { useSelector } from "react-redux"
import style from './button.module.css'

const Button = ({title, onClick, color}) => {
  const loadingData = useSelector((state) => {
    return state.loadingReducer
  })

  if(loadingData.loadingStatus){
    return(
      <button disabled>Loading...</button>
    )
  }else{
    if(color === 'red'){
      return(
        <button className={style.danger} onClick={onClick}>{title}</button>
      )
    }
    if(color === 'yellow'){
      return(
        <button className={style.warning} onClick={onClick}>{title}</button>
      )
    }else{
      return(
        <button className={style.default} onClick={onClick}>{title}</button>
      )
    }
  }
  
}

export default Button