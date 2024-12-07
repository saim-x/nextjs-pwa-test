'use client';
import React from 'react';
import { Clock } from 'lucide-react';
import { FaHome, FaInfoCircle, FaCog, FaQuestionCircle, FaEnvelope } from 'react-icons/fa';


const PrayerTimes = () => {
    const [currentTime, setCurrentTime] = React.useState(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    const [currentDate] = React.useState(new Date().toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' }));
    const [asarCountdown] = React.useState('01:02:20');
    const [isSidebarOpen, setIsSidebarOpen] = React.useState(false); // State for sidebar visibility

    const prayers = [
        { nameArabic: 'فجر', nameEnglish: 'FAJR', jamaatTime: '07:00', beginningTime: '06:20' },
        { nameArabic: 'ظهر', nameEnglish: 'ZOHAR', jamaatTime: '13:00', beginningTime: '12:03' },
        { nameArabic: 'عصر', nameEnglish: 'ASAR', jamaatTime: '14:45', beginningTime: '14:00' },
        { nameArabic: 'مغرب', nameEnglish: 'MAGHRIB', jamaatTime: '15:51', beginningTime: '15:51' },
        { nameArabic: 'عشاء', nameEnglish: 'ISHA', jamaatTime: '18:00', beginningTime: '16:51' },
    ];

    const bottomTimes = [
        { name: 'SEHRI', time: '06:15' },
        { name: 'SUNRISE', time: '08:10' },
        { name: 'NOON', time: '11:53' },
        { name: 'JUMUAH', time: '13:00' },
    ];

    // Add desktop detection
    const [isDesktop, setIsDesktop] = React.useState(false);

    React.useEffect(() => {
        const checkDevice = () => {
            setIsDesktop(window.innerWidth >= 768);
        };

        checkDevice();
        window.addEventListener('resize', checkDevice);

        return () => window.removeEventListener('resize', checkDevice);
    }, []);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen); // Toggle sidebar visibility
    };

    if (isDesktop) {
        return (
            <div className="h-screen w-screen flex items-center justify-center bg-amber-50">
                <div className="text-center p-8 max-w-md">
                    <h1 className="text-2xl font-bold text-amber-800 mb-4">Mobile App Only</h1>
                    <p className="text-amber-700">
                        This application is designed for mobile devices. Please access it from your smartphone or tablet.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen w-full max-w-[430px] mx-auto bg-amber-50 relative p-4">
            {/* Sidebar */}
            {isSidebarOpen && (

                <div className="fixed inset-0 bg-black bg-opacity-50 z-10" onClick={toggleSidebar}>
                    <div className="absolute top-0 left-0 w-64 h-full bg-amber-50 bg-opacity-80 p-4 shadow-lg z-20">
                        <h2 className="text-xl font-bold mb-4 text-black">Menu</h2>
                        <ul>
                            <li className="py-2 flex items-center">
                                <FaHome className="mr-2" />
                                <a href="#" className="text-black">Page 1</a>
                            </li>
                            <li className="py-2 flex items-center">
                                <FaInfoCircle className="mr-2" />
                                <a href="#" className="text-black">Page 2</a>
                            </li>
                            <li className="py-2 flex items-center">
                                <FaCog className="mr-2" />
                                <a href="#" className="text-black">Page 3</a>
                            </li>
                            <li className="py-2 flex items-center">
                                <FaQuestionCircle className="mr-2" />
                                <a href="#" className="text-black">Page 4</a>
                            </li>
                            <li className="py-2 flex items-center">
                                <FaEnvelope className="mr-2" />
                                <a href="#" className="text-black">Page 5</a>
                            </li>
                        </ul>
                    </div>
                </div>
            )}

            {/* Header - made smaller */}
            <header className="bg-amber-50 p-3 flex justify-between items-center rounded-lg mb-4">
                <button className="text-xl text-black" onClick={toggleSidebar}>☰</button>
                <div className="flex items-center">
                    <span className="text-xl text-black">☘</span>
                    <span className="ml-2 text-base text-black">madni masjid</span>
                </div>
            </header>

            {/* Date and Clock Section */}
      <div className="relative h-40 bg-gradient-to-b from-amber-50 to-purple-900 rounded-lg mb-4 overflow-hidden">
        {/* Decorative Islamic Pattern Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <pattern id="islamic-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M10,0 L20,10 L10,20 L0,10 Z" fill="currentColor" className="text-amber-200" />
                <circle cx="10" cy="10" r="3" fill="currentColor" className="text-amber-300" />
              </pattern>
              <rect width="100" height="100" fill="url(#islamic-pattern)" />
            </svg>
          </div>
        </div>

        {/* Date Display with Ornamental Border */}
        <div className="absolute top-3 left-3 px-4 py-1 bg-amber-50/80 rounded-full border border-amber-200">
          <span className="text-sm text-amber-800 font-semibold">{currentDate}</span>
        </div>

        {/* Central Clock Design */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {/* Outer Decorative Border */}
          <div className="w-32 h-32 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-45">
            <svg viewBox="0 0 100 100" className="w-full h-full absolute">
              <path d="M50,0 L100,50 L50,100 L0,50 Z" fill="none" stroke="#F8B156" strokeWidth="2" />
              <path d="M25,0 L100,75 L75,100 L0,25 Z" fill="none" stroke="#F8B156" strokeWidth="1" />
            </svg>
          </div>

          {/* Main Clock Face */}
          <div className="w-24 h-24 bg-gradient-to-br from-amber-50 to-amber-100 border-4 border-amber-300/50 rounded-lg transform rotate-45 flex items-center justify-center relative overflow-hidden">
            {/* Decorative Crescents */}
            <div className="absolute top-0 left-0 w-full h-full">
              <svg viewBox="0 0 100 100" className="w-full h-full absolute opacity-10">
                <path d="M30,0 A40,40 0 0,1 70,0" fill="none" stroke="#F8B156" strokeWidth="4" />
                <path d="M0,30 A40,40 0 0,1 0,70" fill="none" stroke="#F8B156" strokeWidth="4" />
                <path d="M30,100 A40,40 0 0,0 70,100" fill="none" stroke="#F8B156" strokeWidth="4" />
                <path d="M100,30 A40,40 0 0,0 100,70" fill="none" stroke="#F8B156" strokeWidth="4" />
              </svg>
            </div>

            {/* Time Display */}
            <div className="transform -rotate-45 text-xl text-amber-800 font-semibold z-10 bg-amber-50/50 px-3 py-1 rounded-full backdrop-blur-sm">
              {currentTime}
            </div>
          </div>
        </div>

        {/* Decorative Crescents */}
        <div className="absolute top-2 right-2">
          <svg width="24" height="24" viewBox="0 0 24 24" className="text-amber-300/30">
            <path d="M12 2.25A9.75 9.75 0 0 1 21.75 12 9.75 9.75 0 0 1 12 21.75 9.75 9.75 0 0 1 2.25 12 9.75 9.75 0 0 1 12 2.25z" fill="currentColor"/>
          </svg>
        </div>
        <div className="absolute bottom-2 left-2">
          <svg width="16" height="16" viewBox="0 0 24 24" className="text-amber-300/30">
            <path d="M12 2.25A9.75 9.75 0 0 1 21.75 12 9.75 9.75 0 0 1 12 21.75 9.75 9.75 0 0 1 2.25 12 9.75 9.75 0 0 1 12 2.25z" fill="currentColor"/>
          </svg>
        </div>
      </div>

            {/* Asar Countdown - made more compact */}
            <div className="bg-purple-900 text-white py-2 px-4 text-center rounded-lg mb-4">
                <h2 className="text-xl font-bold">ASAR</h2>
                <div className="text-lg">In {asarCountdown}</div>
            </div>

            {/* Prayer Times - adjusted text sizes and alignment */}
            <div className="bg-amber-50 rounded-lg mb-4">
                <div className="grid grid-cols-2 text-center py-1 border-b border-amber-100 text-sm text-black">
                    <div>Jamaat Time</div>
                    <div>Beginning Time</div>
                </div>

                {prayers.map((prayer, index) => (
                    <div key={index} className="grid grid-cols-4 items-center p-3 border-b border-amber-100 text-center justify-center rounded-lg mb-2">
                        <div className="text-center col-span-2 pr-4">
                            <div className="text-amber-800 text-lg">{prayer.nameArabic}</div>
                            <div className="text-amber-700 text-sm">{prayer.nameEnglish}</div>
                        </div>
                        <div className="text-xl text-amber-600 text-center">{prayer.jamaatTime}</div>
                        <div className="text-xl text-amber-800 text-center">{prayer.beginningTime}</div>
                    </div>
                ))}
            </div>

            {/* Bottom Times - made more compact */}
            <div className="bg-purple-900 text-white grid grid-cols-4 p-3 rounded-lg mb-4">
                {bottomTimes.map((item, index) => (
                    <div key={index} className="text-center">
                        <div className="text-sm">{item.time}</div>
                        <div className="text-xs">{item.name}</div>
                    </div>
                ))}
            </div>

            {/* Bottom Navigation - made more compact */}
            <div className="bg-amber-400 p-3 flex justify-center space-x-6 rounded-lg">
                <button className="flex items-center text-white">
                    <Clock className="w-5 h-5 mr-1" />
                    <span className="text-sm">Salah Time</span>
                </button>
                <button className="text-white">📅</button>
                <button className="text-white">((()))</button>
                <button className="text-white">?</button>
            </div>
        </div>
    );
};

export default PrayerTimes;