import React from 'react';

const select = (props) => {
  return (
    <div>
      {props.control.options.map((d, i) => <button onClick={(e) => props.changed(props.control.key, e.target.value)} value={i}>{d}</button>)}
    </div>
  )
}
 
export default select;