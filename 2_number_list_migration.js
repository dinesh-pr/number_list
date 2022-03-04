const number_list = artifacts.require("number_list");

module.exports = function (deployer) {
  deployer.deploy(number_list);
};
