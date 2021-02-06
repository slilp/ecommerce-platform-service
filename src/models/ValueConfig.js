module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define(
        'ValueConfig', {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            valueType: {
                type: DataTypes.STRING(50),
                field: 'value_type'
            },
            key: {
                type: DataTypes.STRING(250)
            },
            value: {
                type: DataTypes.STRING(250)
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
            }
        },{
            tableName:'value_config',
            timestamps: false
        }

    )

    return model;
}