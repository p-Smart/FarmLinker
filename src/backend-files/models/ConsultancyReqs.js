const mongoose = require('mongoose')
const Schema = mongoose.Schema

const generalConfig = {
    type: String,
    required: true
}

const ConsultationReqsModel = new Schema({
    title: generalConfig,
    description: generalConfig,
    specialization: generalConfig,
    farmer_id: generalConfig,
  })

const ConsultationReqs = mongoose.models.ConsultationReqs ||  mongoose.model('ConsultationReqs', ConsultationReqsModel)

export default ConsultationReqs