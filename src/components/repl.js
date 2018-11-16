import React from 'react'
import hiImport from 'hookedin-lib'


export default class Repl extends React.Component {

  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onRun = this.onRun.bind(this);
    this.state = {
      value: this.props.children,
      result: Repl.run(this.props.children),
    }
  }

  static run(code) {
    let r;
    try {
      // eslint-disable-next-line
      const hi = hiImport;
      // eslint-disable-next-line
      r = eval(code);
    } catch (ex) {
      console.error(ex);
      return "Caught exception " + ex + " and logged to browser console";
    }

    return (typeof r === 'string') ? r : JSON.stringify(r, null, 4);
  }

  onChange(event) {
    this.setState({
      value: event.target.value,
      result: null,
    });
  }

  onRun() {
    this.setState({ result: Repl.run(this.state.value) })
  }

  info() {
    if (this.state.result) {
      return <span><strong>Result: </strong>{ this.state.result }</span>
    } else {
      return <small>Code will execute unsandboxed. Do not run untrusted code.</small>
    }

  }



  render() {
    return <div>
      <textarea style={ { display: 'block' }}
                value={this.state.value} onChange={ this.onChange } cols={80} rows={3} />
      {  this.info() }<button onClick={ this.onRun }>Run!</button>
    </div>
  }
}

