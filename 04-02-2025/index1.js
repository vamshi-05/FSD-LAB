const os = require('os');
setInterval(() => {
    const totalMemory = os.totalmem();
    const freeMemory = os.freemem();

    const usedMemory = totalMemory - freeMemory;
    const freeMemoryPercentage = (freeMemory / totalMemory) * 100;
    const usedMemoryPercentage = (usedMemory / totalMemory) * 100;

    console.log(`Used Memory: ${usedMemory}`);
    console.log(`Free Memory: ${freeMemory}`);
    console.log(`Free Memory: ${freeMemoryPercentage.toFixed(2)}%`);
    console.log(`Used Memory: ${usedMemoryPercentage.toFixed(2)}%`);
    console.log("-".repeat(30));
}, 5000);






