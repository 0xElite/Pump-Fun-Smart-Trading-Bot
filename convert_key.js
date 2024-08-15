import bs58 from 'bs58';
import fs from 'fs';

const privateKeyBase58 = "YOUR_PRIVATE_KEY_HERE";
const decodedPrivateKey = Array.from(bs58.decode(privateKeyBase58));

fs.writeFileSync('solana_wallet.json', JSON.stringify(decodedPrivateKey));
console.log("Good.");