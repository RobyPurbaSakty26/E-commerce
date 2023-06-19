const transactionRepository = require("../repository/transaction.Repository");
const productRepository = require("../repository/productRepository");
const detailTransactionsRepository = require("../repository/detailTransactionsRepository");

module.exports = {
  async create(body, idUser) {
    try {
      // create transaction
      const bodyTransaction = {
        date: new Date(),
        status: "Process",
        idUser: idUser,
      };

      const transaction = await transactionRepository.create(bodyTransaction);

      // items product
      const lengthItemsRequest = body.length;
      console.log(lengthItemsRequest);

      for (let i = 0; i < lengthItemsRequest; i++) {
        const requestDetailTransactions = {
          idTransaction: transaction.id,
          idProduct: body[i].id,
          count: body[i].count,
        };
        const dataProduct = await productRepository.getByPk(body[i].id);
        await detailTransactionsRepository.create(requestDetailTransactions);
        if (dataProduct.stok < requestDetailTransactions.count) {
          const err = new Error("stok tidak sama");
          throw err;
        } else {
          const newStok = dataProduct.stok - requestDetailTransactions.count;
          const updateStok = await productRepository.updateStok(
            requestDetailTransactions.idProduct,
            newStok
          );
        }
      }

      const data = await detailTransactionsRepository.getByTransaction(
        transaction.id
      );

      console.log(data);
      return { data, id: transaction.id };
    } catch (err) {
      throw err;
    }
  },
};
