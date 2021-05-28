import { ApolloServer } from 'apollo-server-koa';
import * as Koa from 'koa';
import {readFileSync} from 'fs'
import { join } from "path";
import resolvers from "./resolvers";

const typeDefs = readFileSync(join(__dirname,'./typeDefs.graphql'), 'utf-8')

function initGraphQL(app: Koa): void {
  const server = new ApolloServer({ typeDefs, resolvers });
  server.applyMiddleware({ app });
}

export default initGraphQL;
