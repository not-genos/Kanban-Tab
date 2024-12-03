// src/components/TicketCard.jsx
import React from 'react';
import '../styles/TicketCard.css';
import { AvatarIcon} from '../assets';
import { getTitleIconMap } from './TitleIconMap';
import { GROUPING_OPTIONS } from '../constants';

const TicketCard = ({ ticket, grouping }) => {
    const TitleIconMap = React.useMemo(() => getTitleIconMap(), []);
    return (
    <div className="ticket-card">
        <div className='ticket-card-id'>{ticket.id}</div>
        {!(grouping === GROUPING_OPTIONS.USER.value) &&
            <div className='ticket-card-avatar-container'>
                <img className='ticket-card-avatar' src={AvatarIcon} alt="Avatar" />
            </div>
        }
        <div className='ticket-card-title-container'>
            {!(grouping === GROUPING_OPTIONS.STATUS.value) &&
                <span className='ticket-card-status'>{TitleIconMap[GROUPING_OPTIONS.STATUS.value][ticket.status]}</span>
            }
            <span className='ticket-card-title'>{ticket.title}</span>
        </div>
        <div className='ticket-card-priority-container'>
            {!(grouping === GROUPING_OPTIONS.PRIORITY.value) &&
                <span>{TitleIconMap[GROUPING_OPTIONS.PRIORITY.value][ticket.priority]}</span>
            }
            {
                ticket.tag && ticket.tag.map((tag) => (
                    <span key={tag}>{tag}</span>
                ))
            }
        </div>
    </div>
)};

export default TicketCard;