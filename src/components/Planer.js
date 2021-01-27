import React, { useState } from "react";
import axios from "axios";

import NavBar from "./NavBar";

import { Dropdown } from "semantic-ui-react";
import { Container } from "semantic-ui-react";

const continents = [
  { key: "europe", value: "europe", text: "Europe" },
  { key: "africa", value: "africa", text: "Africa" },
  { key: "americas", value: "americas", text: "Americas" },
  { key: "asia", value: "asia", text: "Asia" },
  { key: "oceania", value: "oceania", text: "Oceania" },
];

const Planer = () => {
  const [countryList, setCountryList] = useState([]);
  const [countryInfo, setCountryInfo] = useState({});
  var countriesArr = [];
  var countriesInfo = {};

  const getCountries = async (event, data) => {
    let continent = data.value;
    await axios
      .get(`https://restcountries.eu/rest/v2/region/${continent}`)
      .then((res) => {
        res.data.map((countries) => {
          return countriesArr.push({
            key: countries.alpha2Code,
            value: countries.name,
            text: countries.name,
          });
        });

        setCountryList(countriesArr);
      });
  };

  const getCountriesInfo = async (event, data) => {
    let country = data.value;
    await axios
      .get(`https://restcountries.eu/rest/v2/name/${country}`)
      .then((res) => {
        res.data.map((info) => {
          countriesInfo = {
            name: info.name,
            capital: info.capital,
            currency: info.currencies[0].name,
            population: info.population,
          };

          return countriesInfo;
        });

        setCountryInfo(countriesInfo);
      });
  };

  return (
    <div>
      <NavBar />
      <Container>
        <h1>Choose a region</h1>
        <Dropdown
          placeholder="Select Region"
          fluid
          search
          selection
          options={continents}
          onChange={getCountries}
        />

        <h2>Countries:</h2>
        <Dropdown
          placeholder="Countries"
          fluid
          search
          selection
          options={countryList}
          onChange={getCountriesInfo}
        />

        <h2>INFO:</h2>
        <h5>Name: {countryInfo.name}</h5>
        <h5>Capital: {countryInfo.capital}</h5>
        <h5>Population: {countryInfo.population}</h5>
        <h5>Currency: {countryInfo.currency}</h5>
      </Container>
    </div>
  );
};

export default Planer;
