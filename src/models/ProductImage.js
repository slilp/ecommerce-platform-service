module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define(
        'ProductImage', {
            imageId: {
                type: DataTypes.STRING(50),
                primaryKey: true,
                field : 'image_id'
            },
            imagePath: {
                type: DataTypes.STRING(1500),
                field : 'image_path'
            },
            order: {
                type: DataTypes.INTEGER,
                field : 'order'
            },
            productId: {
                type: DataTypes.STRING(50),
                field: 'product_id'
            }
        }, {
            tableName: 'product_image',
            timestamps: false
        }
    )


    model.associate = models => {
        model.belongsTo(models.ProductInfo, {
            foreignKey: 'product_id',
            onDelete: 'CASCADE'
        });
    }



    return model;
}