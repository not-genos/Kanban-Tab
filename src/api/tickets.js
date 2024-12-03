import axios from 'axios';

// Function to fetch tickets from the API
export const fetchTickets = async () => {
    try {
        const response = await axios.get('https://api.quicksell.co/v1/internal/frontend-assignment');
        return response.data.tickets; // Assuming API returns a `tickets` field
    } catch (error) {
        console.error('Error fetching tickets:', error);
        throw error; // Throw error so it can be handled by the caller
    }
};