import React, { Component } from 'react';
import Web3 from 'web3';
import Button from 'material-ui/Button';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';
import Slide from 'material-ui/transitions/Slide';

const messages = {
  LOAD_MATAMASK_WALLET_ERROR:
    'Load ebakus wallet error, maybe try Ebakus later, or upload a wallet json file.',
  EMPTY_EBAKUS_ACCOUNT: 'You can choose one Ebakus wallet by unlocking it',
  EBAKUS_ACCOUNT: 'You have choosen the MetamMask Wallet: ',
  NETWORK_ERROR: 'Network error, please check it.',
  EBAKUS_NOT_INSTALL: 'You must install Ebakus before start.',
  EBAKUS_TEST_NET:
    'Our game is available on Ropsten Test Network only. Please switch via Ebakus!',
};

const EbakusInstallDialog = props => (
  <Dialog
    className="EbakusDialog"
    open={props.ebakusInstallDialogOpen}
    transition={Slide}
  >
    <DialogTitle>{"Oops, you haven't installed Ebakus"}</DialogTitle>
    <DialogContent>
      <DialogContentText>
        {'What is Ebakus? '}
        <a href="https://ebakus.io/" target="_blank">
          Link
        </a>
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button
        raised
        href="https://chrome.google.com/webstore/detail/ebakus/nkbihfbeogaeaoehlefnkodbefgpgknn?utm_source=chrome-ntp-icon"
        color="primary"
      >
        Install Ebakus
      </Button>
      <Button
        raised
        onClick={props.handleEbakusInstallDialogClose}
        color="primary"
      >
        I understand, continue
      </Button>
    </DialogActions>
  </Dialog>
);

const EbakusLockDialog = props => (
  <Dialog
    className="EbakusDialog"
    open={props.ebakusLockDialogOpen}
    transition={Slide}
  >
    <DialogTitle>{'Oops, your Ebakus is locked'}</DialogTitle>
    <DialogContent>
      <DialogContentText>{props.message}</DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button
        raised
        onClick={props.handleEbakusLockDialogClose}
        color="primary"
      >
        OK
      </Button>
    </DialogActions>
  </Dialog>
);

export class Ebakus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      ebakusInstallDialogOpen: false,
      ebakusLockDialogOpen: false,
      disableDialog: false,
    };
    this.handleEbakusInstallDialogClose = this.handleEbakusInstallDialogClose.bind(
      this
    );
    this.handleEbakusLockDialogClose = this.handleEbakusLockDialogClose.bind(
      this
    );
  }

  fetchWeb3() {
    let web3 = window.web3;
    if (typeof web3 === 'undefined') {
      this.props.setWeb3(null);
      this.setState({ message: messages.EBAKUS_NOT_INSTALL });
    }
  }

  fetchAccounts() {
    //const { web3 } = window;
    if (this.props.web3 !== null) {
      this.props.web3.eth.getAccounts((err, accounts) => {
        if (err) {
          this.setState({ message: messages.LOAD_MATAMASK_WALLET_ERROR });
        } else {
          if (accounts.length === 0) {
            this.props.handleEbakusAccount(null);
            this.setState({
              ebakusLockDialogOpen: true,
              message: messages.EMPTY_EBAKUS_ACCOUNT,
            });
          } else {
            // if account changed then change redux state
            if (accounts[0] !== this.props.ebakus.account) {
              this.props.handleEbakusAccount(accounts[0]);
            }
          }
        }
      });
    }
  }

  fetchNetwork() {
    //const { web3 } = window;
    if (this.props.web3 !== null) {
      this.props.web3.version.getNetwork((err, netId) => {
        console.log('netId:', netId);
        if (netId === '1') {
          this.props.handleEbakusNetwork(null);
          this.setState({
            ebakusLockDialogOpen: true,
            message: messages.EBAKUS_TEST_NET,
          });
        }

        if (err) {
          this.props.handleEbakusNetwork(null);
          this.setState({
            ebakusLockDialogOpen: true,
            message: messages.NETWORK_ERROR,
          });
        } else {
          // if network changed then change redux state
          if (netId !== this.props.ebakus.network) {
            this.props.handleEbakusNetwork(netId);
          }
        }
      });
    }
  }

  componentDidMount() {
    let self = this;
    window.addEventListener('load', function() {
      let web3 = window.web3;
      if (typeof web3 !== 'undefined') {
        window.web3 = new Web3(web3.currentProvider);
        self.props.setWeb3(window.web3);
        self.fetchAccounts();
        self.fetchNetwork();
        self.Web3Interval = setInterval(() => self.fetchWeb3(), 1000);
        self.AccountInterval = setInterval(() => self.fetchAccounts(), 1000);
        self.NetworkInterval = setInterval(() => self.fetchNetwork(), 1000);
      } else {
        self.setState({
          ebakusInstallDialogOpen: true,
          message: messages.EBAKUS_NOT_INSTALL,
        });
      }
    });
  }

  componentWillUnmount() {
    clearInterval(this.Web3Interval);
    clearInterval(this.AccountInterval);
    clearInterval(this.NetworkInterval);
  }

  handleEbakusInstallDialogClose() {
    this.setState({ ebakusInstallDialogOpen: false, disableDialog: true });
  }

  handleEbakusLockDialogClose() {
    this.setState({ ebakusLockDialogOpen: false, disableDialog: true });
  }

  render() {
    const ebakusInstall = this.state.disableDialog === false && (
      <EbakusInstallDialog
        {...this.state}
        handleEbakusInstallDialogClose={this.handleEbakusInstallDialogClose}
      />
    );

    const ebakusLock = this.state.disableDialog === false && (
      <EbakusLockDialog
        {...this.state}
        handleEbakusLockDialogClose={this.handleEbakusLockDialogClose}
      />
    );

    return (
      <div className="Ebakus">
        {ebakusInstall}
        {ebakusLock}
      </div>
    );
  }
}
