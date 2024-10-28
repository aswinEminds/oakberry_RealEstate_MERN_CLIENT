import React, { useEffect } from "react";
import HeroSectionCard from "../../components/cards/HeroSectionCard/HeroSectionCard";
import MySearchBar from "../../components/searchBar/SearchBar";
import "./properties.css";
import { useQuery } from "react-query";
import { getProperties } from "../../api/property_api";
import PropertyCard from "../../components/cards/propertycard/PropertyCard";
import { useSearchParams } from "react-router-dom";

function Properties() {
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type");
  const location = searchParams.get("location");
  const price = searchParams.get("price");

  const { data, error, isLoading } = useQuery(
    ["properties", { type, location, price }],
    () =>
      getProperties({
        type,
        location,
        price,
      }),
    {
      keepPreviousData: true,
    }
  );

  useEffect(() => {}, []);

  return (
    <div className="property-parent">
      <div className="hero">
        <HeroSectionCard pageName={"properties"} />
        <MySearchBar className="filter" />
      </div>
      <div className="properties-wrapper container">
        {isLoading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error</div>
        ) : data.length !== 0 ? (
          <div className="properties">
            {data.map((property) => (
              <PropertyCard property={property} />
            ))}
          </div>
        ) : (
          <div>
            <img
              src="https://feniuniversity.ac.bd/public/images/nodatafound.png"
              alt=""
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Properties;
