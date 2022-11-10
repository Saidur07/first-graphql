import express from "express";
import schema from "./schema.js";
import resolvers from "./resolvers.js";
import { graphqlHTTP } from "express-graphql";
const app = express();
const port = 8000;

app.get("/", (req, res) => {
  res.send("Running graphql....");
});
const root = resolvers;
app.use(
  "/api",
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(port, () => {
  console.log("Running our very fast graphql.");
});
