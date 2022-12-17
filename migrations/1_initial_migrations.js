const Election = artifacts.require("Election");

module.exports = function (deployer) {
  // deployment steps
  deployer.deploy(Election);
};
