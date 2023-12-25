import { useState } from 'react';

function Slider(prop){
    const [rangeValue, setRangeValue] = useState(0)

    const rangeHasChanged = (event) =>{
        setRangeValue(event.target.value)
    }

    return(
        <div style={{margin:'20px'}}>
        <p style={{fontSize:'larger'}}>{prop.heading}</p>
        <p style={{fontSize:'x-large'}}>{prop.symbol} {rangeValue}</p>
        <input type='range' style={{width:'45%'}} min={prop.min} max={prop.max} onChange={rangeHasChanged}></input>
        <div style={{display:'flex',maxWidth:'45%',justifyContent:'space-between',fontSize:'small',color:'grey'}}>
          <p>{prop.symbol}{prop.min}</p>
          <p>{prop.symbol}{prop.max}</p>
        </div>
        </div>
    );
}

export default Slider;