import React from 'react'
import clsx from 'clsx';

const Button = ({icon, className, type, label, onClick = ()=>{} }) => {
  return (<>

    <button type={type || "button"} className={clsx("px-3 py-2 outline-none round", className)}>
      <span>
        {label}
      </span>
      {icon && icon}
    </button></>
  )
}

export default Button;
