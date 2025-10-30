import { io } from 'socket.io-client';  
console.log("API Key:", import.meta.env.VITE_API_KEY);
const socket = io(import.meta.env.VITE_API_KEY);
export default socket;  
