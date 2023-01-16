import CheckToken from '../../hooks/checkToken'
import style from './adm.module.scss'
import Navigation from "../../components/Navigation";
import Footer from '../../components/Footer';

export default function Adm(){
  CheckToken()

  return(
    <>
    <Navigation pagina='Administrativo' txtButton='Logout' path='/'/>
    <div className={style.divAdm}>
      <button className={style.buttonsAdm} onClick={(e) => {window.location.pathname = '/users'}}>Random Users</button>
      <button className={style.buttonsAdm} onClick={(e) => {window.location.pathname = '/randomDog'}}>Random Dog</button>
      <button className={style.buttonsAdm} onClick={(e) => {window.location.pathname = '/httpCat'}}>Http Cat</button>
    </div>
    <Footer/>
    </>
  )
}