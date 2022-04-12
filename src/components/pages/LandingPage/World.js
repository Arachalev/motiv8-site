import { useEffect, useState, useRef } from "react";
import Globe from 'react-globe.gl';
import _, { indexBy } from 'underscore';
import * as d3 from "d3-dsv"
// import  * from "d3-dsv"



// const { useState, useEffect, useRef } = React;

  const COUNTRY = 'Nigeria';
  const MAP_CENTER = { lat: 6.5244, lng: 3.3792, altitude: 2 };
  const OPACITY = 0.3;

  const airportParse = ([airportId, name, city, country, iata, icao, lat, lng, alt, timezone, dst, tz, type, source]) => ({ airportId, name, city, country, iata, icao, lat, lng, alt, timezone, dst, tz, type, source });
  const routeParse = ([airline, airlineId, srcIata, srcAirportId, dstIata, dstAirportId, codeshare, stops, equipment]) => ({ airline, airlineId, srcIata, srcAirportId, dstIata, dstAirportId, codeshare, stops, equipment});

  const World = () => {
    const globeEl = useRef();
    const [airports, setAirports] = useState([]);
    const [routes, setRoutes] = useState([]);
    const [hoverArc, setHoverArc] = useState();

    useEffect(() => {
      // load data
      Promise.all([
        fetch('https://raw.githubusercontent.com/jpatokal/openflights/master/data/airports.dat').then(res => res.text())
          .then(d => d3.csvParseRows(d, airportParse)),
        fetch('https://raw.githubusercontent.com/jpatokal/openflights/master/data/routes.dat').then(res => res.text())
          .then(d => d3.csvParseRows(d, routeParse))
      ]).then(([airports, routes]) => {

        // const filteredAirports = airports.filter(d => d.country === COUNTRY);
        const filteredAirports = airports;
        const byIata =  indexBy(filteredAirports, 'iata', false);
        console.log(byIata)


        const filteredRoutes = routes
          .filter(d => byIata.hasOwnProperty(d.srcIata) && byIata.hasOwnProperty(d.dstIata)) // exclude unknown airports
          // non-stop flights only
          .filter(d => d.stops === '0') 
          .map(d => Object.assign(d, {
            srcAirport: byIata[d.srcIata],
            dstAirport: byIata[d.dstIata]
          }))
          .filter(d => d.srcAirport.country === COUNTRY || d.dstAirport.country === COUNTRY);  
          // routes from the country

        setAirports(filteredAirports);
        setRoutes(filteredRoutes);

        globeEl.current.pointOfView(MAP_CENTER, 8000);
      });
    }, []);

    return (
        <div   >


<Globe
      backgroundColor="#ffffff"
      width = {500}
      height={500}
      animateIn={true}
      showAtmosphere={true}
      atmosphereColor="#9945f0"
      ref={globeEl}
      globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
      
      
      arcsData={routes}
    //   arcLabel={d => `${d.airline}: ${d.srcIata} &#8594; ${d.dstIata}`}
      arcStartLat={d => +d.srcAirport.lat}
      arcStartLng={d => +d.srcAirport.lng}
      arcEndLat={d => +d.dstAirport.lat}
      arcEndLng={d => +d.dstAirport.lng}
      arcDashLength={0.4}
      arcDashGap={0.2}
      arcDashAnimateTime={1500}
      arcsTransitionDuration={0}
      arcColor={d => {
        const op = !hoverArc ? OPACITY : d === hoverArc ? 0.9 : OPACITY / 4;
        return [`rgba(0, 255, 0, ${op})`, `rgba(255, 0, 0, ${op})`];
      }}
    //   onArcHover={setHoverArc}

      pointsData={airports}
      pointColor={() => 'orange'}
      pointAltitude={0}
      pointRadius={0.04}
      pointsMerge={true}
    />

        </div>
   );
  };

  export default World