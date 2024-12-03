export const GROUPING_OPTIONS = {
    STATUS: {
        label: 'Status',
        value: 'status'
    },
    PRIORITY: {
        label: 'Priority',
        value: 'priority'
    },
    USER: {
        label: 'User',
        value: 'userId'
    }
};

export const SORTING_OPTIONS = {
    PRIORITY: {
        label: 'Priority',
        value: 'priority'
    },
    TITLE: {
        label: 'Title',
        value: 'title'
    }
};

export const priorityTitleMapper = {
    0: 'No Priority',
    1: 'Low',
    2: 'Medium',
    3: 'High',
    4: 'Urgent'
}

export const GROUPING_STORAGE_KEY = 'grouping';
export const SORTING_STORAGE_KEY = 'sortBy';