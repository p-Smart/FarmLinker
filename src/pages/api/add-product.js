import formidable from "formidable"
import error from "src/backend-files/components/error"
import connectToDB from "src/backend-files/dbconfig"
import Products from "src/backend-files/models/Products"
import Users from "src/backend-files/models/Users"

const formidablePromise = async (req) => {
    return new Promise((resolve, reject) => {
      const form = new formidable.IncomingForm();
      form.parse(req, async (err, fields, files) => {
        if (err) {
          reject(err);
          return;
        }
        resolve({...fields, ...files});
      });
    });
}



const AddProduct = async (req, res) => {

    try{
        await connectToDB()
        const data = await formidablePromise(req)
        
        const isFarmer = await Users.findOne({_id, userType: 'farmer'})

        !isFarmer && error('Operation not allowed!')

        const addProductRes = await Products.create({
            productName, description, category, price, availQuantity, farmer_id,
            // images: []
        })

        return res.json({
            success: true,
            data: addProductRes,
            message: `Product Uploaded successfully`
        })
    }
    catch(err){
        res.status(err.status || 500).json({
            sucess: false,
            message: err.message
        })
    }
}

export default AddProduct


export const config = {
    api: {
      bodyParser: false,
    },
}