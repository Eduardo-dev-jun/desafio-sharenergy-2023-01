import style from './UserCard.module.scss'


interface Props{
  img: string,
  name: string,
  age: string
  email: string,
  user: string,

}

export default function UserCard({img, name, age, email, user}: Props){
  return(
    <>
      <div className={style.cardUser}>
        <img src={img} alt="" />
        <h1>{name}</h1>
        <p>{age}</p>
        <p>{email}</p>
        <p>{user}</p>
      </div>
    </>
  )
}