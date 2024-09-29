import React, { useEffect } from "react";

const Contact = () => {
  return (
    <div>
      <h1>Contact Us</h1>
      <form>
        <input
          className="p-4 m-4 border-2 border-black"
          placeholder="Please enter name"
        ></input>

        <input
          className="p-4 m-4 border-2 border-black"
          placeholder="Please enter mobile"
        ></input>

        <button className="p-4 m-4 border-2 w-[10%] border-black">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
