import React from 'react'
import styles from './button.module.css'

function Button({children, ...rest} : React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={`rounded-md flex gap-1.5 items-center justify-center px-4 py-2 text-white text-normal font-bold ${styles.botao}`} {...rest}>{children}</button>
  )
}

export default Button