import React from "react";

function CreateDrinkMenu(drink: { name: string }) {
  return (
    <p key={drink.name} className="text-left text-lg leading-6">
      {drink.name}
    </p>
  );
}

export default CreateDrinkMenu;
