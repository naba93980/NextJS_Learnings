import { useState } from "react";

function EventList({ eventlList }) {
    const [events, setEvents]=useState(eventlList);

    const fetchSportsEvents = async () => {
        const response = await fetch('http://localhost:4000/events?category=sports');
        const data = await response.json();
        setEvents(data);
    }
    
    return (
        <>
            <h1>List of events</h1>
            <button onClick={fetchSportsEvents}>Sports Events</button>
            {events.map(event => {
                return (
                    <div key={event.id}>
                        <h2>
                            {event.id} {event.title} {event.date} | {event.category}
                        </h2>
                        <p>{event.description}</p>
                        <hr />
                    </div>
                )
            })
            }
        </>
    )
}

export default EventList

export async function getServerSideProps() {
    console.log("fetching events");
    const response = await fetch('http://localhost:4000/events')
    const data = await response.json()
    return {
        props: {
            eventlList: data,
        }
    }
}