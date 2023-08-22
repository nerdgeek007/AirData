import React, { useState } from 'react';
import styles from './loader.module.css';
import './App.css';
import ErrorMassage from './components/Error/ErrorMassage';
import Users from './components/Users/Users';

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUserHandler = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(' https://reqres.in/api/users?page=1');
      console.log(response);
      if (!response.ok) {
        throw new Error('404: Something went wrong');
      }
      const users = await response.json();
      setUsers(users.data);
      console.log(users);
    } catch (error) {
      console.log(error.message);
      setError(error.message);
    }
    setIsLoading(false);
  };

  let content = (
    <p className="text-4xl font-bold flex justify-center pt-6">
      Click to get users
    </p>
  );

  if (isLoading) {
    content = <div className={`${styles.loader} w-full mx-auto mt-16`}></div>;
  }

  if (error) {
    content = <ErrorMassage />;
  }

  if (users.length > 0) {
    content = <Users getUsers={users} />;
  }

  if (users.length < 0) {
    <p className="text-4xl font-bold flex justify-center pt-6">
      No users found
    </p>;
  }

  return (
    <React.Fragment>
      <nav className="bg-white  flex px-4 py-6 justify-between items-center md:px-6">
        <button
          href="#"
          className="text-4xl font-extrabold hover:text-gray-700"
        >
          AirData
        </button>

        <button
          className="bg-black text-white px-8 py-2 rounded-full text-lg font-bold md:px-12 hover:bg-gray-700 hover:ease-in hover:duration-200"
          onClick={fetchUserHandler}
        >
          Get Users
        </button>
      </nav>

      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
