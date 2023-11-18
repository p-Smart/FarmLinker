import connectToDB from "src/backend-files/dbconfig"
import Users from "src/backend-files/models/Users"


const Test = async (req, res) => {
    try{
        await connectToDB()

        const response = await Users.create({
            userType: 'farmer',
            fullname: 'Ajayi Prince Ayokunle',
            email: 'princeayokunle2002@gmail.com',
            tel: '09063900991',
            address: '75 OMOWOLE STREET, SASA AREA, IBADAN',
            pass: 'Password1010',
            farm_location: 'Oyo Town',
            farming_ex: '5 Years',
            user_reg_date: new Date()
        })

        return res.json(response)
    }
    catch(err){
        res.status(err.status || 500).json({
            error: {
              message: err.message
            }
        })
    }
    finally{

    }
}


export default Test