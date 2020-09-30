import React, { PropsWithChildren } from 'react'

interface ButtonProps{
     color: string
}


const Button = (props: PropsWithChildren<ButtonProps>) =>{
const {color,children} = props
    return(
    <span>
     {props.children}
    </span>
    )
}

export default Button
