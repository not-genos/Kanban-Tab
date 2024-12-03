import React, { useRef, useState } from 'react';
import '../styles/Dialog.css';
import { DisplayIcon, DownIcon } from '../assets';
import { GROUPING_OPTIONS, SORTING_OPTIONS } from '../constants';

const Dialog = ({ grouping, setGrouping, sortBy, setSortBy }) => {
    const dialogRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    const openDialog = () => {
        setIsVisible(true);
        if (dialogRef.current) {
            dialogRef.current.showModal();
        }
    };

    const closeDialog = () => {
        if (dialogRef.current) {
            setIsVisible(false);
            setTimeout(() => dialogRef.current.close(), 300);
        }
    };

    const handleBackdropClick = (e) => {
        if (e.target === dialogRef.current) {
            closeDialog();
        }
    };

    return (
        <div>
            <button className='dialog-btn' onClick={openDialog}>
                <img src={DisplayIcon} alt='Display' />
                <span>Display</span>
                <img src={DownIcon} alt='Down' />
            </button>
            <dialog
                ref={dialogRef}
                onClick={handleBackdropClick}
                className={`dialog-box ${isVisible ? 'fade-in' : 'fade-out'}`}
            >
                <div className='filter-container'>
                    <div className='filter-item'>
                        <label className='filter-label' htmlFor='grouping-selector'>
                            Grouping
                        </label>
                        <select
                            value={grouping}
                            onChange={(e) => setGrouping(e.target.value)}
                            id='grouping-selector'
                            className='filter-select'
                        >
                            {Object.values(GROUPING_OPTIONS).map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className='filter-item'>
                        <label className='filter-label' htmlFor='ordering-select'>
                            Ordering
                        </label>
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            id='ordering-selector'
                            className='filter-select'
                        >
                            {Object.values(SORTING_OPTIONS).map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default Dialog;
