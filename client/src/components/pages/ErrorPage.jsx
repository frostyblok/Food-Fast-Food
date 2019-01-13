import React from 'react';

const ErrorPage = () => {
  return (
    <div>
      <section className="error-page">
        <div className="container">
          <h1 className="error-error" className="error-page-text">404 ERROR<br />SORRY - PAGE NOT FOUND</h1>
        </div>
      </section>
      <section className="error-page-description">
        <div className="container">
          <h3>The page might have been moved or deleted</h3>
          <h3>Please make sure the address is correctly spelled or visit the <a href="#">Homepage</a></h3>
        </div>
      </section>
    </div>
   );
}

export default ErrorPage;
