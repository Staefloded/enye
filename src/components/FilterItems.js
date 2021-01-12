import { useContext, useRef } from "react";
import UsersContext from "./context/UsersContext";

const FilterItems = () => {
  const usersContext = useContext(UsersContext);
  const { filteredUsers } = usersContext;

  const gender = useRef("");
  const paymentMethod = useRef("");

  const onChange = (e) => {
    filteredUsers(e.target.value);
  };

  return (
    <div>
      <form>
        <label htmlFor="gender">Gender</label>
        <div className="form-control">
          <label htmlFor="Male">Male</label>
          <input
            type="radio"
            name="gender"
            id="gender"
            value="Male"
            ref={gender}
            onChange={onChange}
          />
        </div>
        <div className="form-control">
          <label htmlFor="Female">Female</label>
          <input
            type="radio"
            name="gender"
            id="gender"
            value="Female"
            ref={gender}
            onChange={onChange}
          />
        </div>
        <div className="form-control">
          <label htmlFor="Prefer to skip">Prefer to skip</label>
          <input
            type="radio"
            name="gender"
            id="gender"
            value="Prefer to skip"
            ref={gender}
            onChange={onChange}
          />
        </div>
        <div className="form-control">
          <label htmlFor="paymentMethod">Payment Method</label>
          <label htmlFor="Check">Check</label>
          <input
            type="radio"
            ref={paymentMethod}
            name="paymentMenthod"
            id="paymentMethod"
            value="check"
            onChange={onChange}
          />
          <label htmlFor="CC">CC</label>
          <input
            type="radio"
            name="paymentMenthod"
            ref={paymentMethod}
            id="paymentMethod"
            value="cc"
            onChange={onChange}
          />
          <label htmlFor="Money Order">Money Order</label>
          <input
            type="radio"
            ref={paymentMethod}
            name="paymentMenthod"
            id="paymentMethod"
            value="money order"
            onChange={onChange}
          />
          <label htmlFor="Paypal">Paypal</label>
          <input
            type="radio"
            name="paymentMenthod"
            ref={paymentMethod}
            id="paymentMethod"
            value="paypal"
            onChange={onChange}
          />
        </div>
        ;
      </form>
    </div>
  );
};

export default FilterItems;
