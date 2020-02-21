module.exports = (name) => {
    return `
exports.get = async (req, res, next) => {
    try {    
        res.send(req.body || {});
    } catch (error) {
        res.status(400).send(error);
    }
}

exports.post = async (req, res, next) => {
    try {    
        res.send(req.body || {});
    } catch (error) {
        res.status(400).send(error);
    }
} 
    `
}