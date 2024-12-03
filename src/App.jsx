import React, { useEffect, useState } from 'react';
import KanbanBoard from './components/KanbanTab';
import { fetchTickets } from './api/tickets';
import './global.css';

const App = () => {
    const [tickets, setTickets] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchTickets();
            setTickets(data);
        };

        fetchData();
    }, []);

    return (
        <div>
            {/* <h1>Kanban Board</h1> */}
            <KanbanBoard tickets={tickets} />
        </div>
    );
};

export default App;