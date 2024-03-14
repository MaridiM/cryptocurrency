import { useQuery } from "@apollo/client"
import { QUERY_ETH_PRICE } from "pages/graphql/eth-price.guery"
import { useState } from "react"

export const useGraphQLPrice = () => {
    const [price, setPrice] = useState<string>('0')

    useQuery(QUERY_ETH_PRICE, {
        pollInterval : 500,
        onCompleted(data) {
            const ethPriceUSD = data !== undefined ? data?.bundle?.ethPriceUSD : price
            const ethPriceUSDFormated = ethPriceUSD !== undefined 
                ? ethPriceUSD.toString().split('.').length > 1 && ethPriceUSD.toString().split('.')[0]+'.'+ethPriceUSD.toString().split('.')[1].slice(0,6)
                : ethPriceUSD.toString()
            setPrice(ethPriceUSDFormated)
        }
    })

    return price
}