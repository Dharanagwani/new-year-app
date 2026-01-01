// import React, { useEffect } from 'react';
// import { motion } from 'framer-motion';
// import confetti from 'canvas-confetti';
// import './App.css'; // Importing your manual CSS

// function App() {
//   useEffect(() => {
//     // Initial celebration burst
//     handleConfetti();
//   }, []);

//   const handleConfetti = () => {
//     confetti({
//       particleCount: 150,
//       spread: 70,
//       origin: { y: 0.6 },
//       colors: ['#ffd700', '#ffffff', '#ff4d4d']
//     });
//   };

//   return (
//     <div className="celebration-container">
//       <div className="bg-glow"></div>

//       <motion.div 
//         className="main-content"
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 1.2 }}
//       >
//         <p className="subtitle">Welcome to</p>
//         <h1 className="year-text">2026</h1>
        
//         <motion.p 
//           className="message"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 1 }}
//         >
//           A new chapter begins. May it be filled with success, 
//           happiness, and clean code.
//         </motion.p>

//         <button className="btn-celebrate" onClick={handleConfetti}>
//           LAUNCH JOY 🎆
//         </button>
//       </motion.div>
//     </div>
//   );
// }

// export default App;


// import React, { useEffect } from 'react';
// import { motion } from 'framer-motion';
// import confetti from 'canvas-confetti';
// import './App.css';

// const balloons = [
//   { id: 1, left: '5%', color: '#ff4d4d', delay: 0 },
//   { id: 2, left: '15%', color: '#ffd700', delay: 2 },
//   { id: 3, left: '80%', color: '#4da3ff', delay: 1 },
//   { id: 4, left: '90%', color: '#ff4dfb', delay: 3 },
//   { id: 5, left: '10%', color: '#55ff4d', delay: 5 },
// ];

// function App() {
//   const handleConfetti = () => {
//     confetti({
//       particleCount: 150,
//       spread: 70,
//       origin: { y: 0.6 },
//       colors: ['#ffd700', '#ffffff', '#ff4d4d']
//     });
//   };

//   return (
//     <div className="celebration-container">
//       <div className="bg-glow"></div>

//       {/* Floating Balloons */}
//       {balloons.map((b) => (
//         <motion.div
//           key={b.id}
//           className="balloon-wrapper"
//           style={{ left: b.left }}
//           initial={{ y: 0 }}
//           animate={{ 
//             y: -1200, // Move upward
//             x: [0, 20, -20, 0] // Sway side to side
//           }}
//           transition={{ 
//             duration: 15, 
//             repeat: Infinity, 
//             delay: b.delay,
//             ease: "linear" 
//           }}
//         >
//           <div className="balloon" style={{ backgroundColor: b.color, color: b.color }} />
//           <div className="balloon-string" />
//         </motion.div>
//       ))}

//       <motion.div 
//         className="main-content"
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 1.2 }}
//       >
//         <p className="subtitle">Welcome to</p>
//         <h1 className="year-text">2026</h1>
        
//         <p className="message">
//           A new chapter begins. May it be filled with success, 
//           happiness, and clean code.
//         </p>

//         <button className="btn-celebrate" onClick={handleConfetti}>
//           LAUNCH JOY 🎆
//         </button>
//       </motion.div>
//     </div>
//   );
// }

// export default App;

// import React, { useEffect } from 'react';
// import { motion } from 'framer-motion';
// import confetti from 'canvas-confetti';
// import './App.css';

// // Balloon Configuration
// const balloons = [
//   { id: 1, left: '5%', color: '#ff4d4d', delay: 0 },
//   { id: 2, left: '15%', color: '#ffd700', delay: 2 },
//   { id: 3, left: '25%', color: '#4da3ff', delay: 4 },
//   { id: 4, left: '75%', color: '#ff4dfb', delay: 1 },
//   { id: 5, left: '85%', color: '#55ff4d', delay: 3 },
//   { id: 6, left: '92%', color: '#ffd700', delay: 5 },
// ];

// function App() {
//   // Trigger confetti on load and on button click
//   useEffect(() => {
//     handleConfetti();
//   }, []);

//   const handleConfetti = () => {
//     const scalar = 2;
//     const triangle = confetti.shapeFromPath({ path: 'M0 10 L5 0 L10 10z' });

//     confetti({
//       shapes: [triangle, 'circle'],
//       particleCount: 150,
//       spread: 70,
//       origin: { y: 0.6 },
//       colors: ['#bf953f', '#fcf6ba', '#b38728', '#ffffff'],
//       ticks: 400
//     });
//   };

