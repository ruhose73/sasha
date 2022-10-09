class AuthController {

    async register (req,res) {
        const {email,password} = req.body;
        console.log(email,password);
        return res.json(email)
    }

    async login (req,res) {
        const {email,password} = req.body;
        console.log(email,password);
        return res.json(email)
    }

    async getInfo(req,res) {
        const info = {name: 'Sasha'}
        return res.json(info)
    }

}

module.exports = new AuthController();
