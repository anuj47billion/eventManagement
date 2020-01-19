module.exports = function (sequelize, DataTypes) {
    const Product = sequelize.define('products', {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(150),
            allowNull: false
        },
        price: {
            type: DataTypes.INTEGER(11),
            allowNull: true
        },
        subCategoryId: {
            type: DataTypes.INTEGER(11),
            allowNull: true
        },
        categoryId: {
            type: DataTypes.INTEGER(11),
            allowNull: true
        },
        content: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        imageUrl: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
    }, {
        tableName: 'products'
    });
    return Product;
}
