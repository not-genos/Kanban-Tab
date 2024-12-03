// src/components/KanbanBoard.jsx
import React, { useEffect, useState } from 'react';
import KanbanColumn from './KanbanColumn';
import { fetchTickets } from '../api/tickets';
import '../styles/KanbanTab.css';
import { GROUPING_OPTIONS, GROUPING_STORAGE_KEY, SORTING_OPTIONS, SORTING_STORAGE_KEY } from '../constants';
import Dialog from './Dialog';

const KanbanBoard = () => {
    const [tickets, setTickets] = useState([]);
    const [grouping, setGrouping] = useState(localStorage.getItem(GROUPING_STORAGE_KEY) || GROUPING_OPTIONS.STATUS.value);
    const [sortBy, setSortBy] = useState(localStorage.getItem(SORTING_STORAGE_KEY) || SORTING_OPTIONS.PRIORITY.value);

    useEffect(() => {
        const getTickets = async () => {
            const data = await fetchTickets();
            setTickets(data);
        };
        getTickets();
    }, []);

    useEffect(() => {
        localStorage.setItem(GROUPING_STORAGE_KEY, grouping);
        localStorage.setItem(SORTING_STORAGE_KEY, sortBy);
    }, [grouping, sortBy]);

    const groupedTickets = () => {
        const sortedTickets = [...tickets].sort((a, b) => {
            if (sortBy === SORTING_OPTIONS.PRIORITY.value) return b.priority - a.priority;
            if (sortBy === SORTING_OPTIONS.TITLE.value) return a.title.localeCompare(b.title);
            return 0;
        });

        const groupByField = grouping;
        return sortedTickets.reduce((acc, ticket) => {
            const key = ticket[groupByField] || 'Unassigned';
            acc[key] = acc[key] ? [...acc[key], ticket] : [ticket];
            return acc;
        }, {});
    };

    return (
        <div className="kanban-board">
            <div className="controls">
                <Dialog grouping={grouping} setGrouping={setGrouping} sortBy={sortBy} setSortBy={setSortBy}/>
            </div>
            <div className="columns">
                {Object.entries(groupedTickets()).map(([key, tickets]) => (
                    <KanbanColumn grouping={grouping} key={key} title={key} tickets={tickets} />
                ))}
            </div>
        </div>
    );
};

export default KanbanBoard;