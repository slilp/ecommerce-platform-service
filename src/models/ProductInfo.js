const {
    v4: uuid
} = require('uuid');


module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define(
        'ProductInfo', {
            productId: {
                type: DataTypes.STRING(50),
                primaryKey: true,
                defaultValue: uuid(),
                field: 'product_id'
            },
            name: {
                type: DataTypes.STRING(250)
            },
            category: {
                type: DataTypes.STRING(50)
            },
            subCategory: {
                type: DataTypes.STRING(50),
                field: 'sub_category'
            },
            imagePath: {
                type: DataTypes.STRING(250),
                field: 'image_path'
            },
            promotionCode1: {
                type: DataTypes.STRING(50),
                field: 'promotion_code_1'
            },
            promotionCode2: {
                type: DataTypes.STRING(50),
                field: 'promotion_code_2'
            },
            minPrice: {
                type: DataTypes.DECIMAL(14, 4),
                field: 'min_price'
            },
            maxPrice: {
                type: DataTypes.DECIMAL(14, 4),
                field: 'max_price'
            },
            isActive: {
                type: DataTypes.BOOLEAN,
                field: 'is_active'
            },
            createdAt: {
                type: DataTypes.DATE,
                defaultValue: new Date(),
                field: 'created_at'
            },
            updatedAt: {
                type: DataTypes.DATE,
                field: 'updated_at'
            },
            marketplaceId: {
                type: DataTypes.STRING(50),
                field: 'marketplace_id'
            },
            customerId: {
                type: DataTypes.STRING(50),
                field : 'customer_id'
            }
        }, {
            tableName: 'product_info',
            timestamps: false

        }
    )

    model.associate = models => {
        model.hasMany(models.ProductSkuInfo, {
            foreignKey: 'product_id'
        });
        model.belongsTo(models.MarketplaceInfo, {
            foreignKey: 'marketplace_id',
            onDelete: 'CASCADE'
        });
        model.belongsTo(models.CustomerInfo, {
            foreignKey: 'customer_id',
            onDelete: 'CASCADE'
        });
    }


    return model;
}