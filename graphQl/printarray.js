const express = require("express");
const { request, gql } = require("graphql-request");
const printarray = express();

printarray.use(express.json());
printarray.use(express.urlencoded({ extended: true }));

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

const title = {
  "Content-Type": "application/json",
};
const graphurl = "https://dcore.fr8.in/v1/graphql";

printarray.get("/city", (req, res) => {
  const serachcity = {
    search: `%${req.query.name}%`,
  };

  request({
    url: graphurl,
    document: query,
    header: title,
    variables: serachcity,
  }).then((data) => res.send(data));
});

printarray.listen(3000, () => {
  console.log(`Running at port ${3000}`);
});