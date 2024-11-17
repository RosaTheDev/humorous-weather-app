import axios from 'axios';
import dotenv from 'dotenv';

// Load enviornment variables from .env
dotenv.config();

const API_KEY = process.env.WEATHER_API_KEY;
const BASE_URL = 'https://api.weatherapi.com/v1';

export async function getWeather(location: string) {
    if (!API_KEY) {
        throw new Error('API key is missing. Please check your .env file.');
    }
    try {
        const response = await axios.get(`${BASE_URL}/current.json`, {
            params: {
                key: API_KEY,
                q: location
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        throw error;
    }
}