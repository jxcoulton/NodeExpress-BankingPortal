const fs = require("fs");
const path = require("path");

const accounts = JSON.parse(accountData);
const users = JSON.parse(userData);

writeJSON = () => {
  const accountsJSON = JSON.stringify(accounts, null, 4);
  fs.writeFileSync(
    path.join(__dirname, "json/accounts.json"),
    accountsJSON,
    "utf8"
  );
};

module.exports = { accounts, users, writeJSON };
