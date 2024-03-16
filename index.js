import { ethers } from 'ethers';
import TGESmartContract from './contracts/TGESmartContract.json';

const provider = new ethers.providers.JsonRpcProvider('http://localhost:8545');
const signer = provider.getSigner();
const tgeContract = new ethers.Contract(TGESmartContract.address, TGESmartContract.abi, signer);

async function registerForTGE(email, amountOfTokens) {
  const tx = await tgeContract.register(email, ethers.utils.parseEther(amountOfTokens.toString()));
  await tx.wait();
  return tx.hash;
}
