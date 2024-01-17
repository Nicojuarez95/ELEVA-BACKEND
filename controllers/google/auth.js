import User from '../../models/User.js'
import Crypto from 'crypto'
import bcryptjs from 'bcryptjs'
import jsonwebtoken from 'jsonwebtoken'

const controller = {

    googleSignUp: async (req, res, next) => {
        try {
            const user = await User.findOne({ email: req.body.email })
            if (user) {
                req.user = {
                    id: user._id,
                    email: user.email,
                    password: user.password,
                    is_admin: user.is_admin,
                    is_seller: user.is_seller,
                    is_verified: user.is_verified
                }
                const db_pass = req.user.password
                const form_pass = req.body.password

                if (bcryptjs.compareSync(form_pass, db_pass)) {
                    let loginUser = await User.findOneAndUpdate(
                        { email: req.user.email }, //parametro de busqueda
                        { is_online: true }, //parámetro a modificar
                        { new: true } //para que devuelva el objeto modificado
                    )
                    loginUser.password = null
                    const token = jsonwebtoken.sign(
                        { id: loginUser._id },
                        process.env.SECRET,
                        { expiresIn: 60 * 60 * 24 * 7 }
                    )
                    return res.status(200).json({
                        success: true,
                        message: 'Conectado!',
                        user: loginUser,
                        token
                    })
                } else {
                    return res.status(400).json({
                        success: false,
                        message: 'Datos incorrectos!'
                    })
                }
            } else {
                req.body.is_online = false
                req.body.is_admin = false
                req.body.is_seller = false
                req.body.is_verified = true
                req.body.verify_code = Crypto.randomBytes(10).toString('hex')
                req.body.password = bcryptjs.hashSync(req.body.password, 10)

                const user = await User.create(req.body)
                let loginUser = await User.findOneAndUpdate(
                    { email: user.email }, //parametro de busqueda
                    { is_online: true }, //parámetro a modificar
                    { new: true } //para que devuelva el objeto modificado
                )
                loginUser.password = null
                const token = jsonwebtoken.sign(
                    { id: loginUser._id },
                    process.env.SECRET,
                    { expiresIn: 60 * 60 * 24 * 7 }
                )
                return res.status(200).json({
                    succes: true,
                    message: 'Conectado!',
                    user: loginUser,
                    token
                })
            }
        } catch (error) {
            next(error)
        }
    },
    googleSignIn: async (req, res, next) => {
        try {
            const user = await User.findOne({ email: req.body.email })
            if (user) {
                req.user = {
                    id: user._id,
                    email: user.email,
                    password: user.password,
                    is_admin: user.is_admin,
                    is_seller: user.is_seller,
                    is_verified: user.is_verified
                }
                const db_pass = req.user.password
                const form_pass = req.body.password

                if (bcryptjs.compareSync(form_pass, db_pass)) {
                    let loginUser = await User.findOneAndUpdate(
                        { email: req.user.email }, //parametro de busqueda
                        { is_online: true }, //parámetro a modificar
                        { new: true } //para que devuelva el objeto modificado
                    )
                    loginUser.password = null
                    const token = jsonwebtoken.sign(
                        { id: loginUser._id },
                        process.env.SECRET,
                        { expiresIn: 60 * 60 * 24 * 7 }
                    )
                    return res.status(200).json({
                        success: true,
                        message: 'Conectado!',
                        user: loginUser,
                        token
                    })
                } else {
                    return res.status(400).json({
                        success: false,
                        message: 'Datos incorrectos!'
                    })
                }
            }
            return res.status(400).json({
                success: false,
                message: 'Datos incorrectos!'
            })
        } catch (error) {
            next(error)
        }
    }
}
export default controller