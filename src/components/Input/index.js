import React from "react";

const Input = () => {
  return (
    <div className="mb-3 text-center">
      <fieldset>
        <label for="word">Nueva Palabra</label>
        <input
          id="word"
          class="form-control"
          type="text"
          placeholder="example: cat"
        />
      </fieldset>
    </div>
  );
};

export default Input;
