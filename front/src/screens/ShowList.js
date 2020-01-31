// Librairies
import React, { useEffect, useState } from 'react'
// Components
import ShowCard from '../components/ShowCard'
// Styles
import './ShowList.css'

const ShowList = ({ shows }) => {

    // States
    const [isReady, setIsReady] = useState(false)

    useEffect(() => {
        if (shows) setIsReady(true)
    }, [shows])

    return (
        <div className="ShowList">
            {isReady ? shows.map((item, index) => <ShowCard key={index} show={item} />) : 'Loading'}
        </div>
    )
}

export default ShowList