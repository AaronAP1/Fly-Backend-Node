const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Asegúrate de ajustar la ruta si es necesario

const VUELO_TABLE = 'vuelos';

class Vuelos extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: VUELO_TABLE,
            modelName: 'vueloss',
            timestamps: true
        };
    }
}

const VuelosSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    nombre: {
        allowNull: true,
        type: DataTypes.STRING,
        field: 'nombre'
    },
    descripcion: {
        allowNull: true,
        type: DataTypes.STRING,
        field: 'descripcion'
    },
    fecha: {
        allowNull: true,
        type: DataTypes.DATE,
        field: 'fecha'
    },
    hora: {
        allowNull: true,
        type: DataTypes.TIME,
        field: 'hora'
    },
    lugar: {
        allowNull: true,
        type: DataTypes.STRING,
        field: 'lugar'
    }
};



// Relación "hasMany" con el modelo de Usuario
Vuelos.belongsTo(Person, { foreignKey: 'id' });

module.exports = {Vuelos, VuelosSchema};
