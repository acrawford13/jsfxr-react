import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './components/input/input';
import './js/jsfxr';

class App extends Component {
  state = {
    jsfxr: {
      waveType: {
        desc: "Shape of the wave (0:square, 1:saw, 2:sin or 3:noise)",
        label: 'Wave Type',
        value: 0,
        min: 0,
        max: 3,
        step: 1,
        type: 'wavetype',
        section: 'shape',
        options: ['Square', 'Saw', 'Sine', 'Noise'],
      },
      attackTime: {
        desc: "Length of the volume envelope attack (0 to 1)",
        label: 'Attack Time',
        value: 0,
        min: 0,
        max: 1,
        step: 0.0001,
        type: 'slider',
        section: 'attackSustain',
      },
      sustainTime: {
        desc: "Length of the volume envelope sustain (0 to 1)",
        label: 'Sustain Time',
        value: 0.1812,
        min: 0,
        max: 1,
        step: 0.0001,
        type: 'slider',
        section: 'attackSustain',
      },
      sustainPunch: {
        desc: "Tilts the sustain envelope for more 'pop' (0 to 1)",
        label: 'Sustain Punch',
        value: 0,
        min: 0,
        max: 1,
        step: 0.0001,
        type: 'slider',
        section: 'attackSustain',
      },
      decayTime: {
        desc: "Length of the volume envelope decay (yes, I know it's called release) (0 to 1)",
        label: 'Decay Time',
        value: 0.1349,
        min: 0,
        max: 1,
        step: 0.0001,
        type: 'slider',
        section: 'attackSustain',
      },
      startFrequency: {
        desc: "Base note of the sound (0 to 1)",
        label: 'Start Frequency',
        value: 0.4524,
        min: 0,
        max: 1,
        step: 0.0001,
        type: 'slider',
        section: 'general',
      },
      minFrequency: {
        desc: "If sliding, the sound will stop at this frequency, to prevent really low notes (0 to 1)",
        label: 'Min Frequency',
        value: 0,
        min: 0,
        max: 1,
        step: 0.0001,
        type: 'slider',
        section: 'general',
      },
      slide: {
        desc: "Slides the note up or down (-1 to 1)",
        label: 'Slide',
        value: 0.2365,
        min: -1,
        max: 1,
        step: 0.0001,
        type: 'slider',
        section: 'general',
      },
      deltaSlide: {
        desc: "Accelerates the slide (-1 to 1)",
        label: 'Delta Slide',
        value: 0,
        min: -1,
        max: 1,
        step: 0.0001,
        type: 'slider',
        section: 'general',
      },
      vibratoDepth: {
        desc: "Strength of the vibrato effect (0 to 1)",
        label: 'Vibrato Depth',
        value: 0,
        min: 0,
        max: 1,
        step: 0.0001,
        type: 'slider',
        section: 'general',
      },
      vibratoSpeed: {
        desc: "Speed of the vibrato effect (i.e. frequency) (0 to 1)",
        label: 'Vibrato Speed',
        value: 0,
        min: 0,
        max: 1,
        step: 0.0001,
        type: 'slider',
        section: 'general',
      },
      changeAmount: {
        desc: "Shift in note, either up or down (-1 to 1)",
        label: 'Change Amount',
        value: 0,
        min: -1,
        max: 1,
        step: 0.0001,
        type: 'slider',
        section: 'change',
      },
      changeSpeed: {
        desc: "How fast the note shift happens (only happens once) (0 to 1)",
        label: 'Change Speed',
        value: 0,
        min: 0,
        max: 1,
        step: 0.0001,
        type: 'slider',
        section: 'change',
      },
      squareDuty: {
        desc: "Controls the ratio between the up and down states of the square wave, changing the tibre (0 to 1)",
        label: 'Square Duty',
        value: 0.0819,
        min: 0,
        max: 1,
        step: 0.0001,
        type: 'slider',
        section: 'general',
      },
      dutySweep: {
        desc: "Sweeps the duty up or down (-1 to 1)",
        label: 'Duty Sweep',
        value: 0,
        min: -1,
        max: 1,
        step: 0.0001,
        type: 'slider',
        section: 'general',
      },
      repeatSpeed: {
        desc: "Speed of the note repeating - certain variables are reset each time (0 to 1)",
        label: 'Repeat Speed',
        value: 0,
        min: 0,
        max: 1,
        step: 0.0001,
        type: 'slider',
        section: 'general',
      },
      phaserOffset: {
        desc: "Offsets a second copy of the wave by a small phase, changing the tibre (-1 to 1)",
        label: 'Phaser Offset',
        value: 0,
        min: -1,
        max: 1,
        step: 0.0001,
        type: 'slider',
        section: 'phaser',
      },
      phaserSweep: {
        desc: "Sweeps the phase up or down (-1 to 1)",
        label: 'Phaser Sweep',
        value: 0,
        min: -1,
        max: 1,
        step: 0.0001,
        type: 'slider',
        section: 'phaser',
      },
      lpFilterCutoff: {
        desc: "Frequency at which the low-pass filter starts attenuating higher frequencies (0 to 1)",
        label: 'LP Filter Cutoff',
        value: 1,
        type: 'slider',
        min: 0,
        max: 1,
        step: 0.0001,
        type: 'slider',
        section: 'filters',
      },
      lpFilterCutoffSweep: {
        desc: "Sweeps the low-pass cutoff up or down (-1 to 1)",
        label: 'LP Filter Cutoff Sweep',
        value: 0,
        min: -1,
        max: 1,
        step: 0.0001,
        type: 'slider',
        section: 'filters',
      },
      lpFilterResonance: {
        desc: "Changes the attenuation rate for the low-pass filter, changing the timbre (0 to 1)",
        label: 'LP Filter Resonance',
        value: 0,
        min: 0,
        max: 1,
        step: 0.0001,
        type: 'slider',
        section: 'filters',
      },
      hpFilterCutoff: {
        desc: "Frequency at which the high-pass filter starts attenuating lower frequencies (0 to 1)",
        label: 'HP Filter Cutoff',
        value: 0,
        min: 0,
        max: 1,
        step: 0.0001,
        type: 'slider',
        section: 'filters',
      },
      hpFilterCutoffSweep: {
        desc: "Sweeps the high-pass cutoff up or down (-1 to 1)",
        label: 'HP Filter Cutoff Sweep',
        value: 0,
        min: -1,
        max: 1,
        step: 0.0001,
        type: 'slider',
        section: 'filters',
      },
      masterVolume: {
        desc: "Overall volume of the sound (0 to 1)",
        label: 'Master Volume',
        value: 0.5,
        min: 0,
        max: 1,
        step: 0.0001,
        type: 'slider',
        section: 'masterVolume',
      }
    },
    playOnChange: true,
  }
  sections = ['shape', 'masterVolume', 'attackSustain', 'phaser', 'filters', 'change', 'general'];

