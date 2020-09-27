import React, {useEffect, useState} from "react";

function Loading() {
  let [loading, setState] = useState(true);

  const reload = () => window.location.reload();

  useEffect(() => {
    const timer = setTimeout(() => {
      setState(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  if (loading)
    return <p className='loading-text'>Loading...</p>

  return (
    <p className='error-text'>
      Loading failed
      <br />
      <span className='reload-button' onClick={reload}>Reload</span>
    </p>
  )
}

export default Loading;