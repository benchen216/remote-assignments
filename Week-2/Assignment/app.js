const express = require('express')
const app = express()
const port = 3000
app.use(express.static('public'))
app.get('/', (req, res) => {
    res.send('Hello, My Server!')
})
app.get('/data', (req, res) => {
    if(req.query.number){
        num = Number(req.query.number)
        if (Number.isInteger(num)){
            if (num>0){
                res.send(sum_up(num).toString());
            }else {
                res.send(0);
            }

        }else{
            res.send("Wrong Parameter");
        }
    }else {
        res.send("Lack of Parameter");
    }
})
function sum_up(N){
    return (N+1)*N/2;
}
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})