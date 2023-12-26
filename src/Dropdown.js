import React, { useState } from 'react'

const Dropdown = (prop) => {
    const [year, yearChange] = useState(5)
    const handleYearChange = (e)=> {
        yearChange(e.target.value)
        prop.getValue(e.target.value)
    }

  return (
    <div style={{margin:'20px'}}>
        <p>Tenure</p>
        <select style={{width:'45%', height:'7vh'}}  value={year} onChange={handleYearChange}>
            <option value={5} >5 Years</option>
            <option value={10} >10 Years</option>
            <option value={15} >15 Years</option>
            <option value={20} >20 Years</option>
        </select>
    </div>
  )
}

export default Dropdown