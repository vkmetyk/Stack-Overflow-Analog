import React from "react";
import './page-not-found.scss'

function PageNotFound() {
  return (
    <div className='page-not-found'>
      <h1>404</h1>
      <h2>Page not found</h2>
      <img src="/images/page-not-found.svg" alt='404'/>
    </div>
  )
}

export default PageNotFound;