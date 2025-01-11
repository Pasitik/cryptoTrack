const jwt = require("jsonwebtoken")

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers.authorization

    if(!authHeader){
        return res.status(401).json({ message: "Access denied. No token provided." });
    }

    const token = authHeader.split(" ")[1]

    if(!token){
        return res.status(401).json({ message: "Access denied. Token is missing." });
    }

    try {
        const secretKey = process.env.JWT_SECRET

        const decoded = jwt.verify(token, secretKey)

        req.data = decoded

        next()
    }catch(error){
        console.error("Token verification failed:", error.message);
        return res.status(403).json({ message: "Invalid token." });
    }
}

module.exports = authenticateToken;
