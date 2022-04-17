import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../redux/action/counterAction';

const Counter = () => {
    const dispatch = useDispatch();
    const count = useSelector(state => state.counterReducer.count);

    const handleIncrement = () => {
        dispatch(increment());
    }

    const handleDecrement = () => {
        dispatch(decrement());
    }

    const btnStyle = {padding:'10px 25px', fontSize:30};
    const countStyle = {margin:'10px 25px', fontSize:40};
    const containerStyle = { display: 'flex', alignItems: 'center', justifyContent: 'center'};

    return (
        <div>
            <h1>Hi, I'm Counter</h1>
            <div style={containerStyle}>
                <button style={btnStyle} onClick={handleDecrement}>-</button>
                <h2 style={countStyle}>{count}</h2>
                <button style={btnStyle} onClick={handleIncrement}>+</button>
            </div>
        </div>
    )
}

export default Counter
