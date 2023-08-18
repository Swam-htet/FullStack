const stockService = require("../service/StockService");

// get all stocks
async function getAllStock(req, res, next) {
    try {
        let stocks = await stockService.getAllStock();
        if (stocks) {
            res.status(200).json(stocks);
        } else {
            res.status(400).json({message: "Stock not found"});
        }
    } catch (error) {
        res.status(400).json({message: `Stock not found`});
    }

}

// get stock by id
async function getStockByID(req, res, next) {
    let id = req.params.id;

    try {
        let stock = await stockService.getStockByID(id);
        if (!stock) {
            res.status(400).json({message: `Stock ID :${id} not found`});
        } else {
            res.status(200).json(stock);
        }
    } catch (error) {
        res.status(400).json({message: `Stock ID :${id} not found`});
    }
}

// // get stock by product id
// async function getStockByProductID(req, res, next) {
//     let id = req.params.id;
//     try {
//         let stock = await stockService.getStockByProductID(id);
//         if (!stock) {
//             res.status(400).json({message: `Stock list of Product ID :${id} not found`});
//         } else {
//             res.status(200).json(stock);
//         }
//     } catch (error) {
//         res.status(400).json({message: `Stock list Product ID :${id} not found`});
//     }
// }

// create stock
async function createStock(req, res, next) {
    let body = req.body;
    try {
        let stock = await stockService.createStock(body);
        if (!stock) {
            res.status(400).json({message: `Can't save stock`});
        } else {
            res.status(201).json(stock);
        }
    } catch (error) {
        res.status(400).json({message: `Can't save stock`});
    }
}

// update stock by id
async function updateStockByID(req, res, next) {
    let id = req.params.id;
    let updateBody = req.body;
    try {
        let stock = await stockService.updateStockByID(id,updateBody);
        if (!stock) {
            res.status(400).json({message: `Stock ID :${id} not found`});
        } else {
            res.status(200).json(stock);
        }
    } catch (error) {
        res.status(400).json({message: `Stock ID :${id} not found`});
    }
}

// delete store by id
async function deleteStoreByID(req, res, next) {
    let id = req.params.id;
    try {
        let stock = await stockService.deleteStockByID(id);
        if (!stock) {
            res.status(400).json({message: `Stock ID :${id} not found`});
        } else {
            res.status(200).json(stock);
        }
    } catch (error) {
        res.status(400).json({message: `Stock ID :${id} not found`});
    }
}

module.exports = {
    getAllStock,
    getStockByID,
    // getStockByProductID,
    createStock,
    updateStockByID,
    deleteStoreByID,
}