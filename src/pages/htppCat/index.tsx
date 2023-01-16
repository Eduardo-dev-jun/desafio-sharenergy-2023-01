import {  useState } from "react";
import style from './httpCat.module.scss'
import Navigation from "../../components/Navigation";
import CheckToken from "../../hooks/checkToken";
import Footer from "../../components/Footer";


export default function HttpCat(){
  CheckToken()

 const httpCat = 'https://http.cat/'

 const [codigo, setCodigo] = useState<string>("")

  
  return(
    <>
    <Navigation pagina="Http Cat"/>
    <div className={style.divWrapper}>
      <input className={style.inputCode} type="text" onChange={(e) => {setCodigo(e.target.value)}} placeholder="Código"/>
      <img className={style.img} src={httpCat + codigo} alt="" />
    </div>
    <Footer/>
    </>
  )
}