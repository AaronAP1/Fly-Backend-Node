const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Asegúrate de ajustar la ruta si es necesario

const PERSON_TABLE = 'users';

class Person extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: PERSON_TABLE,
            modelName: 'Person',
            timestamps: true
        };
    }
}

const PersonSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    correo: {
        allowNull: true,
        type: DataTypes.STRING,
        field: 'correo'
    },
    contraseña: {
        allowNull: true,
        type: DataTypes.STRING,
        field: 'contraseña'
    }
};



module.exports = {Person, PersonSchema};
