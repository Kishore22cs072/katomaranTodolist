const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const http = require('http');
const connectDB = require('./config/db');
const taskRoutes = require('./routes/taskRoutes');
const { setupSocket } = require('./socketServer');

dotenv.config();

const app = express();
const server = http.createServer(app);

// Middleware
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(express.json());

// Routes
app.use('/api', taskRoutes);

// Connect DB
connectDB();

// Start Server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));

// Setup socket
setupSocket(server);


