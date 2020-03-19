export default function (sequelize, DataTypes) {
    const Testimonial = sequelize.define('testimonials', {
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING(150),
        allowNull: true
      },
      message: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      image_url: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
    }, {
      tableName: 'testimonials'
    });
    return Testimonial;
  }
  