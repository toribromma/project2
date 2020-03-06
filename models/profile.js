module.exports = function (sequelize, DataTypes) {
    var Profile = sequelize.define("Profile", {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
            len: [1]
        },
        email: {
            type: DataTypes.STRING,
            len: [1]
        },
        budget: {
            type: DataTypes.INT,
        },
        citiesInterested: {
            type: DataTypes.STRING,
            allowNull: false,
            len: [1]
        },
        lastName: {
            type: DataTypes.INT,
        }
    });
    return Profile;
};     