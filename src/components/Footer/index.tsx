import style from './Footer.module.scss'

export default function Footer(){
  return(
    <footer className={style.divFooter}>
      <a className={style.developedBy} href="https://github.com/Eduardo-dev-jun/">Developed by Eduardo-dev-jun</a>
    </footer>
  )
}