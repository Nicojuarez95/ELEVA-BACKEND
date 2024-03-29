import express from 'express'
import validator from '../middlewares/validator.js'
import schema_signup from '../schemas/sign_up.js'
import schema_signin from '../schemas/sign_in.js'
import schema_google_signup from '../schemas/google_sign_up.js'
import schema_google_signin from '../schemas/google_sign_in.js'
import schemaUpd from '../schemas/updateUser.js'
import controller from '../controllers/auth/auth.js'
import accountExistsSignUp from '../middlewares/users/accountExistsSignUp.js'
import accountExistsSignIn from '../middlewares/users/accountExistsSignIn.js'
import accountHasBeenVerified from '../middlewares/users/accountHasBeenVerified.js'
import passwordIsOk from '../middlewares/users/passwordIsOk.js'
import passport from '../middlewares/passport.js'
import updateController from '../controllers/auth/update.js'
import googleController from '../controllers/google/auth.js'

const {googleSignIn, googleSignUp} = googleController
const {sign_up, sign_in, sign_out, sign_in_token,verifyMail} = controller
const { upd } = updateController


let router = express.Router();

router.get('/verify',verifyMail)
router.post('/googlesignin', validator(schema_google_signin), googleSignIn)
router.post('/googlesignup', validator(schema_google_signup), googleSignUp)
router.post('/signup', validator(schema_signup), accountExistsSignUp, sign_up)
router.post('/signin', validator(schema_signin), accountExistsSignIn,accountHasBeenVerified, passwordIsOk, sign_in )
router.post('/signout', passport.authenticate('jwt',{session:false}), sign_out) 
router.post('/signintoken', passport.authenticate('jwt',{session:false}), sign_in_token)
router.put("/update", passport.authenticate("jwt", { session: false }), validator(schemaUpd), upd)


export default router