//   return (
//     <div className="celebration-container">
//       {/* Dynamic Background Glow */}
//       <div className="bg-glow"></div>

//       {/* Floating Animated Balloons */}
//       {balloons.map((b) => (
//         <motion.div
//           key={b.id}
//           className="balloon-wrapper"
//           style={{ left: b.left }}
//           initial={{ y: '110vh' }}
//           animate={{ 
//             y: '-120vh',
//             x: [0, 30, -30, 0] 
//           }}
//           transition={{ 
//             duration: 18, 
//             repeat: Infinity, 
//             delay: b.delay,
//             ease: "linear" 
//           }}
//         >
//           <div className="balloon" style={{ backgroundColor: b.color, color: b.color }} />
//           <div className="balloon-string" />
//         </motion.div>
//       ))}

//       {/* Main Content Area */}
//       <motion.div 
//         className="main-content"
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 1.5, ease: "easeOut" }}
//       >
//         <div className="glass-card">
//           <motion.span 
//             className="subtitle"
//             initial={{ letterSpacing: "0px", opacity: 0 }}
//             animate={{ letterSpacing: "12px", opacity: 1 }}
//             transition={{ duration: 2, delay: 0.5 }}
//           >
//             PROSPEROUS
//           </motion.span>
          
//           <motion.h1 
//             className="year-text"
//             initial={{ filter: "blur(10px)", opacity: 0 }}
//             animate={{ filter: "blur(0px)", opacity: 1 }}
//             transition={{ duration: 1 }}
//           >
//             2026
//           </motion.h1>
          
//           <motion.p 
//             className="message"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 1.8 }}
//           >
//             "Write it on your heart that every day is the best day in the year."
//             <br />
//             <span style={{ color: '#ffd700', fontSize: '0.9rem', fontStyle: 'normal', marginTop: '10px', display: 'block' }}>
//               — Dhara nagwani
//             </span>
//           </motion.p>

//           <motion.button 
//             className="btn-celebrate" 
//             onClick={handleConfetti}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Launch Celebration 🥂
//           </motion.button>
//         </div>
//       </motion.div>
      
//       {/* Decorative Footer */}
//       <div style={{ position: 'absolute', bottom: '20px', color: 'rgba(255,255,255,0.2)', fontSize: '0.8rem', letterSpacing: '2px' }}>
//         EST. 2026 • DESIGNED FOR JOY
//       </div>
//     </div>
//   );
// }

// export default App;

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import './App.css';

const balloons = [
  // Start some balloons halfway up the screen (y: "20vh") so they are visible immediately
  { id: 1, left: '5%', color: '#ff4d4d', startY: '20vh', delay: 0 },
  { id: 2, left: '15%', color: '#ffd700', startY: '60vh', delay: 0 },
  { id: 3, left: '25%', color: '#4da3ff', startY: '40vh', delay: 0 },
  { id: 4, left: '75%', color: '#ff4dfb', startY: '80vh', delay: 0 },
  { id: 5, left: '85%', color: '#55ff4d', startY: '10vh', delay: 0 },
  { id: 6, left: '92%', color: '#ffd700', startY: '50vh', delay: 0 },
];

