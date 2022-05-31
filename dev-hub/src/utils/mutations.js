import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const ADD_ORDER = gql`
    mutation addOrder($orderType: String!, $orderTitle: String!, $needByDate: String!, $price: String!, $comments: String!) {
        addOrder(orderType: $orderType, orderTitle: $orderTitle, needByDate: $needByDate, price: $price, comments: $comments) {
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