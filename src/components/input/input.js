import React from 'react';
import Slider from '../slider/slider';
import Select from '../select/select';

const input = (props) => {
  return (
    <div className="control">
      <div className="input" title={props.control.desc}>
        <label>{props.control.label}</label>
        {props.control.type === 'slider' ?
          <Slider changed={props.changed} control={props.control} /> :
          <Select changed={props.changed} control={props.control} />}
      </div>
    </div>
  );
}

export default input;