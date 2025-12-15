import React from 'react';
import FlipClock from './components/FlipClock';
import PomodoroTimer from './components/PomodoroTimer';
import TaskList from './components/TaskList';
import ReminderList from './components/ReminderList';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-black py-8 px-4 sm:px-8 font-sans relative overflow-x-hidden selection:bg-m-red selection:text-white">
      
      {/* Background Texture */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-rough-paper opacity-50"></div>
      
      {/* M-Sport Racing Stripes Background */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Light Blue Stripe */}
        <div className="absolute top-0 right-[-10%] w-[40%] h-[200%] bg-m-light opacity-10 transform -skew-x-12 origin-top-right"></div>
        {/* Dark Blue Stripe */}
        <div className="absolute top-0 right-[-15%] w-[40%] h-[200%] bg-m-dark opacity-10 transform -skew-x-12 origin-top-right"></div>
        {/* Red Stripe */}
        <div className="absolute top-0 right-[-20%] w-[40%] h-[200%] bg-m-red opacity-10 transform -skew-x-12 origin-top-right"></div>
        
        {/* Dynamic shape bottom left */}
        <div className="absolute bottom-[-100px] left-[-100px] w-96 h-96 bg-m-light opacity-20 rounded-full blur-3xl"></div>
      </div>

      <main className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <header className="mb-16 flex flex-col items-center relative">
            <h1 className="text-5xl md:text-7xl font-marker mb-4 tracking-wider transform -rotate-2 relative z-10 drop-shadow-[4px_4px_0px_#000]">
                <span className="text-m-light">ART</span> <span className="text-m-dark">OF</span> <span className="text-m-red">FOCUS</span>
            </h1>
            <div className="w-full max-w-md h-4 flex skew-x-[-20deg] border-2 border-black p-0.5 bg-white">
                <div className="w-1/3 bg-m-light h-full"></div>
                <div className="w-1/3 bg-m-dark h-full"></div>
                <div className="w-1/3 bg-m-red h-full"></div>
            </div>
            <div className="mt-8">
                <FlipClock />
            </div>
        </header>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
            
            {/* Left Column: Timer */}
            <div className="lg:col-span-5 flex flex-col gap-8">
                <PomodoroTimer />
            </div>

            {/* Right Column: Tools */}
            <div className="lg:col-span-7 flex flex-col gap-8">
                {/* Task List */}
                <div className="relative">
                    {/* Decorative Offset Border */}
                    <div className="absolute inset-0 border-4 border-black transform translate-x-3 translate-y-3 bg-m-dark pointer-events-none"></div>
                    <TaskList />
                </div>
                
                {/* Reminder List */}
                <div className="relative">
                     <div className="absolute inset-0 bg-m-light/10 transform -rotate-1 pointer-events-none"></div>
                    <ReminderList />
                </div>
            </div>

        </div>

        {/* Quote Card - M-Sport Racing Theme */}
        <div className="relative w-full p-8 md:p-12 border-4 border-black bg-white overflow-hidden group shadow-[12px_12px_0px_#1a2489] transform -rotate-1 hover:rotate-0 transition-transform duration-500 mb-20">
            {/* Background racing stripes */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_45%,#000_49%,#000_51%,transparent_55%)] bg-[length:20px_20px]"></div>
            </div>
            
            <div className="absolute top-0 right-0 w-64 h-full bg-gradient-to-l from-m-red/20 to-transparent skew-x-[-20deg] translate-x-20"></div>
            
            <div className="relative z-10 flex flex-col items-center text-center">
                <p className="text-2xl md:text-4xl font-serif italic text-black leading-relaxed max-w-4xl mx-auto drop-shadow-sm">
                    <span className="text-6xl text-m-light font-marker opacity-80 absolute -top-8 left-0 transform -translate-x-full hidden md:block">"</span>
                    Simplicity is the ultimate form of sophistication.
                </p>
                <div className="mt-6 flex items-center gap-3">
                    <div className="h-1 w-8 bg-m-light"></div>
                    <div className="h-1 w-8 bg-m-dark"></div>
                    <div className="h-1 w-8 bg-m-red"></div>
                    <p className="text-black font-bold font-mono text-sm md:text-base tracking-[0.3em] uppercase ml-2">
                        Da Vinci
                    </p>
                </div>
            </div>
        </div>

        {/* Footer */}
        <footer className="mt-8 text-center pb-8">
            <div className="inline-block border-t-2 border-black pt-4 px-8">
                <p className="text-gray-500 font-mono text-xs tracking-[0.2em] uppercase">
                    Designed for the Obsessive <span className="text-m-red mx-2 text-xl">///</span> Canvas Focus
                </p>
            </div>
        </footer>

      </main>
    </div>
  );
};

export default App;