import style from './Login.module.scss'
import LoginCamps from '../LoginCamps'
import Footer from '../Footer'

function CardLogin(){
  return(
    <>
      <form className={style.card} onSubmit={(e) => {e.preventDefault()}}>
        <LoginCamps/>
      </form>
      <Footer/>
    </>
  )
}

export default CardLogin;