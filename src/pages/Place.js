import {useEffect, useState} from 'react';

const Place = (props) => {
  //make api variable
  // const apiKey = '418C9F6A-4103-41AA-9084-D8E2BCB0AF6B';
  const apiKey = '33wscvhgi858swauds23p3e184bynbrl';
  const acctId = 'E1O6UDDX';

  // Grabbing the Currency symbol from the URL Param
  // const symbol = props.match.params.symbol || 'BTC'
    const city = props.match.params.city || 'Paris'

  // Using the other two variables to create our URL
  // const url = `https://rest-sandbox.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`;

// const url = `https://www.triposo.com/api/20210615/location.json?id=${city}&account=${acctId}&token=${apiKey}`

  const url = `https://www.triposo.com/api/20210615/location.json?id=${city}&fields=all&account=${acctId}&token=${apiKey}`;

// const url = `https://www.triposo.com/api/20210615/location.json?
// tag_labels=city
// &annotate=trigram:Paris
// &trigram=>=0.3
// &count=10
// &fields=id,name,score,country_id,parent_id,snippet
// &order_by=-trigram`

  //state to hold the place data, cause it might/will change
  const [places, setPlaces] = useState({})

  //function to fetch place data
  const getPlaces = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setPlaces(data.results[0]);
    } catch (error) {
      console.log("error ", error)
    }
  };

  // useEffect to run getPlace when component mounts
  useEffect(() => {
    getPlaces()
  }, []);

  // loaded when data is fetched (if wanted, could write this inline in the return)
  const loaded = (
    <div>
      <h1>{places}</h1>

    </div>
  );

  // Function for when data doesn't exist
  const loading = <h1>Loading...</h1>

  // if place has data, run the loaded function, otherwise, run loading
  return (
    <>
      {console.log('places',places)}
      {console.log(places.results)}
  {/*    {console.log("capt:", places.results[0].images.[0].caption)}}*/}
      {Object.keys(places).length ? (

        <>
        {/*
          This was the first run, London
          <h3>{places.results[0].id}</h3>
        <h4>Country:  {places.results[0].country_id}</h4>
        <h4>  {places.results[0].snippet}</h4>

        <h4> caption: {places.results[0].images.[0].caption}</h4>
        <img src={places.results[0].images.[0].source_url} alt="suppose to be a pic" style={{width: "150px"}}/>
        <h4> caption: {places.results[0].images.[1].caption}</h4>
        <img src={places.results[0].images.[1].source_url} alt="suppose to be a pic" style={{width: "150px"}}/>
        <h4>map view:
          <a className="link" href={places.results[0].attribution.[0].url} target="_blank">
                MapView
          </a>
        </h4>
        <a className="link" href={places.results[0].attribution.[2].url} target="_blank">
              More Info:
        </a>*/}
        <h3>{places.id}, {places.country_id}</h3>
        <h4>Brief Intro: {places.snippet}</h4>
        <h4>{places.intro}</h4>

        {places ? places.images.map((image, key) => {

            return (
              <>
              <h4>Pic:{image.caption}</h4>
              <img src={image.source_url} alt="suppose to be a pic" style={{width: "150px"}}/>
              </>
            )
        }): <h1>....Loading</h1>}

        <a className="link" href={places.attribution.[0].url} target="_blank">
          view map
        </a>

        <a className="link" href={places.attribution.[2].url} target="_blank">
          More Info
        </a>

        </>

      ) : ( loading)}

      {/* {place._id ? loaded : loading}*/}
    </>
  )
};

export default Place;

// <h4> title: {places.results[0].structured_content.sections[0].title}</h4>
// <h4> body: {places.results[0].structured_content.sections[0].body}</h4>
// <h4> understand: {places.results[0].structured_content.sections[1].title}</h4>
// <h4> body: {places.results[0].structured_content.sections[1].body}</h4>
// <h4> do: {places.results[0].structured_content.sections[2].title}</h4>
// <h4> body: {places.results[0].structured_content.sections[2].body}</h4>
