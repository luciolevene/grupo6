module.exports = function (sequelize, dataTypes) {
  let alias = "Product";
  let cols = {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: dataTypes.INTEGER.UNSIGNED
    },
    idUsuario: {
      type: dataTypes.INTEGER.UNSIGNED
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

 
  Product.associate = function(models) {

    Product.belongsTo(models.User, {
      as: "user",
      foreignKey: "idUsuario"
    });

  
    Product.hasMany(models.Comment, {
      as: "comentarios",
      foreignKey: "idProducto"
    });
  };

  return Product;
};
