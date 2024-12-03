// src/components/KanbanColumn.jsx
import React from 'react';
import TicketCard from './TicketCard';
import '../styles/KanbanColumn.css';
import { AddIcon, AvatarIcon, ThreeDotMenuIcon } from '../assets';
import { getTitleIconMap } from './TitleIconMap';
import { GROUPING_OPTIONS, priorityTitleMapper } from '../constants';



const KanbanColumn = ({ title, tickets, grouping }) => {
    const TitleIconMap = React.useMemo(() => getTitleIconMap(true), []);
    
    return (
    <div className="kanban-column">
        <div className="kanban-column-header">
            <div className="kanban-column-title-container">
                {grouping === GROUPING_OPTIONS.USER.value ? <img className='kanban-header-icons' src={AvatarIcon} alt='Avatar'/> : TitleIconMap?.[grouping]?.[title]}
                <span className="kanban-column-title">{grouping === GROUPING_OPTIONS.PRIORITY.value ? priorityTitleMapper[title] || title : title}</span>
                <span className="kanban-column-count">{tickets.length}</span>
            </div>
            <div className="kanban-column-title-container">
                <img className='kanban-header-icons' src={AddIcon} alt='Add'/>
                <img className='kanban-header-icons' src={ThreeDotMenuIcon} alt='Menu'/>
            </div>
        </div>
        <div className="tickets">
            {tickets.map((ticket) => (
                <TicketCard grouping={grouping} key={ticket.id} ticket={ticket} />
            ))}
        </div>
    </div>
)};

export default KanbanColumn;