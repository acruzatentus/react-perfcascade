import React, { Component } from 'react';
import { fromHar } from 'perf-cascade';

import "perf-cascade/dist/perf-cascade.css";

export class PerfCascade extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
      }
    render = () => <div ref={this.myRef} />

    shouldComponentUpdate = () => false;

    componentDidMount = () => {
        const perfCascadeSvg = fromHar(this.props.harData);
        this.myRef.current.appendChild(perfCascadeSvg);
    }
}