class UserController {
    static async login(req, res) {

        console.log('req',JSON.stringify(req.body))

        res.send(JSON.stringify(req.body))
    }
}

export default UserController;