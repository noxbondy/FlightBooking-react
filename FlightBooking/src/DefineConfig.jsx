import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/FlightBooking-react/',   // <== this must exactly match your GitHub repo name
});