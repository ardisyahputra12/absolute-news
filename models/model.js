import { Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize("absolute_news", "root", "", {
    host: 'localhost',
    dialect: 'mysql'
});

export { sequelize, DataTypes };