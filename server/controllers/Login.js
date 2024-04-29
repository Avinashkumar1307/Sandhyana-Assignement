const User = require('../model/User');

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email: email });
        console.log("User");
        console.log(user)
        if (user.password === password ) {            
                res.status(200).send({ message: "Login Successful", user: user });
        } else {
            res.status(404).send({ message: "User not registered" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Login failed due to server error",
        });
    }
};
