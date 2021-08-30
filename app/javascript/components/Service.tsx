import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SuccessAlert, Text } from '@epam/promo';

export const Service: React.FC = () => {
  return (
    <div>
      <h1>Service</h1>
      <SuccessAlert> <Text size="24" fontSize='14'> Success notification </Text> </SuccessAlert>
      <h2>
        <Link to="/">Back home</Link>
      </h2>
      <h2>
        <Link to="/contacts">Go contacts</Link>
      </h2>
    </div>
  );
};