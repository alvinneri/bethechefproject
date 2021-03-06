const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema');
const PORT = process.env.PORT || 5000;
const app = express();
const cors = require('cors');
const path = require('path');

app.use(cors());


app.use('/graphql' , graphqlHTTP({
    schema: schema ,
    graphiql: true
}))



if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build' ));

    app.get('*', (req,res)=>{
        res.sendFile(path.join(__dirname, 'client', 'build' , 'index.html'));
    });
}

app.listen(PORT, () => {
    console.log(`App listening to PORT ${PORT}`);
    
})