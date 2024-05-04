import './index.scss'

function Input ({ value, func }) {
    return (
        <input className='main__input' type="text" value={value} placeholder='Название' onInput={func} />
    )
}

export default Input