import React from "react";

interface LocsoLogoProps {
  className?: string;
  strokeColor?: string;
  strokeWidth?: number;
  showText?: boolean;
}

export const LocsoLogo: React.FC<LocsoLogoProps> = ({
  className = "w-full h-auto",
  strokeColor = "currentColor",
  strokeWidth = 2,
  showText = false,
}) => {
  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      {/* 
        This custom SVG is carefully drafted to match the continuous, flowing, single-line art
        of the LOCSO logo. It starts with a decorative flourish on the left, cursive-loops the
        letters L, O, C, S, O, and then sweeps upward into elegant, layered coffee-steam or mountain-top
        loops on the right, returning in a grounding baseline flow.
      */}
      <svg
        viewBox="0 0 1000 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full max-h-[300px]"
      >
        <defs>
          <linearGradient id="logo-gold-glow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#EADEC9" />
          </linearGradient>
          <filter id="subtle-shadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="4" stdDeviation="6" floodOpacity="0.15" />
          </filter>
        </defs>
        
        {/* Continuous One-Line Art Path */}
        <path
          d="M 120,330 
             C 125,325 135,320 145,325 
             C 155,330 150,345 140,345 
             C 130,345 135,325 155,315 
             C 165,310 175,305 185,310 
             C 195,315 190,335 175,340 
             C 165,343 162,335 170,325 
             C 185,310 200,285 210,250 
             C 215,230 220,180 230,200 
             C 235,210 228,260 220,290 
             C 215,310 205,335 225,335 
             C 240,335 245,315 255,305 
             C 265,295 275,295 280,310 
             C 285,325 275,340 260,340 
             C 245,340 240,320 255,300 
             C 270,280 295,280 305,305 
             C 310,318 305,332 315,335 
             C 325,338 335,325 340,310 
             C 345,295 340,290 332,295 
             C 325,300 322,315 330,325 
             C 340,335 355,335 365,315 
             C 375,295 385,275 395,280 
             C 405,285 395,315 385,325 
             C 375,335 365,340 375,345 
             C 385,350 405,325 415,315 
             C 425,305 435,295 445,300 
             C 455,305 450,325 435,330 
             C 425,333 420,325 428,315 
             C 440,300 460,290 475,300 
             C 490,310 475,335 460,335 
             C 445,335 448,310 470,295 
             C 485,285 505,280 520,290 
             C 530,298 522,318 510,325 
             C 500,330 495,320 502,310 
             C 515,290 535,275 550,285 
             C 565,295 555,320 540,325 
             C 530,328 528,320 535,310 
             C 550,290 580,260 590,240 
             C 600,220 595,200 605,215 
             C 615,230 600,265 590,285 
             C 580,305 570,325 590,325 
             C 610,325 615,305 625,290 
             C 635,275 645,260 650,270 
             C 655,280 640,310 630,320 
             C 620,330 615,335 625,335 
             C 645,335 655,300 665,275 
             C 675,250 680,220 690,230 
             C 700,240 685,290 675,315 
             C 665,340 655,350 670,350 
             C 690,350 705,310 715,270 
             C 725,230 735,170 745,150 
             C 755,130 770,140 765,180 
             C 760,220 730,270 720,310 
             C 710,350 735,360 755,340 
             C 775,320 790,280 795,250 
             C 800,220 790,210 782,230 
             C 775,250 770,290 785,310 
             C 800,330 820,300 830,270 
             C 840,240 855,180 865,210 
             C 875,240 840,315 825,340 
             C 810,365 790,380 815,380 
             C 840,380 860,340 870,310 
             C 880,280 885,290 875,310 
             C 865,330 855,360 870,360 
             C 885,360 895,330 905,300"
          stroke="url(#logo-gold-glow)"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#subtle-shadow)"
        />
        
        {/* Subtle decorative baseline flourish under the logo to match % Arabica style simplicity */}
        <path
          d="M 250,420 L 750,420"
          stroke="url(#logo-gold-glow)"
          strokeWidth="1"
          strokeDasharray="4 8"
          opacity="0.4"
        />
        
        {/* Elegant Diamond Anchor points to signify Solok / Sumatran local craft roots */}
        <path d="M 500,415 L 505,420 L 500,425 L 495,420 Z" fill="#B68B4C" />
      </svg>
      
      {showText && (
        <div className="text-center mt-4">
          <h1 className="font-serif text-2xl md:text-3xl tracking-[0.25em] text-white uppercase font-light">
            L O C S O
          </h1>
          <p className="font-sans text-xs tracking-[0.4em] text-gold uppercase mt-1.5 font-light">
            Coffee & Eatery • Solok
          </p>
        </div>
      )}
    </div>
  );
};

