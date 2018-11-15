import React from 'react'
import hiImport from 'hookedin-lib'


export default class Repl extends React.Component {

  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onRun = this.onRun.bind(this);
    this.state = {
      value: this.props.children,
      result: null,
    }
  }

  onChange(event) {
    this.setState({
      value: event.target.value,
      result: null,
    });
  }

  onRun() {
    let r;
    try {
      // eslint-disable-next-line
      const hi = hiImport;
      // eslint-disable-next-line
      r = eval(this.state.value);
    } catch (ex) {
      this.setState({ result: "Caught exception: " + ex });
      return;
    }

    this.setState({ result: <div>Got result: {r.toString()}</div>})
  }

  render() {
    return <div>
      <textarea style={ { display: 'block' }}
                value={this.state.value} onChange={ this.onChange } cols={80} rows={3} />
      <button onClick={ this.onRun }>Run!</button> { this.state.result }
    </div>
  }
}

