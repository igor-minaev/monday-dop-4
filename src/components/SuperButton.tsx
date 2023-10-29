import React from 'react';
import s from './SuperButton.module.css'

type SuperButtonPropsType = {
    name?: string
    onClick: () => void
    color?: string
    disabled?: boolean
    children?: React.ReactNode
}

export const SuperButton: React.FC<SuperButtonPropsType> = (props) => {
    const {name, onClick, children, color, disabled, ...restProps} = props
    const onClickHandler = () => onClick()
    // const finalClassName = s.button
    //     + (disabled ? ' ' + s.disabled
    //         : color === 'red'
    //             ? ' ' + s.red
    //             : color === 'secondary'
    //                 ? ' ' + s.secondary
    //                 : ' ' + s.default)
    //     + (className ? ' ' + className : '')

    // const finalClassName = `${s.button} ${s.default}`
    // const finalClassName = `${s.button} ${color ? s.red : s.default}`
    // const finalClassName = `${s.button} ${color ? s.red : s.default} ${disabled ? s.disabled : s.default}`
    const finalClassName = `
    ${s.button} 
    ${color === 'red' ? s.red : color === 'secondary' ? s.secondary : s.default} 
    ${disabled ? s.disabled : s.default}`

    return (
        <button onClick={onClickHandler} className={finalClassName}>{children}</button>
    );
};


//1 -------------------------------------------------------
// type SuperButtonPropsType = {
//     name: string
//     onClick: () => void
// }
//
// export const SuperButton = (props: SuperButtonPropsType) => {
//     const onClickHandler = () => props.onClick()
//     return (
//         <button onClick={onClickHandler}>{props.name}</button>
//     );
// };

//2 --------------------------------------------------------
// type SuperButtonPropsType = {
//     name: string
//     onClick: () => void
// }
//
// export const SuperButton: React.FC<SuperButtonPropsType> = ({name, onClick}) => {
//     const onClickHandler = () => onClick()
//     return (
//         <button onClick={onClickHandler}>{name}</button>
//     );
// };

//3 ---------------------------------------------------------
// type SuperButtonPropsType = {
//     name: string
//     onClick: () => void
//     color:string
// }
//
// export const SuperButton: React.FC<SuperButtonPropsType> = (props) => {
//     const {name, onClick,...restProps} = props
//     const onClickHandler = () => onClick()
//     return (
//         <button onClick={onClickHandler}>{name}</button>
//     );
// };