export const LocsoLogoDark: React.FC<LocsoLogoProps> = ({
  className = "w-full h-auto",
  strokeWidth = 2,
  showText = false,
}) => {
  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <svg
        viewBox="0 0 1000 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full max-h-[300px]"
      >
        <defs>
          <linearGradient id="logo-dark-glow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#123B17" />
            <stop offset="100%" stopColor="#214F29" />
          </linearGradient>
        </defs>
        
        {/* Continuous One-Line Art Path */}
        <path
          d="M 120,330 
             C 125,325 135,320 145,325 
             C 155,330 150,345 140,345 
             C 130,345 135,325 155,315 
             C 165,310 175,305 185,310 
             C 195,315 190,335 175,340 
             C 165,343 162,335 170,325 
             C 185,310 200,285 210,250 
             C 215,230 220,180 230,200 
             C 235,210 228,260 220,290 
             C 215,310 205,335 225,335 
             C 240,335 245,315 255,305 
             C 265,295 275,295 280,310 
             C 285,325 275,340 260,340 
             C 245,340 240,320 255,300 
             C 270,280 295,280 305,305 
             C 310,318 305,332 315,335 
             C 325,338 335,325 340,310 
             C 345,295 340,290 332,295 
             C 325,300 322,315 330,325 
             C 340,335 355,335 365,315 
             C 375,295 385,275 395,280 
             C 405,285 395,315 385,325 
             C 375,335 365,340 375,345 
             C 385,350 405,325 415,315 
             C 425,305 435,295 445,300 
             C 455,305 450,325 435,330 
             C 425,333 420,325 428,315 
             C 440,300 460,290 475,300 
             C 490,310 475,335 460,335 
             C 445,335 448,310 470,295 
             C 485,285 505,280 520,290 
             C 530,298 522,318 510,325 
             C 500,330 495,320 502,310 
             C 515,290 535,275 550,285 
             C 565,295 555,320 540,325 
             C 530,328 528,320 535,310 
             C 550,290 580,260 590,240 
             C 600,220 595,200 605,215 
             C 615,230 600,265 590,285 
             C 580,305 570,325 590,325 
             C 610,325 615,305 625,290 
             C 635,275 645,260 650,270 
             C 655,280 640,310 630,320 
             C 620,330 615,335 625,335 
             C 645,335 655,300 665,275 
             C 675,250 680,220 690,230 
             C 700,240 685,290 675,315 
             C 665,340 655,350 670,350 
             C 690,350 705,310 715,270 
             C 725,230 735,170 745,150 
             C 755,130 770,140 765,180 
             C 760,220 730,270 720,310 
             C 710,350 735,360 755,340 
             C 775,320 790,280 795,250 
             C 800,220 790,210 782,230 
             C 775,250 770,290 785,310 
             C 800,330 820,300 830,270 
             C 840,240 855,180 865,210 
             C 875,240 840,315 825,340 
             C 810,365 790,380 815,380 
             C 840,380 860,340 870,310 
             C 880,280 885,290 875,310 
             C 865,330 855,360 870,360 
             C 885,360 895,330 905,300"
          stroke="url(#logo-dark-glow)"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* Subtle decorative baseline flourish under the logo */}
        <path
          d="M 250,420 L 750,420"
          stroke="url(#logo-dark-glow)"
          strokeWidth="1"
          strokeDasharray="4 8"
          opacity="0.3"
        />
        
        {/* Elegant Diamond Anchor points */}
        <path d="M 500,415 L 505,420 L 500,425 L 495,420 Z" fill="#123B17" />
      </svg>
      
      {showText && (
        <div className="text-center mt-4">
          <h1 className="font-serif text-2xl md:text-3xl tracking-[0.25em] text-primary uppercase font-light">
            L O C S O
          </h1>
          <p className="font-sans text-xs tracking-[0.4em] text-coffee uppercase mt-1.5 font-light">
            Coffee & Eatery • Solok
          </p>
        </div>
      )}
    </div>
  );
};
