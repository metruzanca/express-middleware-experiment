const app = require('./server.js')

const PORT = process.env.PORT || 3333

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`))