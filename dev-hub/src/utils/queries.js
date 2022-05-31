import { gql } from "@apollo/client";

export const QUERY_USER = gql`
    query user($username: String!) {
        user(username: $username) {
            _id
            username
            email
            orders {
                _id: ID
                orderType
                orderTitle
                needByDate
                price
                comments
                createdAt
            }
        }
    }
`;

export const QUERY_ME = gql`
  {
    me {
        _id
        username
        email
        orders {
            _id: ID
            orderType
            orderTitle
            needByDate
            price
            comments
            createdAt
        }
    }
  }
`;

export const QUERY_ORDERS = gql`
  query orders($username: String!) {
      orders(username: $username) {
        _id: ID
        orderType
        orderTitle
        needByDate
        price
        comments
        createdAt
        username
      }
  }
`;

export const QUERY_ORDER = gql`
    query order($id: ID!) {
        order(_id: $id) {
            _id
            orderType
            orderTitle
            needByDate
            price
            comments
            createdAt
            username
          }
    }
`;