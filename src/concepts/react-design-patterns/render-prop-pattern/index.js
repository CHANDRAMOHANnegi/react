import React from 'react'
import Input from './Input';

const RenderPropPattern = () => {

    const showValue = (value) => <b>The value is {value}</b>;
    const multiplyByTen = (value) => <>The multiplied value is {value * 10}</>;

    return (
        <div className="App">
            <Input renderTextBelow={showValue} />
            <br />
            <Input renderTextBelow={multiplyByTen} />
        </div>
    );
}

export default RenderPropPattern