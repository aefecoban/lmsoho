const ApplicationClass = require("./Application");
const App = new ApplicationClass();

module.exports = async (req, res) => {
  try {
    // Create a Koa context for the request and response
    const ctx = App.app.createContext(req, res);
    
    // Call Koa's handleRequest method to process the request
    await App.app.callback()(ctx.req, ctx.res);
  } catch (err) {
    console.error('Error handling request:', err);
    res.status(500).send('Internal Server Error');
  }
};
