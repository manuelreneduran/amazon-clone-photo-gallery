const app = require("./index");
const port = process.env.PORT || 3003

app.listen(port, () => console.log(`server starting on port ${port}!`));