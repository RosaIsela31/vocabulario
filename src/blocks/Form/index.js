import React from "react";
import { Button, Input } from "../../components";
import "../../App.css";

const Form = () => {
  return (
    <div className="App-header">
      <form className="w-50 p-3">
        <Input />
        <Button />
      </form>
    </div>
  );
};

export default Form;
