import React from 'react';

const PageBottom = () => {
  return (
    <footer className="bg-black bg-opacity-50 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          Built by Alexandre BOURDOIS | To Do List on Ethereum | {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default PageBottom;