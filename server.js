const path = require('path')
//prod
app.use(express.static{"./client/buid"});
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});
