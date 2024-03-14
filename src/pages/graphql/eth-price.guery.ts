import { gql } from "graphql.macro";

export const QUERY_ETH_PRICE = gql`
    query {
        bundle(id: "1") {
            ethPriceUSD: ethPrice
        }
    }
`