import React, { useState, useEffect } from 'react';
import Loader from '../Loader/Loader';

const DelayedSuspense = ({ children, delay = 1500 }) => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  if (showLoader) {
    return <Loader />;
  }

  return children;
};

export default DelayedSuspense;