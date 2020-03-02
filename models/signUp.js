module.exports = function(sequelize, DataTypes) {
    var Signup = sequelize.define("signUp", {
      // Giving the signUp model a user_name and password of type STRING
      user_name: DataTypes.STRING,
      password: DataTypes.STRING
    });
  
    
  
    return signUp;
  };