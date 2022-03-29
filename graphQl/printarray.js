const express = require("express");
const { request, gql } = require("graphql-request");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const query = gql`
  query citySearch($search: String!) {
    city(
      where: {
        _and: [
          { name: { _ilike: $search } }
          { is_connected_city: { _eq: true } }
        ]
      }
    ) {
      id
      name
      is_connected_city
    }
  }
`;

const header = {
  "Content-Type": "application/json",
};
const graphurl = "https://dcore.fr8.in/v1/graphql";

app.get("/city", (req, res) => {
  const serachcity = {
    search: `%${req.query.name}%`,
  };

  request({
    url: graphurl,
    document: query,
    header: header,
    variables: serachcity,
  }).then((data) => res.send(data));
});

app.listen(3000, () => {
  console.log(`Running at port ${3000}`);
});