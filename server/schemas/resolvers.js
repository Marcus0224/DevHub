// const typeDefs = require('./typeDefs');
// const resolvers = require('./resolvers');

// module.exports = { typeDefs, resolvers };

const resolvers = {
  Query: {
    helloWorld: () => {
      return 'Hello world!';
    }
  }
};

module.exports = resolvers;