  constructor() {
    super();
    this.state.jsfxr = this.randomise();
  }

  roundVal = (control, value) => {
    return Math.round(value * (1/control.step)) / (1/control.step);
  }

  randomVal = (control, power=1) => {
    console.log(control, power);
    let value = Math.pow(Math.random() * (control.max - control.min) + control.min, power);
    return value;
  }

  randomise = () => {
    const jsfxr = {...this.state.jsfxr};
    for (let key in jsfxr) {
      const control = {...jsfxr[key]};
      let randomVal, power;
      switch(key){
          case 'masterVolume':
          case 'minFrequency':
            randomVal = control.value;
            break;
          case 'decayTime':
            power = 1;
          case 'sustainTime':
            power = power || 2;
          case 'dutySweep':
          case 'phaserOffset':
          case 'phaserSweep':
          case 'lpFilterCutoffSweep':
          case 'deltaSlide':
          case 'vibratoDepth':
            power = power || 3;
          case 'attackTime':
            power = power || 4;
          case 'slide':
          case 'hpFilterCutoff':
          case 'hpFilterCutoffSweep':
            power = power || 5;
            randomVal = this.randomVal(jsfxr[key], power);
            break;
          case 'waveType':
            randomVal = Math.floor(Math.random()*4);
            break;
          case 'lpFilterCutoff':
            randomVal = 1 - this.randomVal(jsfxr[key], 3);
            break;
          case 'sustainPunch':
            randomVal = Math.pow(Math.random()*0.8, 2);
            break;
          default:
            randomVal = this.randomVal(jsfxr[key]);
            console.log('default', key);
            break;
        }
        randomVal = this.roundVal(control, randomVal);
        control.value = randomVal;
        jsfxr[key] = control;
    }
    return jsfxr;
  }

  newSound = value => {
    const jsfxr = {...this.state.jsfxr};
    let index = 0;
    for (let key in jsfxr) {
      const control = {...jsfxr[key]};
      control.value = +value.split(',')[index] || 0;
      jsfxr[key] = control;
      index++;
    }
    this.setState({
      jsfxr: jsfxr,
    });
  }

  updateValue = (parameter, value) => {
    const jsfxr = {...this.state.jsfxr};
    const control = {...jsfxr[parameter]};
    control.value = value;
    jsfxr[parameter] = control
    this.setState({
      jsfxr: jsfxr,
    });
  }

  render() {
    const soundString = Object.keys(this.state.jsfxr).map(d => this.state.jsfxr[d].value);
    return (
      <div className="App">
        <button onClick={() => {this.setState({jsfxr: this.randomise()})}}>Randomise</button>
        <audio src={window.jsfxr(soundString.map(d => +d))} autoPlay={this.state.playOnChange} />
        <textarea
          onChange={(e) => this.newSound(e.target.value)}
          value={soundString.map(d => +d||'').join(',')}
          />
        {this.sections.map(key => (
          <div className="section" key={key}>
            {Object.keys(this.state.jsfxr)
              .filter(d=>this.state.jsfxr[d].section==key)
              .map(d => (
              <Input key={d} changed={this.updateValue} control={{'key': d, ...this.state.jsfxr[d]}} />
            ))}
          </div>)
        )}
      </div>
    );
  }
}

export default App;
