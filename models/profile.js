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