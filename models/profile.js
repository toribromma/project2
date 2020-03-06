module.exports = function (sequelize, DataTypes) {
    var Profile = sequelize.define("Profile", {
        firstName: {
            type: DataTypes.STRING,
        },

        lastName: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
        },
        budget: {
            type: DataTypes.INTEGER,
        },
        citiesInterested: {
            type: DataTypes.STRING,
        },
        phone: {
            type: DataTypes.INTEGER,
        }
    });

    Profile.associate = function (models) {
        // We're saying that a Post should belong to an Author
        // A Post can't be created without an Author due to the foreign key constraint
        Profile.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return Profile;
};     