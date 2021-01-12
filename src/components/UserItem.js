import React from "react";

const UserItem = ({ user }) => {
  return (
    <div>
      <p>
        {user.FirstName} {user.LastName} {user.Gender} {user.PaymentMethod}
      </p>
    </div>
  );
};

export default UserItem;
