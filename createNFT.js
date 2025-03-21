const { Client, TokenCreateTransaction, TokenType, TokenSupplyType } = require("@hashgraph/sdk");
require('dotenv').config();

const client = Client.forTestnet().setOperator(process.env.ACCOUNT_ID, process.env.PRIVATE_KEY);

async function createNFT() {
    const nftCreateTx = await new TokenCreateTransaction()
        .setTokenName("Coffee Batch #123")
        .setTokenSymbol("COFFEE")
        .setTokenType(TokenType.NonFungibleUnique)
        .setDecimals(0)
        .setInitialSupply(0)
        .setTreasuryAccountId(process.env.TREASURY_ACCOUNT_ID)
        .setSupplyType(TokenSupplyType.Finite)
        .setMaxSupply(10)
        .execute(client);

    const nftCreateRx = await nftCreateTx.getReceipt(client);
    console.log(`NFT created with ID: ${nftCreateRx.tokenId}`);
}

createNFT();

