module.exports = (connex, Sequelize) => {
    const Product = connex.define('product', {
        name: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.TEXT
        },
        price: {
            type: Sequelize.REAL
        },
        category: {
            type: Sequelize.STRING
        }
    })
return Product
}