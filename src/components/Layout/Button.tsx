import React, {ReactNode }  from "react";
import styles from './Button.module.css';

export type buttonType = {
    className?:string;
    onClick:()=>void;
    children: ReactNode;
}

const Button:React.FC<buttonType> = ({className,onClick,children,...rest}) =>{
    return <button className={className ? className : styles.button} onClick={onClick} {...rest}>
       {children}
    </button>
}

export default Button;