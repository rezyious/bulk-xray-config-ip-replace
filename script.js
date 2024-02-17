const fs = require("fs");

// Read IPs.txt file
const ipsFileContent = fs.readFileSync("IPs.txt", "utf-8");
const ipsLines = ipsFileContent.split("\n");

// Read config.txt file
const configFileContent = fs.readFileSync("config.txt", "utf-8");

// Process each line in IPs.txt
ipsLines.forEach((line) => {
    const ipAddress = line.split(" - ")[2].trim();
    const uuid = configFileContent.match(/:\/\/([^@]+)/)[1];

    // Replace IP in config.txt
    const modifiedConfig = configFileContent.replace(/:\/\/([^@]+)@([^:]+)/, `://${uuid}@${ipAddress}`);

    // Append to results.txt
    fs.appendFileSync("results.txt", modifiedConfig + "\n");
});

console.log("Processing complete. Check results.txt for the modified configurations.");
