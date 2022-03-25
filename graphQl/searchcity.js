const express = require("express");
const { request, gql } = require("graphql-request");
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const query = gql`
  query citySearch($name: String!) {
    city(where: { name: { _ilike: $name } }) {
      id
      name
      is_connected_city
    }
  }
`;

const header = {
  "Content-Type": "application/json",
};
const endpoint = "https://dcore.fr8.in/v1/graphql";

app.get("/city", (req, res) => {
  const variables = {
    name: `%${req.query.name}%`,
  };

  request({
    url: endpoint,
    document: query,
    header: header,
    variables: variables,
  }).then((data) => res.send(data));
});

app.listen(port, () => {
  console.log(`Running at port ${port}`);
});

