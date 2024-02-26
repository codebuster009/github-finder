import React from 'react';

const Home = () => {
  return (
    <div>
      <h1 className="text-6l text-blue-700">Welcome</h1>
      {import.meta.env.VITE_APP_GITHUB_TOKEN}
      {import.meta.env.VITE_APP_NAME}
    </div>
  );
};

export default Home;
