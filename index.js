const authRouter = require("./routes/auth")
const portfolioRouter = require("./routes/portfolio")

const routes = [
  { path: '/api/v1/auth', router: authRouter },
  { path: '/api/v1/portfolio', router: portfolioRouter },
];

module.exports = routes;
