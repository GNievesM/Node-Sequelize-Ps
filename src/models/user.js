const { sq } = require("../config/db");

const { DataTypes } = require("sequelize");

const User = sq.define("user", {
    walletAddress: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
  });

  User.sync().then(() => {
    console.log("User Model synced");
  });

  module.exports = User;