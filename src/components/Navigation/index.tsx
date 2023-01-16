import style from './Navigation.module.scss'

interface Props{
  pagina:string,
  txtButton?:string,
  path?:string
}

export default function Navigation({pagina, txtButton = 'Home', path = '/adm'}:Props){
  function buttonClick(){
    window.location.pathname = path
    if (path === '/') {
      localStorage.removeItem('token')
    }
  }
  return(
    <div className={style.divNav}>
      <h1>{pagina}</h1>
      <button className={style.buttonHome} onClick={(e) => {buttonClick()}}>{txtButton}</button>
    </div>
  )
}