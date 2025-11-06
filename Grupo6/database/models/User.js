module.exports = function (sequelize, dataTypes) {
  let alias = "User";
  let cols = {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: dataTypes.INTEGER
    },
    usuario: {
      type: dataTypes.STRING
    },
    email: {
      type: dataTypes.STRING
    },
    password: {
      type: dataTypes.STRING
    },
    fotoPerfil: {
      type: dataTypes.STRING
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
    tableName: "usuarios",
    timestamps: true,
  };

  let User = sequelize.define(alias, cols, config);

  User.associate = function (models) {
    User.hasMany(models.Product, {
      as: "productos",
      foreignKey: "idUsuario"
    }); 

    User.hasMany(models.Comment, {
      as: "comentarios",
      foreignKey: "idUsuario"
    }); 
  };

  return User;
};
