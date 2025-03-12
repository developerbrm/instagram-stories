import React from 'react'
import { getRandomNumberInRange } from '../../utilities'
import PeopleItem from './PeopleItem'

const peopleToShow = getRandomNumberInRange(5, 10)

const RenderPeoples = () => {
  return (
    <div className="flex">
      {[...Array(peopleToShow)].map((item) => (
        <PeopleItem key={item} />
      ))}
    </div>
  )
}

export default RenderPeoples
