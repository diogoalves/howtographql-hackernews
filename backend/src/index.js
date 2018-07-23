const { GraphQLServer } = require('graphql-yoga')

let links = [{
  id: 'link-0',
  url: 'www.howtographql.com',
  description: 'Fullstack tutorial for GraphQL'
}]

let idCount = links.length;

const resolvers = {
  Query: {
    info: () => `This is the API of a Hackernews Clone`,
    feed: () => links,
    link: (root, args) => links.find( e => e.id === args.id),
  },
  Mutation: {
    post: (root, args) => {
       const link = {
        id: `link-${idCount++}`,
        description: args.description,
        url: args.url,
      }
      links.push(link)
      return link
    },
    updateLink: (root, args) => {
      const foundIndex = links.findIndex( e => e.id === args.id);
      if(foundIndex > 0) {
        links[foundIndex].description = args.description;
        links[foundIndex].url = args.url;
      }
      return links[foundIndex];
    },
    deleteLink: (root, args) => {
      const willDelete = links.filter( e => e.id === args.id)[0];
      links = links.filter( e => e.id !== args.id);
      return willDelete;
  },
  },
  Link: {
    id: (root) => root.id,
    description: (root) => root.description,
    url: (root) => root.url
  }
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
})

server.start(() => console.log(`Server is running on http://localhost:4000`))