const User = require('../model/User');

exports.createUser = async (req, res) => {
    try {
        const { name, email,password } = req.body; // Remove parentheses from req.body
        const response = await User.create({
            name,
            email,
            password
        });
        res.status(200).json({
            success: true,
            data: response,
            message: "Data inserted successfully", // Correct the spelling of message
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Data insertion failed", // Correct the spelling of message
        });
    }
};
