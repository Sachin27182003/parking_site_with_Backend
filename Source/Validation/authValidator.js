const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/serverConfig');
// const UnauthorizedError = require('../utils/unAuthorisedError');
const { logout } = require('../Controller/authController');

async function isLoggedIn(req, res, next){

    console.log(req.cookies['authToken']);

    const token = req.cookies['authToken'];

    if(!token){
        return res.status(401).json({
            success: false,
            data: {},
            error: "Not authenticated",
            message: "No Authorisation token provided"
        });
    }

    try {
        const decoded = await jwt.verify(token, JWT_SECRET);

        if(!decoded){
           throw new UnauthorizedError();
        }
    
        req.user = {
            email: decoded.email,
            id: decoded.id,
            role : decoded.role
        }
    
        next();

    } catch (error) {
        // if(error.name === "TokenExpiredError" || error.name === "JsonWebTokenError") {
        //     res.cookie("authToken", "", {
        //         httpOnly : true,
        //         secure: true,
        //         maxAge: 7 * 24 * 60 * 60 * 1000
        //     });
        
        //     return res.status(200).json({
        //         success: true,
        //         message: "logged out successfully",
        //         error: {},
        //         data: {}
                
        //     })
        // }
        return res.status(401).json({
            success: false,
            data: {},
            error: error,
            message: "Invalid token provided"
        });
    }
    
}





module.exports = {
    isLoggedIn
}
