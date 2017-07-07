import React from 'react'
import './PersonCard'

const VehicleCard = ( {vehicleInfo, toggleFavorites} ) => {

  let favorited;
  !vehicleInfo.favorited ? favorited = 'normal-btn' : favorited = 'pink-btn'

  return (
    <div className="card">
      <h1>Name: {vehicleInfo.name}</h1>
      <p>Model: {vehicleInfo.model}</p>
      <p>Class: {vehicleInfo.vehicle_class}</p>
      <p>Passengers: {vehicleInfo.passengers}</p>
      <button className={favorited} onClick={()=> toggleFavorites(vehicleInfo)}>Like</button>
    </div>
  )
}

export default VehicleCard;
