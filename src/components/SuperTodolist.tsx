import React from 'react';

type TaskType = {
    id: number
    title: string
    isDone: boolean
}
type SuperTodolistPropsType = {
    tasks: TaskType[]
    children: React.ReactNode
}
export const SuperTodolist: React.FC<SuperTodolistPropsType> = (props) => {
    const {tasks,children, ...restProps} = props
    return (
        <>
            <ul>
                {tasks.map(t => {
                    return (
                        <li key={t.id}>
                            <input type='checkbox' checked={t.isDone}/>
                            <span>{t.title}</span>
                        </li>
                    )
                })}
            </ul>
            {children}
            <hr/>
        </>
    );
};
