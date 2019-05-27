const CryptoHerosToken = artifacts.require('CryptoHerosToken');
const CryptoHerosGame = artifacts.require('CryptoHerosGame');
const util = require('util');
const fs = require('fs');
const path = require('path');
const readFile = util.promisify(fs.readFile);

module.exports = async function(deployer, network, accounts) {
  await deployer.deploy(CryptoHerosToken, 'CryptoHerosToken', 'HERO');
  await deployer.deploy(CryptoHerosGame, CryptoHerosToken.address);

  console.log('CryptoHerosToken address: ', CryptoHerosToken.address);
  console.log('CryptoHerosGame address: ', CryptoHerosGame.address);

  // Add initial balance to game contract
  const gameInstance = await CryptoHerosGame.deployed();
  await gameInstance.sendTransaction({
    value: web3.utils.toWei('10', 'ether'),
  });

  // Nested array has Card (number, image, background) hashes at IPFS
  const cards = [
    [
      'QmNbPeXSeUEg6oEhRVFa5uSwVdi8GbXewttkVKf3zX2oyX',
      'QmeARz345pVTS1CgT8YWrTiMnj8wk56nKBcbxEgSvVjpXE',
      'Qmb9jK8bPGaWAVm46kxDMr2Hf1YWcNGiGRhxoRiTRvfNeW',
    ],
    [
      'QmaJUZLbFN4D3HkjEWbUrUqJXtFfjEjVcbauE3YSh393ht',
      'QmRmKvVZVPSAiFCXsa214mxBBibZqJM6aJWvmA8ndkc5ig',
      'QmeJgkdZWnkwPuyhXkoKJEiKHq7h3cBazn8BsLiiWyeGm4',
    ],
    [
      'QmSdjH5q4Y3h8Uv6knNL4wybgi5Kxrxbni335Y5ooMtKjg',
      'QmRqYud4pr7gqJTX9YJYmwE9Xy7EkPt4bAz8mJUPKgvk3X',
      'QmZNUkkQrZ199WZEDuftsKCzfoYESor9fBmotjgYHrkGbx',
    ],
    [
      'Qmdi4p96LLjrmgoj5pJRSLnorJZ4bzdddyrN2jjLM6fXke',
      'QmcKZeiZg4Q1m8X1vxAGCWMYhn113ufT31UiQrfC51Jkdd',
      'QmVJ68pmy84r58gbKyYBzt7AjDwUaCqFk7guEYqm9Wr6NL',
    ],
    [
      'QmNnvqXtomFAiM34aJRd2rTimCyQnxeemHTLZWwxTGXeWa',
      'QmRGeBTZroqhAdKkr47SKosECB8yJGTYrU8ckUdvBxDyu5',
      'QmRgiejrcQaMx9vmma3YebrdPqyxwUasXTqToYjyHCLhPC',
    ],
    [
      'QmTMig9fwhU77oaWKMHYvMbb3b1wyWviWUxEeYHBdH2T9f',
      'QmS8zmqAcVwQ7eUSY1QawnLd3sbUAVgjpwTaUcSAtpEDR9',
      'QmTNtVi21mQuVpqsyY2qFDSi6jktvA9FZGp4Kjbyskaesc ',
    ],
    [
      'QmQXDnUzPSfrQWLcc4vXeVyZquW8cPN4b3qU8zcpsf6ZDP',
      'QmYXFq6sLRN5iPUaRsG5neSHZMuQXaFHAg8LGKna3yvPiU',
      'QmPgxySdWktfwUdP2kFdisnaW4HVyWjykKYZn1vmvzhmXu',
    ],
    [
      'QmQ8Hg8aXtqET4Apd6AGDLmeZTsi9JVvZnMdRGsvdYBgkx',
      'QmT3G9RzgvXqtXnF79sVseUnJERvU9UA7o43RQh1wdfMPR',
      'QmTU3PkpEhJA2AyartCkVSEmJJtCwo9qvVMg4CJi2a4DGJ',
    ],
    [
      'QmWQ3oxfnXzpw35wiGnrc2HNV3U6iT4eT6VpoEtLwdKUsT',
      'QmbrWUkysFbt1AKZskPSeeVWYTPJevfiqtEN9DWy5gftkU',
      'QmNuY4DVZcouMJhWj99GyPVZGKpCe8caN7WpSKkjyU1wZc',
    ],
    [
      'QmUHsb1T1NuEL1TDQMD1dENpZFYP9NsnLo2iohKR3ydz2t',
      'QmeGxiwH7uvKMpwJ8673udXx7UbExVFmhVrAWBpM7uYyXD',
      'QmPmT4tc5hSLgmiJzjk92kNHpWGuaDHjQL6eWhpmwzpwVA',
    ],
    [
      'QmaQc91N7YvZ8NaxeQfe9xpiVErTH5EJqTiyWVjf6CnV9X',
      'QmZjyyqjKL5cibcGhHvP5kp5cnptNy5z4RJ4ecUGkEjCHE',
      'QmRzxZLAt6iJ5ijNEALwug3kfxFxCSxQbvy4a7ucco4ZXC',
    ],
    [
      'QmYtQprzsas3NzA7v4i8y1PJf89bMdr3bUqEqLgXkmfN6X',
      'QmZQ6xv21HYsJTVM9zxaGW6AGHE7rFFdVDF1euCsKXdcPG',
      'QmTcM5VyR1ceY31k2u1tYqqen1WzNGehoBcYNLJHePqQc3',
    ],
    [
      'Qmcsu3ATk6cwhXSi2nhkeZqJc6Urk9o6sWX5ZapMDLhedA',
      'QmaKWivznExeXocW5hPWrFAhab1rdpiHw7c1WdqsvFT8Xc',
      'QmTZGi4Ee6oEgcTsHR72kbL1jrkpWe8YfZ7dmxMyKb42GY',
    ],
    [
      'QmWCk6YgA13WZkF8exa1atTAFx6nzNaYbyYf2jZQRTEJyL',
      'Qmey9MiEUWLSd4Kfr4LPj476z5pQ53CNJxxAqR6UmMCofQ',
      'QmTVEnLKPYTBhZy3AAwpiVRP6fKiTxdF2426P3ri4nNpjH',
    ],
    [
      'QmVDYWJs9RNxX75agGWmKTyLrsaFEJqfFqEcDMVbg9Ftnq',
      'Qmf79rRMGGUaoccybavoMXWkoZ2wUNKxwkPhHe7TjjWBXM',
      'QmP9YNnJ5HresHPyKXuEViSS58iDGyBQDCC4NhxnXdTsAn',
    ],
    [
      'Qmd9Xyuf3zQiyPfjDisVwL6J4AcTJy4ycFWBXdCQmjupyk',
      'QmVALBXYymSKPz5wN1JFVHrZmnNhz7JW8J8QM5zVrHmagk',
      'QmTDfdUwLNTXJ1PgRqPxyW41jrdxhvh72C4h62dNhNgvtP',
    ],
    [
      'QmZPkZq2XjPVa1oWWLiVDii7okohRrUw1CuzJvicHwUsCa',
      'QmRUvsn4j65tn3GgynWDTEq88VGxnXkN2S5GvT5PEHo1hP',
      'QmPAa1joAw1MZGNyGxKpS7bwUXY3ty8eyXAhZBaGYV749c',
    ],
    [
      'QmZguKxTcU6wpGoz9MUfy5nN4EHMFABHejUrTdjou2hJ1M',
      'QmXhPFrZHQRXmicJtNigkV3oCB23KTK8rwHJDKQrkGk39k',
      'QmNUiebZznyunT7wD7Vydn87G9BVXQFYp8Gpk5odATiZey',
    ],
    [
      'QmWzdBNu1ikXvcXo7C1WyUk3FxWRnDo5gt2WKm14Rcs1Pc',
      'QmVWd4RQqg1k6PqggZUY8tRafyZhwMZAZc1Qavpfdb3QZs',
      'QmaMGoBBP79cAo3T5HzSS1qfA3HFi5S8PPd5JsFtwM58ud',
    ],
    [
      'Qmf8MPrUF41e5N5rtXVEGZg5AC7m8NLsjqf9ad9fvwVSrw',
      'QmfZ9111VoCssYnCRFjyKRRTaqE638Dys5duDLNqDUr7ZV',
      'QmchyB9nScjWKdN5sVfZaRSPiEMirtMBbMkzkvBfVDPj9m',
    ],
  ];

  const tokenInstance = await CryptoHerosToken.deployed();

  for (let [id, card] of cards.entries()) {
    await tokenInstance.initImage(card[1]);
    await tokenInstance.initBackground(card[2]);
    await tokenInstance.initNumberAndDescription(id, card[0]);
    console.log('Created new card: ' + id);
  }

  const abiForSystemContractStoreAbiForAddress = [
    {
      type: 'function',
      name: 'storeAbiForAddress',
      inputs: [
        {
          name: 'address',
          type: 'address',
        },
        {
          name: 'abi',
          type: 'string',
        },
      ],
      outputs: [],
      stateMutability: 'nonpayable',
    },
  ];

  const systemContractAddress = '0x0000000000000000000000000000000000000101';
  const systemContract = new web3.eth.Contract(
    abiForSystemContractStoreAbiForAddress,
    systemContractAddress
  );

  // Upload contracts ABI at system contract
  const cryptoHerosGameAbi = await readFile(
    path.join(__dirname, '..', 'dapp', 'src', 'lib', 'cryptoHerosGame.json'),
    'utf8'
  );

  await systemContract.methods
    .storeAbiForAddress(
      gameInstance.address,
      JSON.stringify(JSON.parse(cryptoHerosGameAbi))
    )
    .send({ from: accounts[0], gas: 300000 });

  const cryptoHerosTokenAbi = await readFile(
    path.join(__dirname, '..', 'dapp', 'src', 'lib', 'cryptoHerosToken.json'),
    'utf8'
  );

  await systemContract.methods
    .storeAbiForAddress(
      tokenInstance.address,
      JSON.stringify(JSON.parse(cryptoHerosTokenAbi))
    )
    .send({ from: accounts[0], gas: 600000 });
};

// https://github.com/ensdomains/ens/blob/master/migrations/2_deploy_contracts.js
