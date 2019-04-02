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
import { getProvider } from '../../lib/web3Service';

const messages = {
  LOAD_MATAMASK_WALLET_ERROR:
    'Load ebakus wallet error, maybe try Ebakus later, or upload a wallet json file.',
  EMPTY_EBAKUS_ACCOUNT: 'You can choose one Ebakus wallet by unlocking it',
  EBAKUS_ACCOUNT: 'You have choosen the Ebakus Wallet: ',
  NETWORK_ERROR: 'Network error, please check it.',
  EBAKUS_NOT_INSTALL: 'You must install Ebakus before start.',
  EBAKUS_TEST_NET:
    'Our game is available on Ebakus Test Network only. Please switch via Ebakus!',
};

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
      ebakusLockDialogOpen: false,
      disableDialog: false,
    };
    this.handleEbakusLockDialogClose = this.handleEbakusLockDialogClose.bind(
      this
    );
  }

  fetchAccounts() {
    if (this.props.ebakusWallet !== null) {
      this.props.ebakusWallet
        .getDefaultAddress()
        .then(account => {
          // if account changed then change redux state
          if (!this.props.ebakus || account !== this.props.ebakus.account) {
            this.props.handleEbakusAccount(account);
          }
        })
        .catch(err =>
          this.setState({ message: messages.LOAD_METAMASK_WALLET_ERROR })
        );
    }
  }

  fetchNetwork() {
    if (this.props.web3 !== null) {
      this.props.web3.eth.net
        .getId()
        .then(netId => {
          if (netId === '1') {
            this.props.handleEbakusNetwork(null);
            this.setState({
              ebakusLockDialogOpen: true,
              message: messages.EBAKUS_TEST_NET,
            });
          }
          // if network changed then change redux state
          if (!this.props.ebakus || netId !== this.props.ebakus.network) {
            this.props.handleEbakusNetwork(netId);
          }
        })
        .catch(err => {
          console.log('TCL: Ebakus -> fetchNetwork -> err', err);
          this.props.handleEbakusNetwork(null);
          this.setState({
            ebakusLockDialogOpen: true,
            message: messages.NETWORK_ERROR,
          });
        });
    }
  }

  componentDidMount() {
    let self = this;

    window.addEventListener('ebakusLoaded', function() {
      window.web3 = window.Web3Ebakus(new Web3(getProvider(101)));
      self.props.setWeb3(window.web3);
      self.props.setEbakusWallet(window.ebakusWallet);
      self.fetchAccounts();
      self.fetchNetwork();
    });
  }

  handleEbakusLockDialogClose() {
    this.setState({ ebakusLockDialogOpen: false, disableDialog: true });
  }

  render() {
    const ebakusLock = this.state.disableDialog === false && (
      <EbakusLockDialog
        {...this.state}
        handleEbakusLockDialogClose={this.handleEbakusLockDialogClose}
      />
    );

    return <div className="Ebakus">{ebakusLock}</div>;
  }
}
