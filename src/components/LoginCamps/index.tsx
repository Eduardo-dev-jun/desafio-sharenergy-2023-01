import style from './LoginCamps.module.scss'
import ButtonSubmit from '../ButtonSubmit'
import { useState } from 'react'
import Crypt from '../../hooks/crypst'
import Decrypt from '../../hooks/dectypt'


function LoginCamps(){
  const [user, setUser] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  window.onload = () => {
    autoLoadUser(localStorage.getItem('Login'))
    autoLoadPassword(localStorage.getItem('Senha'))
  }

  function rememberme(e:boolean){
    if (e) {
      localStorage.setItem('Login', user)
      localStorage.setItem('Senha', Crypt(password))
    }else{
      localStorage.removeItem('Login')
      localStorage.removeItem('Senha')
    }
  }

  function autoLoadUser(local:string|null){
    if (local) {
      setUser(local)
    }else return
  }

  function autoLoadPassword(local:string|null){
    if (local) {
      setPassword(Decrypt(local))
    }else return
  }

  function callAutoLoads(localLogin:string|null, localSenha:string|null){
    autoLoadUser(localLogin)
    autoLoadPassword(localSenha)
  }

  return(
    <>
      <input type="text" className={style.user} placeholder='Usuario' onChange={(e) => {setUser(e.target.value)}} value={user} required autoFocus onFocus={() => {callAutoLoads(localStorage.getItem('Login'), localStorage.getItem('Senha'))}}/>
      <input type="password" className={style.password} placeholder='Password' onChange={(e) => {setPassword(e.target.value)}} value={password} required/>
      <div className={style.divCheckBox}>
        <input name='remember' id='remember' type="checkbox" onChange={(e) => {rememberme(e.target.checked)}} />
        <label htmlFor="remember">Remember-Me</label>
      </div>
      <ButtonSubmit user={user} password={password}/>
    </>
  )
}

export default LoginCamps;