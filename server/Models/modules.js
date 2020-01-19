module.exports = function (sequelize, DataTypes) {
    const modules = sequelize.define('modules', {
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      urlPath: {
        type: DataTypes.STRING(150),
        allowNull: true
      },
      title: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      desc: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      feat_image: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
    }, {
      tableName: 'modules'
    });
    return modules;
  }
  