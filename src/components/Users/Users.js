import React, { useState } from 'react';

function Users(props) {
  const user = props.getUsers.map(user => {
    return (
      <li key={user.id} className="">
        <div className="flex max-w-[400px] h-[400px] bg-white mx-auto my-8 flex-col items-center justify-center shadow-lg rounded-xl ">
          <div className="">
            <img src={user.avatar} alt="" className="rounded-full pb-2" />
          </div>
          <div className="text-lg font-bold ">
            {user.first_name} {user.last_name}
          </div>
          <div className="text-md">{user.email}</div>
        </div>
      </li>
    );
  });

  return (
    <section className="">
      <ul className="md:grid md:grid-cols-user max-w-[100%] px-6 py-4 lg:gap-6">
        {user}
      </ul>
    </section>
  );
}
export default Users;
