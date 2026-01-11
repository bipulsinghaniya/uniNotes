// const express = require("express");
// const cookieParser = require("cookie-parser");
// const cors = require("cors");

// const app = express();

// app.set("trust proxy", 1);
// app.use(express.json());
// app.use(cookieParser());

// const corsOptions = {
//   origin: "https://uni-notes-eta.vercel.app",
//   credentials: true,
// };

// app.use(cors(corsOptions));

// // 🔥 IMPORTANT: explicitly handle preflight for API routes
// app.options("/auth/*", cors(corsOptions));
// app.options("/notes/*", cors(corsOptions));

// app.use("/auth", require("./routes/authRoutes"));
// app.use("/notes", require("./routes/notesRoutes"));

// module.exports = app;





const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();

app.set("trust proxy", 1);
app.use(express.json());
app.use(cookieParser());

// ALLOWED ORIGINS - ADD ALL VARIATIONS
const allowedOrigins = [
  "https://uni-notes-eta.vercel.app",
  "https://uni-notes-sta.vercel.app", 
  "https://uni-notes-sta.vercol.app", // Current typo frontend
  "http://localhost:5173",            // For local development
  "http://localhost:3000"
];

const corsOptions = {
  origin: function (origin, callback) {
    // Allow requests with no origin
    if (!origin) return callback(null, true);
    
    // Check if origin is in allowed list
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      console.log("🔴 CORS blocked origin:", origin);
      console.log("✅ Allowed origins:", allowedOrigins);
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  optionsSuccessStatus: 200,
  allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
  preflightContinue: false
};

// Apply CORS middleware
app.use(cors(corsOptions));

// Handle ALL preflight requests
app.options('*', (req, res) => {
  const origin = req.headers.origin;
  
  if (allowedOrigins.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin);
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, PATCH');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Accept');
    res.sendStatus(200);
  } else {
    res.sendStatus(403); // Forbidden
  }
});

// Test route
app.get('/test-cors', (req, res) => {
  res.json({ 
    message: 'CORS test successful',
    origin: req.headers.origin,
    timestamp: new Date().toISOString()
  });
});

// Your routes
app.use("/auth", require("./routes/authRoutes"));
app.use("/notes", require("./routes/notesRoutes"));

module.exports = app;