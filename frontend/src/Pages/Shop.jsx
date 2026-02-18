import React, { useEffect, useState } from "react";
import Hero from "../Components/Hero/Hero";
import Popular from "../Components/Popular/Popular";
import Offers from "../Components/Offers/Offers";
import NewCollections from "../Components/NewCollections/NewCollections";
import NewsLetter from "../Components/NewsLetter/NewsLetter";
import { backend_url } from "../App";

const Shop = () => {
  const isBackendEnabled = process.env.REACT_APP_ENABLE_BACKEND === "true";
  const [popular, setPopular] = useState([]);
  const [newcollection, setNewCollection] = useState([]);

  useEffect(() => {
    if (!isBackendEnabled) {
      return;
    }

    const fetchInfo = async () => {
      try {
        const popularResponse = await fetch(`${backend_url}/popularinwomen`);
        if (!popularResponse.ok) {
          throw new Error(`Popular products request failed with status ${popularResponse.status}`);
        }
        const popularData = await popularResponse.json();
        setPopular(popularData);
      } catch (error) {
        console.error("Unable to load popular products.", error);
        setPopular([]);
      }

      try {
        const newCollectionResponse = await fetch(`${backend_url}/newcollections`);
        if (!newCollectionResponse.ok) {
          throw new Error(`New collections request failed with status ${newCollectionResponse.status}`);
        }
        const newCollectionData = await newCollectionResponse.json();
        setNewCollection(newCollectionData);
      } catch (error) {
        console.error("Unable to load new collections.", error);
        setNewCollection([]);
      }
    };

    fetchInfo();
  }, [isBackendEnabled]);

  return (
    <div>
      <Hero />
      <Popular data={popular} />
      <Offers />
      <NewCollections data={newcollection} />
      <NewsLetter />
    </div>
  );
};

export default Shop;
