module.exports = function (sequelize, dataTypes) {
  let alias = "Product";
  let cols = {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: dataTypes.INTEGER
    },
    idUsuario: {
      type: dataTypes.INTEGER
    },
    imagen: {
      type: dataTypes.STRING
    },
    nombre: {
      type: dataTypes.STRING
    },
    descripcion: {
      type: dataTypes.TEXT
    },
    createdAt: {
      type: dataTypes.DATE
    },
    updatedAt: {
      type: dataTypes.DATE
    },
    deletedAt: {
      type: dataTypes.DATE
    }
  };

  let config = {
    tableName: "productos",
    timestamps: true
  };

  let Product = sequelize.define(alias, cols, config);
  return Product;
};