function App() {
  useEffect(() => {
    handleConfetti();
  }, []);

  const handleConfetti = () => {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#bf953f', '#fcf6ba', '#ffffff'],
    });
  };

  return (
    <div className="celebration-container">
      <div className="bg-glow"></div>

      {balloons.map((b) => (
        <motion.div
          key={b.id}
          className="balloon-wrapper"
          style={{ left: b.left }}
          // Initial position is now a mix of screen heights
          initial={{ y: b.startY }} 
          animate={{ 
            y: '-120vh',
            x: [0, 30, -30, 0] 
          }}
          transition={{ 
            y: {
              duration: 15, 
              repeat: Infinity, 
              ease: "linear",
              // This makes the first loop finish early, then restart from bottom
            },
            x: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        >
          <div className="balloon" style={{ backgroundColor: b.color, color: b.color }} />
          <div className="balloon-string" />
        </motion.div>
      ))}

      <motion.div 
        className="main-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="glass-card">
          <motion.span 
            className="subtitle"
            initial={{ letterSpacing: "0px", opacity: 0 }}
            animate={{ letterSpacing: "12px", opacity: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
          >
            PROSPEROUS
          </motion.span>
          <motion.h1 
            className="year-text"
            initial={{ filter: "blur(10px)", opacity: 0 }}
            animate={{ filter: "blur(0px)", opacity: 1 }}
            transition={{ duration: 1 }}
          >
            2026
          </motion.h1>
          <motion.p 
            className="message"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
          >
            New year, new energy, and new opportunities. May 2026 be the year you turn your <span style={{color: '#ffd700', fontWeight: 'bold'}}>biggest dreams</span> into your daily reality. Keep building, keep growing.
            <br />
            <span style={{ color: '#ffd700', fontSize: '0.9rem', fontStyle: 'normal', marginTop: '10px', display: 'block' }}>
              — Dhara nagwani
            </span>
          </motion.p>
          <button className="btn-celebrate" onClick={handleConfetti}>
            Launch Celebration 🥂
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default App;

// import React, { useEffect } from 'react';
// import { motion } from 'framer-motion';
// import confetti from 'canvas-confetti';
// import './App.css';

// // Balloon Configuration - Distributed heights for instant visibility
// const balloons = [
//   { id: 1, left: '5%', color: '#ff4d4d', startY: '20vh' },
//   { id: 2, left: '15%', color: '#ffd700', startY: '60vh' },
//   { id: 3, left: '25%', color: '#4da3ff', startY: '35vh' },
//   { id: 4, left: '70%', color: '#ff4dfb', startY: '75vh' },
//   { id: 5, left: '85%', color: '#55ff4d', startY: '15vh' },
//   { id: 6, left: '92%', color: '#ffd700', startY: '50vh' },
// ];

// function App() {
  
//   // 1. Function for Corner Crackers (Top-Left and Top-Right)
//   const fireCornerCrackers = () => {
//     const duration = 3 * 1000;
//     const end = Date.now() + duration;

//     (function frame() {
//       // Top Left
//       confetti({
//         particleCount: 2,
//         angle: 315,
//         spread: 55,
//         origin: { x: 0, y: 0 },
//         colors: ['#ffd700', '#ffffff', '#ff4d4d'],
//         ticks: 200,
//         gravity: 1.2,
//         scalar: 0.8
//       });
//       // Top Right
//       confetti({
//         particleCount: 2,
//         angle: 225,
//         spread: 55,
//         origin: { x: 1, y: 0 },
//         colors: ['#ffd700', '#ffffff', '#4da3ff'],
//         ticks: 200,
//         gravity: 1.2,
//         scalar: 0.8
//       });

//       if (Date.now() < end) {
//         requestAnimationFrame(frame);
//       }
//     }());
//   };

//   // 2. Function for Center Celebration Burst
//   const handleMainCelebration = () => {
//     confetti({
//       particleCount: 150,
//       spread: 70,
//       origin: { y: 0.6 },
//       colors: ['#bf953f', '#fcf6ba', '#ffffff']
//     });
//     fireCornerCrackers();
//   };

//   useEffect(() => {
//     // Initial burst on load
//     handleMainCelebration();
    
//     // Auto-fire corner crackers every 6 seconds for ambience
//     const interval = setInterval(fireCornerCrackers, 6000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="celebration-container">
//       {/* Background Glow */}
//       <div className="bg-glow"></div>

//       {/* Floating Balloons */}
//       {balloons.map((b) => (
//         <motion.div
//           key={b.id}
//           className="balloon-wrapper"
//           style={{ left: b.left }}
//           initial={{ y: b.startY }} 
//           animate={{ 
//             y: '-120vh',
//             x: [0, 25, -25, 0] 
//           }}
//           transition={{ 
//             y: { duration: 15, repeat: Infinity, ease: "linear" },
//             x: { duration: 4, repeat: Infinity, ease: "easeInOut" }
//           }}
//         >
//           <div className="balloon" style={{ backgroundColor: b.color, color: b.color }} />
//           <div className="balloon-string" />
//         </motion.div>
//       ))}

//       {/* Main Glassmorphism Card */}
//       <motion.div 
//         className="main-content"
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1.2, ease: "easeOut" }}
//       >
//         <div className="glass-card">
//           <motion.span 
//             className="subtitle"
//             initial={{ letterSpacing: "0px", opacity: 0 }}
//             animate={{ letterSpacing: "12px", opacity: 1 }}
//             transition={{ duration: 2 }}
//           >
//             PROSPEROUS
//           </motion.span>
          
//           <h1 className="year-text">2026</h1>
          
//           <motion.p 
//             className="message"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 1 }}
//           >
//             New year, new energy, and new opportunities. May 
//             <span className="highlight"> 2026 </span> 
//             be the year you turn your biggest dreams into daily reality.
//           </motion.p>

//           <motion.button 
//             className="btn-celebrate" 
//             onClick={handleMainCelebration}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Celebrate Now 🥂
//           </motion.button>
//         </div>
//       </motion.div>
//     </div>
//   );
// }

// export default App;