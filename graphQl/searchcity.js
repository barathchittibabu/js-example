const express = require("express");
const { request, gql } = require("graphql-request");
const app = express();

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

const title = {
  "Content-Type": "application/json",
};
const graphurl = "https://dcore.fr8.in/v1/graphql";

app.get("/city", (req, res) => {
  const serachcity = {
    name: `%${req.query.name}%`,
  };

  request({
    url: graphurl,
    document: query,
    header: title,
    variables: serachcity,
  }).then((data) => res.send(data));
});

app.listen(3000, () => {
  console.log(`running port ${3000}`);
});
