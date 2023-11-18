


import error from "src/backend-files/components/error"
import connectToDB from "src/backend-files/dbconfig"
import ConsultationReqs from "src/backend-files/models/ConsultancyReqs"
import Users from "src/backend-files/models/Users"


const RequestConsultancy = async (req, res) => {
    const {title,
    description,
    specialization,
    _id} = req.body

    try{
        await connectToDB()
        
        const isFarmer = await Users.findOne({_id, userType: 'farmer'})

        !isFarmer && error('Operation not allowed!')

        const reqConsResponse = await ConsultationReqs.create({
            title, description, specialization,
            farmer_id: _id
        })

        return res.json({
            success: true,
            data: reqConsResponse,
            message: `Request submitted, you will be appointed a consultant soon!`
        })
    }
    catch(err){
        res.status(err.status || 500).json({
            sucess: false,
            message: err.message
        })
    }
}

export default RequestConsultancy