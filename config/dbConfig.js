module.exports = {
    HOST: 'localhost',
    USER: 'root',
    DATABASE: 'schandroid_test_db',
    PASSWORD: 'root',
    PORT: '3306',
    dialect: 'mysql',

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}