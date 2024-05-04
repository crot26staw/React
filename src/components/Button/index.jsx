import './index.scss'

function Button ({func}) {
    return (
        <button onClick={func}><span>+</span> Добавить</button>
    )
}

export default Button