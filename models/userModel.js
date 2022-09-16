module.exports = (Sequelize, DataTypes) => {
    const User = sequelize.define('users', {
        name: {
            type: DataTypes.STRING,
        },
        firstName: {
            type: DataTypes.TEXT,
        },
        phoNumber: {
            type: DataTypes.INTEGER,
        },
        adress: {
            type: DataTypes.INTEGER
        }
    });

    return User;
}