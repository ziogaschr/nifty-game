import React, { Component } from 'react';

class SendTransaction extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    let self = this;
    this.props.web3.eth.sendTransaction(
      {
        from: this.props.ebakus.account,
        to: this.props.ebakus.account,
        value: this.props.web3.toWei(1, 'ether'),
        data: 'dead',
      },
      function(err, result) {
        if (err) {
          self.props.handleWarningOpen(err.message);
        } else {
          self.props.handleWarningOpen(result);
        }
      }
    );
  }

  render() {
    return (
      <div style={{ padding: '1em', margin: '1em', border: '1px solid black' }}>
        <h1>Send Transaction</h1>
        <div>To: {this.props.ebakus.account}</div>
        <div>Network: {this.props.ebakus.network}</div>
        <button onClick={() => this.handleSubmit()}>Submit</button>
      </div>
    );
  }
}

export default SendTransaction;
