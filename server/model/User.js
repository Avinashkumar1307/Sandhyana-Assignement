const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            maxLength: 50
        },
        email: {
            type: String,
            required: true,
            maxLength: 50
        },
        password: {
            type: String,
            required: true,
            maxLength: 50
        },
        createdAt: {
            type: String,
            required: true,
            default: Date.now
        },
        updatedAt: {
            type: String,
            required: true,
            default: Date.now
        }
    }
);

module.exports = mongoose.model("User", userSchema);
