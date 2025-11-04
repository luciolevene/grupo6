module.exports = function (sequelize, dataTypes) {
  let alias = "Comment";
  let cols = {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: dataTypes.INTEGER
    },
    idProducto: {
      type: dataTypes.INTEGER
    },
    idUsuario: {
      type: dataTypes.INTEGER
    },
    texto: {
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
    tableName: "comentarios",
    timestamps: true
  };

  let Comment = sequelize.define(alias, cols, config);

  Comment.associate = function (models) {

    Comment.belongsTo(models.Usuario, {
      as: "usuario",
      foreignKey: "idUsuario"
    }); 
  
    Comment.belongsTo(models.Producto, {
      as: "producto",
      foreignKey: "idProducto"
    }); 
  };

  return Comment;
};
