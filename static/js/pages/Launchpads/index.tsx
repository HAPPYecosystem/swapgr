import React from "react";
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { ethers } from 'ethers';

export default function Launchpads() {
    
    const addToMetamask = async() => {
        /*
        const tokenAddress = '0x1EEa9989EA9C1832f10Be85c8accBFCC7ccC602e';
        const tokenSymbol = 'TCASH';
        const tokenDecimals = 18;
        const tokenImage = 'https://i.ibb.co/CQFR9WM/512.png';

        try {
            const { ethereum } = window;
            if(ethereum){
                const provider = new ethers.providers.Web3Provider(ethereum);
                // wasAdded is a boolean. Like any RPC method, an error may be thrown.
                const wasAdded = await provider.request({
                    method: 'wallet_watchAsset',
                    params: {
                    type: 'ERC20', // Initially only supports ERC20, but eventually more!
                    options: {
                        address: tokenAddress, // The address that the token is at.
                        symbol: tokenSymbol, // A ticker symbol or shorthand, up to 5 chars.
                        decimals: tokenDecimals, // The number of decimals in the token
                        image: tokenImage, // A string url of the token logo
                    },
                    },
                });

                if (wasAdded) {
                    console.log('Thanks for your interest!');
                } else {
                    console.log('Your loss!');
                }
            }
            } catch (error) {
            console.log(error);
            }
        */
      }

    return (
        <Card sx={{ maxWidth: 500 }}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                TCASH Launchpad
                </Typography>
                <Typography variant="body2" color="text.secondary"mt={2}>
                You can buy tokens by sending BNB directly from your wallet to sale contract
                </Typography>
                    <CardMedia
                        component="img"
                        height="140"
                        image="https://i.ibb.co/qMbYv9j/qr.png"
                        alt="TCASH Token"
                    />
                <Typography variant="h6" color="text.secondary" mt={2}>
                    PreSale Rate : 1 BNB = 50,000 TCASH
                </Typography>
            </CardContent>
            <CardActions>
                <Typography variant="h6" color="text.secondary" mt={2}>
                    Sale Contract : 0x040144F922F8442b8B6b1391F27148264299ca2a
                </Typography>
            </CardActions>
            <CardActions>
                <Button onClick={addToMetamask} variant="contained">
                    Add TCASH to MetaMask
                </Button>
            </CardActions>
        </Card>
    )

}