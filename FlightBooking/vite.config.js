import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/FlightBooking-react/', // 👈 MUST match your GitHub repo name
});