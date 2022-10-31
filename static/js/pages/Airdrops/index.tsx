import React, { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import GetAppIcon from '@mui/icons-material/GetApp';
import { ethers } from 'ethers';
import abi from '../../contracts';

const tokenContract = "0x1EEa9989EA9C1832f10Be85c8accBFCC7ccC602e";
const tokenAmount = "100000000000000000000";
const contractAddress = "0x1BB3d19821bFB7961738C00117eAA4581B29783d";
const fee = 1000000000000000;

export default function Airdrops() {
    
    const [currentAccount, setCurrentAccount] = useState(null);

  const checkWalletIsConnected = () => {
    const { ethereum } = window;
    if(!ethereum){
      console.log("Metamask NOT Installed");
    }else{
      console.log("Metamask Installed");
    }
   }

  const connectWalletHandler = async() => { 
    const { ethereum } = window;
    if(!ethereum){
      alert("Please Install Metamask!");
    } /* else {
      try{
        const accounts = await ethereum.request({method: 'eth_requestAccounts'});
        console.log("Found an account :", accounts[0]);
        setCurrentAccount(accounts[0]);
      }catch (err){
        console.log(err);
      }
    } */
  }

  const connectWalletButton = () => {
    return (
      <Button onClick={connectWalletHandler} variant="contained" startIcon={<AccountBalanceWalletIcon />}>
        Connect Wallet
      </Button>
    )
  }

  const airdropButton = () => {
    return (
      <Button onClick={airdropHandler} variant="contained" startIcon={<GetAppIcon />}>
        Get Airdrop
      </Button>
    )
  }

  useEffect(() => {
    checkWalletIsConnected();
  }, [])

  
  const airdropHandler = async() => {
    try{
      const { ethereum } = window;

      if(ethereum){
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(contractAddress, abi, signer);

        console.log("Intialize payment");
        const getadrp = await contract.dropTokens(tokenContract, tokenAmount, {value: fee});
        console.log(contract);
		if(getadrp){
			alert("Congratulations, you got our airdrop, you will receive your tokens very soon");
		}else{
			alert("Something wrong, Maybe you don't have enough BNB balance for transaction fee or your wallet already have this token");
		}
      }
    }catch(err){
		alert("Something wrong, Maybe you don't have enough BNB balance for transaction fee or your wallet already have this token");
    	console.log(err);
    }

  }

    return (
        <Card sx={{ maxWidth: 500 }}>
            <CardMedia
                component="img"
                height="140"
                image="https://i.ibb.co/R2WvqHB/airdrop.png"
                alt="TCASH Token"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                TCASH Token Airdrop
                </Typography>
                <Typography variant="body2" color="text.secondary"mt={2}>
                TCASH token is the native token of Tcash exchange.
                </Typography>
                <Typography variant="body2" color="text.secondary" mt={2}>
                Contract : 0x1EEa9989EA9C1832f10Be85c8accBFCC7ccC602e
                </Typography>
                <Typography variant="h6" color="text.secondary" mt={2}>
                Airdrop amount : 100 TCASH
                </Typography>
            </CardContent>
            <CardActions>
                { airdropButton() }
            </CardActions>
        </Card>
    )

}