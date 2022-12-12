import React from "react";

function RestaurantTitle(){
    const currentMonth = new Date().getMonth();
    let currentSeason = "";
    if (currentMonth === 0 || currentMonth === 1  || currentMonth === 11){
        currentSeason = "Winter";
    } else if (currentMonth < 6){
        currentSeason = "Spring";
    } else if (currentMonth < 9){
        currentSeason = "Summer";
    } else {
        currentSeason = "Autumn";
    }
    const restaurantTitle = `House of ${currentSeason}`;
    return restaurantTitle;
}
export default RestaurantTitle;