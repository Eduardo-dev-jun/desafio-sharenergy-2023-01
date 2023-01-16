import style from './Users.module.scss'
import UserCard from '../../components/UserCard'
import Navigation from '../../components/Navigation'
import CheckToken from '../../hooks/checkToken';
import Footer from '../../components/Footer';
import Pagination from '../../components/Pagination/Pagination';
import { useEffect, useState } from 'react';
import axios from 'axios';



interface logins{
  gender: string,
  name:{
    title:string,
    first: string,
    last:string
  },
  email: string,
  picture:{
    large:string,
    medium:string,
    thumbnail:string,
  },
  login:{
    username: string,
  },
  dob:{
    age: string
  }
}


export default function Users(){
  CheckToken()
  const [offset, setOffset] = useState(0);
  const [data, setData] = useState<logins[] | null>(null)
  const [search, setSearch] = useState('');

  const current = offset ? offset / 5 + 1 : 1

  const pg = data? setPg(data) : null

  function setPg(data:logins[]){
    if(search.length > 0){
      const usuarioFiltrado = data?.filter((usuario)=> usuario.login.username.startsWith(search))

      return usuarioFiltrado

    }else{
      const pg = []
      for(let i = current*5 - 5; i < current*5; i++){
        pg.push(data[i])
      }

      return pg
      
    }
  }

  const urlLogins = `https://randomuser.me/api/?results=20`
  
  
  useEffect(() => {
    axios.get(urlLogins)
    .then((r) => {setData(r.data.results)
    })
    .catch((err) => {console.error(err)})
  }, [urlLogins])
  
  

  return(
    <>
      <Navigation pagina="Random Users"/>
      <div className={style.divSearch}>
        <input className={style.search} type="text" value={search} onChange={(element) => {setSearch(element.target.value)}} placeholder='Pesquisa'/>
      </div>
      {
      
      pg?.map(repo => {
          return(
            <UserCard key={repo.name.first} img={repo.picture.large} name={repo.name.title + " " +repo.name.first + " " + repo.name.last} age={repo.dob.age} email={repo.email} user={repo.login.username}/>
          )
      })
  
      }
      <Pagination limit={5} total={20} offset={offset} setOffset={setOffset}/>
      <Footer/>
    </>
  )
}
