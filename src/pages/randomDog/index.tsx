import axios from "axios";
import { useState } from "react";
import style from './RandomDog.module.scss'
import Navigation from "../../components/Navigation";
import CheckToken from "../../hooks/checkToken";
import Footer from "../../components/Footer";

interface ApiRandomDog{
  url:string,
  fileSizeBytes:string
}

export default function RandomDog(){
  CheckToken()
  const [data, setData] = useState<string>();

  const randomDogApi = 'https://random.dog/woof.json'


  async function apiClick(){
    await axios.get(randomDogApi)
    .then(response => {
      setData(response.data.url)
    })
  }
  
  window.onload = () => {
    apiClick()
  }

  function imgOrVideo(response:string | undefined){
    if(response?.endsWith('jpg') || response?.endsWith('JPG') || response?.endsWith('png') || response?.endsWith('PNG') || response?.endsWith('gif') || response?.endsWith('GIF')){
      return true
    }else{
      return false
    }
  }
  
  return(
    <>
    <Navigation pagina="Random Dog"/>
    <div className={style.divWrapper}>
      <button className={style.RefreshBtn} onClick={(e) => apiClick()}>Refresh</button>
      {imgOrVideo(data) ? <img className={style.img} src={data} alt="" /> : <video className={style.img} src={data} autoPlay loop muted></video>}
    </div>
    <Footer/>
    </>
  )
}
