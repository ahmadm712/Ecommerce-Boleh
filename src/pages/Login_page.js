import React from "react";
import { useHistory } from 'react-router-dom'


function LoginPage() {
    const history = useHistory()
  const handleNext = () => {
    history.push("/register");
  };
  return (
    <div>
      <h1>ini Page Login</h1>
      <div className="flex justify-center mt-5 mb-5">
        <button
          className="bg-green-500  text-white font-bold py-2 px-4 rounded"
          onClick={handleNext}
        >
          Register
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
