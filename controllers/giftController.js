const giftService = require('../services/giftServices');

const createGift = async (req, res, next) => {
    try{

        let params = {
            user_id:req.user.id,
            varian:req.body.varian
        }

        const response = await giftService.createGift(params);
        res.status(201).json(response);

    }catch(error){
        next(error);
    }
} 

module.exports = {
    createGift
}