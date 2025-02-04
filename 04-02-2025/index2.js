
const os = require('os');

const uptimeInSeconds = os.uptime();
const days = Math.floor(uptimeInSeconds / (3600 * 24));
const hours = Math.floor((uptimeInSeconds % (3600 * 24)) / 3600);
const minutes = Math.floor((uptimeInSeconds % 3600) / 60);
const seconds = uptimeInSeconds%60;

const formattedUptime = `${days} days : ${hours} hours : ${minutes} minutes : ${seconds} seconds`;

console.log(`System Uptime: ${formattedUptime}`);


