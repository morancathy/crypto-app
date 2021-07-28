import {useEffect, useState} from 'react';

const Price = (props) => {
  //make api variable
  const apiKey = '418C9F6A-4103-41AA-9084-D8E2BCB0AF6B';

  // Grabbing the Currency symbol from the URL Param
  const symbol = props.match.params.symbol || 'btc'

  // Using the other two variables to create our URL
  // app key, base asset id, exhage rate quote asset id,
  const url = `https://rest-sandbox.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`;

   //state to hold the coin data, cause it might/will change
   const [coin, setCoin] = useState({})

   //function to fetch coin data
   const getCoin = async () => {
     try {
       const response = await fetch(url);
       const data = await response.json();
       setCoin(data);
     } catch (error) {
       console.log("error ", error)
     }
   };

   // useEffect to run getCoin when component mounts
   useEffect(() => {
     getCoin()
   }, []);

   // loaded when data is fetched (if wanted, could write this inline in the return)
   const loaded = (
     <div>
      <h1>
        {coin.asset_id_base}/{coin.asset_id_quote}
      </h1>
      <h2>{coin.rate}</h2>
    </div>
  );

   // Function for when data doesn't exist
   const loading = <h1>Loading...</h1>

   // if coin has data, run the loaded function, otherwise, run loading
  return (
    <>
      {coin.rate ? loaded : loading}
    </>
  )
};

export default Price;
