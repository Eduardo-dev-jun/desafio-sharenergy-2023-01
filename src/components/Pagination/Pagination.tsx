import { Dispatch, SetStateAction } from 'react';
import style from './Pagination.module.scss'

const maxItems = 9;
const maxLeft = (maxItems - 1) / 2;

interface Props{
  limit: number,
  total: number,
  offset: number,
  setOffset: Dispatch<SetStateAction<number>>
}

export default function Pagination({ limit, total, offset, setOffset }: Props){
  const current = offset ? offset / limit + 1 : 1
  const pages = Math.ceil(total / limit);
  const first = Math.max(current - maxLeft, 1);

  function onPageChange(page:number) {
    setOffset((page - 1) * limit)
  }

  return(
    <ul className={style.pagination}>
      <li>
        <button
          onClick={() => onPageChange(current - 1)}
          disabled={current === 1}
        >
          Anterior
        </button>
      </li>
      {Array.from({ length: Math.min(maxItems, pages) })
        .map((_, index) => index + first)
        .map((page) => (
          <li key={page}>
            <button
              onClick={() => onPageChange(page)}
              className={
                page === current
                  ? style.activePagination
                  : ''
              }
            >
              {page}
            </button>
          </li>
        ))}
        <li>
        <button
          onClick={() => onPageChange(current + 1)}
          disabled={current === pages}
        >
          Próxima
        </button>
      </li>
    </ul>
  )
}