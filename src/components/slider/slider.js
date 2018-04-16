import React, { Fragment } from 'react';

const slider = (props) => {
  return (
    <Fragment>
      <input
          onChange={(e) => props.changed(props.control.key, e.target.value)}
          value={props.control.value}
          type="range"
          min={props.control.min}
          max={props.control.max}
          step={props.control.step} />
      <input
        style={{
          textAlign: 'center',
        }}
        onChange={(e) => props.changed(props.control.key, e.target.value)}
        value={props.control.value}
        type="text"
        min={props.control.min}
        max={props.control.max}
        step={props.control.step} />
    </Fragment>
  )
}
    
export default slider;