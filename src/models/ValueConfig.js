// module.exports = (sequelize, DataTypes) => {
//     const model = sequelize.define(
//         'ValueConfig', {
//             id: {
//                 type: DataTypes.INTEGER,
//                 primaryKey: true,
//                 autoIncrement: true,
//             },
//             value_type: {
//                 type: DataTypes.STRING(50)
//             },
//             key: {
//                 type: DataTypes.STRING(250)
//             },
//             value: {
//                 type: DataTypes.STRING(250)
//             },
//             is_active: {
//                 type: DataTypes.BOOLEAN
//             },
//             created_at: {
//                 type: DataTypes.DATE,
//                 defaultValue: new Date()
//             },
//             updated_at: {
//                 type: DataTypes.DATE
//             }
//         },{
//             tableName:'value_config',
//             timestamps: false
//         }

//     )

//     return model;
// }


module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define(
        'ValueConfig', {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            province: {
                type: DataTypes.STRING(50)
            },
            district: {
                type: DataTypes.STRING(50)
            },
            sub_district: {
                type: DataTypes.STRING(50)
            },
            zip_code: {
                type: DataTypes.STRING(50)
            }
        }, {
            tableName: 'value_config',
            timestamps: false
        }
    )
    

    return model;
}
