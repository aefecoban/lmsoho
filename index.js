const ApplicationClass = require("./Application");
const App = new ApplicationClass();

module.exports = async (req, res) => {
  await App.HandleRequest(req, res); // Route and handle the incoming request
};
