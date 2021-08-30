import React from "react";
import { Link } from 'react-router-dom';
import { Spinner } from '@epam/promo';

export const Contacts = () => {
  return (
    <>
      <h1>Contacts</h1>
      <h2>
        <Link to="/">Back home</Link>
      </h2>
      <h2>
        <Link to="/service">Go service</Link>
      </h2>
      <Spinner color='blue'/>
    </>
  );
};
