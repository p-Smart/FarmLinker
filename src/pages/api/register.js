import error from "src/backend-files/components/error"
import connectToDB from "src/backend-files/dbconfig"
import Users from "src/backend-files/models/Users"


const Register = async (req, res) => {
    const {
    userType,
    fullname,
    email,
    tel,
    address,
    delivery_address,
    pass} = req.body

    try{
        await connectToDB()
        
        const duplicateAccount = await Users.findOne({$or: [{email}, {tel}]})

        duplicateAccount && error('This user exist!')

        const regResponse = await Users.create(req.body)

        return res.json({
            success: true,
            data: regResponse,
            message: 'Registration successful'
        })
    }
    catch(err){
        res.status(err.status || 500).json({
            sucess: false,
            message: err.message
        })
    }
}

export default Register 