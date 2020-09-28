import React, {useEffect, useState} from "react";

function Loading({ showButton }) {
  let [loading, setState] = useState(true);

  const reloadAction = () => window.location.reload();

  useEffect(() => {
    const timer = setTimeout(() => {
      setState(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  if (loading)
    return <p className='loading-text'>Loading...</p>
  else if (!showButton)
    return <p className='error-text'>Loading failed</p>;
  else {
    return (
      <p className='error-text'>
        Loading failed
        <br/>
        <span className='reload-button' onClick={reloadAction}>Reload</span>
      </p>
    )
  }
}

export default Loading;