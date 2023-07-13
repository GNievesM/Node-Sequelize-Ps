const { Network } = require('./models');


console.log("Hello, World!");


const networks = await Network.findAll();
console.log(networks.every(network => network instanceof Network)); 


try {
    await sequelize.transaction(async (t) => {
        t.afterCommit(() => {
            const savedSearch = SavedSearch.create({ search:"search name test", search_type_id: 1, network_id: 2, wallet_address_id: 1}, { transaction: t });
        });
      });
} catch (error) {

}

  