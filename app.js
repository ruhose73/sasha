const express = require('express')
const PORT = process.env.PORT || 5000
const router = require('./routers/authRouter')

const app = express()
app.use(express.json())
app.use('/api', router)

const start = async () => {
    try{
        app.listen(PORT, ()=> console.log(`App has been started on port ${PORT}`))
    } catch(e){
        console.log(`Server error: ${e.message}` )
    }
}

start()