import { Fragment } from "react";
import { useRouter } from "next/router";
import EventList from "../../components/events/event-list";
import EventSearch from "../../components/events/event-search";
import { getAllEvents } from "../../dummy-data";

function AllEventsPage() {

    const events = getAllEvents();
    const router = useRouter();

    function searchHandler(year,month) {

        const fullpath = `/events/${year}/${month}`;
        router.push(fullpath);

    }

    return (
        <Fragment>
            <EventSearch onSearch={searchHandler}/>
             <EventList items={events}/>
        </Fragment>
    );
}

export default AllEventsPage;