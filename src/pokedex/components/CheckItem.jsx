import React from "react";

export const CheckItem = ({ poketype, onChangePokeType }) => {
  return (
    <div className="form-check" >
      <input
        className="form-check-input"
        type="checkbox"
        value=""
        id={`${poketype.name}`}
        checked={poketype.selected}
        onChange={(e)=>onChangePokeType(poketype,e)}
      />
      <label className="form-check-label" htmlFor={`${poketype.name}`}>
        {poketype.name}
      </label>
    </div>
  );
};
