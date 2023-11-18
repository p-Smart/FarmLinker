import error from "src/backend-files/components/error"
import connectToDB from "src/backend-files/dbconfig"
import Users from "src/backend-files/models/Users"


const Login = async (req, res) => {
    const {email, pass} = req.body

    try{
        await connectToDB()        
        
        const accountExist = await Users.findOne({email})

        !accountExist && error('You have no account with us, create one now!')

        const {pass: dbPass} = accountExist

        const passCorrect = dbPass === pass

        !passCorrect && error('You have entered an invalid password')

        const {pass: passRemoved, ...userData} = accountExist?._doc

        return res.json({
            success: true,
            data: userData,
            message: `Login successful, ${accountExist?.userType}`
        })
    }
    catch(err){
        res.status(err.status || 500).json({
            sucess: false,
            message: err.message
        })
    }
}

export default Login