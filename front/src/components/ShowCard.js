// Librairies
import React, { useEffect, useState } from 'react'
import Axios from 'axios'
// Styles
import './ShowCard.css'

const ShowCard = ({ show }) => {

    // States
    const [ticketAvailable, setTicketAvailable] = useState(false)

    // Verify the number of available tickets
    useEffect(() => {
        Axios.get(`http://localhost:5005/shows/${show.id}`)
            .then(response => {
                if (response.data[0].nb_available_tickets > 0) {
                    setTicketAvailable(true)
                }
            })
    })

    // Change date format
    const dateFormater = (start, end) => {
        // Get the start date values
        const s_year = start.split('T')[0].split('-')[0]
        const s_month = start.split('T')[0].split('-')[1]
        const s_day = start.split('T')[0].split('-')[2]
        const s_hour = start.split('T')[1].split(':')[0]
        const s_min = start.split('T')[1].split(':')[1]
        // Get the end date values
        const e_year = end.split('T')[0].split('-')[0]
        const e_month = end.split('T')[0].split('-')[1]
        const e_day = end.split('T')[0].split('-')[2]
        const e_hour = end.split('T')[1].split(':')[0]
        const e_min = end.split('T')[1].split(':')[1]
        // Change the way we display the date if the start day and end day are the same
        if ((s_year === e_year) && (s_month === e_month) && (s_day === e_day)) {
            return `${s_month}/${s_day}/${s_year}, ${s_hour}h${s_min} - ${e_hour}h${e_min}`
        }
        else {
            return `${s_month}/${s_day}/${s_year} at ${s_hour}h${s_min} to ${e_month}/${e_day}/${e_year} at ${e_hour}h${e_min}`
        }
    }

    // Get a ticket
    const getTicket = () => {
        Axios({
            method: 'post',
            url: `http://localhost:5005/tickets/${show.id}/add`,
            data: []
        })
            .then(response => {
                if (response) alert('Ticket bought !')
            })
    }

    return (
        <div className="ShowCard">
            <div className="ShowCard-Border"></div>
            <div className="ShowCard-Content">
                <h4 className="ShowCard-Title">{show.name}</h4>
                <p className="ShowCard-Text">
                    {dateFormater(show.s_date, show.e_date)}{'\n'}
                    {show.location}
                </p>
                {ticketAvailable ? (<input className="ShowCard-Button" type="button" value="Get a ticket now !" onClick={getTicket} />) : `There's no more tickets`}
            </div>
        </div>
    )
}

export default ShowCard