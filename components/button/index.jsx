import { useSelector } from 'react-redux';
import style from './button.module.css';

function Button({ title, onClick, color }) {
  const loadingData = useSelector((state) => state.loadingReducer);

  if (loadingData.loadingStatus) {
    return (
      <button type="submit" disabled>Loading...</button>
    );
  }
  if (color === 'red') {
    return (
      <button type="submit" className={style.danger} onClick={onClick}>{title}</button>
    );
  }
  if (color === 'yellow') {
    return (
      <button type="submit" className={style.warning} onClick={onClick}>{title}</button>
    );
  }
  return (
    <button type="submit" className={style.default} onClick={onClick}>{title}</button>
  );
}

export default Button;
