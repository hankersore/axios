import './ToDo.css';

export default function ToDo (props) {
    return (
        <>
         <div className='todo'>
            <h3>{props.id}</h3>
            <h3>{props.title}</h3>
            <h3>{props.completed ? 'completed ✅' : 'not completed ❌'}</h3>
        </div>
        </>
    )
}