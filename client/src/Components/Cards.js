import React from 'react'
import Carditem from './Carditem'
import './Cards.css'

function Cards() {
    return (
        <div className="cards">
            <h1>Check out these EPIC destinations</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <Carditem 
                        src='Images/img-9.jpg' alt='waterfall'
                        text="Explore the Hidden waterfall deep inside the Amazon Jungle"
                        label='Adventure'
                        path='/services'
                        />
                        <Carditem 
                        src='Images/img-2.jpg' alt='waterfall'
                        text="Travel through the Islands of Bali in a Private Cruise"
                        label='Luxury'
                        path='/services'
                        /></ul>
                        <ul className="cards__items">
                        <Carditem 
                        src='Images/img-3.jpg' alt='waterfall'
                        text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
                        label='Mystery'
                        path='/services'
                        />
                        <Carditem 
                        src='Images/img-4.jpg' alt='waterfall'
                        text="Experience Football on Top of the Himilayan Mountains"
                        label='Adventure'
                        path='/services'
                        />
                        <Carditem 
                        src='Images/img-1.jpg' alt='waterfall'
                        text="Go hiking through the mountains"
                        label='Adventure'
                        path='/services'
                        />
                    </ul>
                </div> 
            </div>
        </div>
    )
}

export default Cards
