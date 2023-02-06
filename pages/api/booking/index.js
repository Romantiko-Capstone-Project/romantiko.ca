import dbConnect from "../../../util/mongo";
import Booking from "../../../models/booking"


export default async function handler(req, res){
    const {method} = req;

    dbConnect()

    if(method == "GET"){

    }

    if(method == "POST"){
        try{
            
        } catch(err){
            res.status(500).json("err");
        }
    }
}
