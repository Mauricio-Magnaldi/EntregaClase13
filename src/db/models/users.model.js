import mongoose from "mongoose"

//No he colocado el cart:Id que solicitaba el desafío.

const usersSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    age: {
        type: Number,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    cartId: {
        type: Number,
    },
    role: {
        type: String,
        required: true,
        default: 'user',
    },
})

export const usersModel = mongoose.model("Users", usersSchema)
