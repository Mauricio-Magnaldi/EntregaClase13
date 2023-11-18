import { Router } from "express"
import { usersManager } from "../managers/usersManager.js"
import {hashData, compareData} from "../utils.js"
import passport from "passport"

const router = Router()

router.get('/:userId', async (request, response) => {
    const { userId } = request.params
    try {
        const user = await usersManager.getById(userId)
        response.status(200).json({mensaje: "Usuario encontrado.", user})
    } catch (error) {
        response.status(500).json({error})
    }
})

//Comento estas rutas porque utilizo passport para implementar signup y login

// router.post('/', async(request, response) => {
//     const { password } = request.body
//     try {
//         const hashedPassword = await hashData(password)
//         const createdUser = await usersManager.createOne({...request.body, password: hashedPassword})
//         response.status(200).json({mensaje: "Usuario creado.", createdUser})
//     } catch (error) {
//         response.status(500).json({error})
//     }
// })

// router.post('/login', async (request, response) => {
//     const { email, password } = request.body
//     try {
//         const userDB = await usersManager.getByEmail(email)
//         if(!userDB) {
//             return response.status(401).json({mensaje: "Credenciales inválidas."})
//         }
//         const isValid = await compareData(password, userDB.password)
//         if(!isValid) {
//             return response.status(401).json({mensaje: "Credenciales inválidas."})
//         }
//         response.status(200).json({mensaje: `Bienvenido ${userDB.first_name}.`})
//     } catch (error) {
//         response.status(500).json({error})
//     }
// })

//Signup - login con passport

router.post('/signup',passport.authenticate('signup'), (request, response) => {
    response.redirect("/home")
})

router.post('/login', passport.authenticate('login', {
    successRedirect: "/home",
    failureRedirect: "/error",
}))


export default router 