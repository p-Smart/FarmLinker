const mongoose = require('mongoose')
const Schema = mongoose.Schema

const generalConfig = {
    type: String,
    required: true
}
const uniqueConfig = {
    type: String,
    unique: true,
    required: true
}

const UsersModel = new Schema({
    userType: {
        type: String,
        enum: ['buyer', 'farmer', 'consultant'],
        required: true
    },
    fullname: generalConfig,
    email: uniqueConfig,
    tel: uniqueConfig,
    address: {
        type: String,
        required:  function () {
            return this.userType==='buyer' || this.userType==='farmer'
        }
    },
    pass: generalConfig,
    user_reg_date: {
      type: Date,
      default: new Date()
    },

    delivery_address: {
        type: String,
        required:  function () {
            return this.userType === 'buyer' // farm_location is required only for buyers
        }
    },


    farm_location: {
        type: String,
        required:  function () {
            return this.userType === 'farmer' // farm_location is required only for farmers
        }
    },
    farming_ex: {
        type: String,
        required:  function () {
            return this.userType === 'farmer' // farming_ex is required only for farmers
        }
    },
    
    specialization: {
        type: String,
        required:  function () {
            return this.userType === 'consultant' // specialization is required only for consultants
        }
    }
  })

const Users = mongoose.models.Users ||  mongoose.model('Users', UsersModel)

export default Users