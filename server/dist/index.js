const express = require("express");
const mongoose = require("mongoose");
const { ApolloServer } = require('apollo-server');
const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');
const PORT = process.env.PORT || 3000;
const server = new ApolloServer({
    typeDefs,
    resolvers,
    // add request and response to graphQL context
    // context: ({ req, res }) => ({ req, res }),
});
// const app = express();
//put in env eventually
const url = "mongodb+srv://tigerking:wphPpplcHRwNdv29@riceapps2020-21-ppsrv.gcp.mongodb.net/bunkmate_dev?retryWrites=true&w=majority";
mongoose.connect(url, { useNewUrlParser: true })
    .then(() => {
    console.log("Mongoose connected");
    return server.listen({ port: PORT });
})
    .then((res) => {
    console.log(`🛸 Server ready at ${res.url}`); //${ server.graphqlPath }
});
// module.exports = app;
//# sourceMappingURL=index.js.map