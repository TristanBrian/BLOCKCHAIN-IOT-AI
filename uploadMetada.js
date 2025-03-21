const ipfsClient = require('ipfs-http-client');
const ipfs = ipfsClient({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });

async function uploadMetadata(metadata) {
    const { cid } = await ipfs.add(JSON.stringify(metadata));
    return cid.toString();
}

const metadata = {
    farmLocation: "Nairobi, Kenya",
    harvestDate: "2023-10-01",
    qualityMetrics: { moisture: "12%", temperature: "22°C" }
};

uploadMetadata(metadata).then(cid => {
    console.log(`Metadata uploaded to IPFS with CID: ${cid}`);
});
