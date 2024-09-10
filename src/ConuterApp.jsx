import PropTypes, { number } from 'prop-types'
import { FirstApp } from './FirstApp'
import { useState } from 'react'


export const CounterApp = ({ value }) => {

    const [counter, setConuter] = useState(value)

    const handleAdd = () => {

        setConuter(counter + 1);
    }

    const handleSubtract = () => {

        setConuter(counter - 1);
    }

    const handleReset = () => {

        setConuter(value);
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2> {counter} </h2>

            <div className='btns'>
                <button onClick={handleAdd}>
                    +1
                </button>
                <button onClick={handleSubtract}>
                    -1
                </button>
                <button onClick={handleReset}>
                    Reset
                </button>
            </div>
        </>
    )
}



CounterApp.protoTypes = {
    value: PropTypes.number.isRequired
}