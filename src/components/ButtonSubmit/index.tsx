import { useState } from 'react'
import style from './ButtonSubmit.module.scss'

interface Props {
  user:string,
  password:string
}


function ButtonSubmit({user, password}:Props){
  const [logado, setLogado] = useState<boolean>(true)

  function click(){
    if(user === "desafiosharenergy" && password === "sh@r3n3rgy"){
      setLogado(true)
      window.location.pathname = '/adm'
      let token = Math.random().toString(16).substring(2)
      localStorage.setItem('token', token)
      return true
    }else{
      setLogado(false)
      return false
    }
  }
  return (
    <>
      {!logado ? (<span className={style.spanError}>Usuário ou senha incorretos</span>) : ''}
      <button className={style.buttonSubmit} onClick={(e) => click()}>Entrar</button>

    </>
  )
} 

export default ButtonSubmit;