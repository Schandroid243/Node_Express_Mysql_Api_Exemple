const dbConfig = require('../config/dbConfig');

const { Sequelize, DataTypes} = require('Sequelize');

const sequelize = new Sequelize(
    dbConfig.DATABASE,
    dbConfig.USER,
    dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorAliases: false,

        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle
        }
    }
);


sequelize.authenticate().then(() => {
    console.log('Connected to the database');
}).catch((error) => {
    console.log(`Error connecting: ${error}`);
});


const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require('../models/userModel');

db.sequelize.sync({ force: false}).then(() => console.log('Resync is done !'));

module.exports = db;