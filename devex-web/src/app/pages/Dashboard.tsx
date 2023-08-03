export default function Dashboard() {
    return (
        // <div className="h-screen flex overflow-hidden">
        //     {/* Sidebar */}
        //     <div className="flex flex-col w-64">
        //         <div className="flex items-center justify-center h-16 bg-white border-b-2 border-gray-200">
        //             <span className="text-2xl font-semibold text-gray-800">Devex</span>
        //         </div>
        //         <div className="flex flex-col flex-grow bg-gray-200 overflow-y-auto">
        //             {/* Navigation links */}
        //             <nav className="mt-10">
        //                 <a href="#" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-300">
        //                     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        //                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
        //                     </svg>
        //                     <span className="mx-4">Home</span>
        //                 </a>
        //                 <a href="#" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-300">
        //                     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        //                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
        //                     </svg>
        //                     <span className="mx-4">Scorecard</span>
        //                 </a>
        //                 <a href="#" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-300">
        //                     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        //                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
        //                     </svg>
        //                     <span className="mx-4">Analytics</span>
        //                 </a>
        //                 {/* Add more navigation links here */}
        //             </nav>
        //         </div>
        //     </div>
        //     {/* Main content */}
        //     <div className="flex flex-col flex-grow">
        //         {/* Add your main content here */}
        //     </div>
        // </div>
        <div className="flex flex-col md:flex-row">
            <header className="w-full md:w-[250px] bg-gray-50 md:h-screen">
                <h1 className="">Devex</h1>
            </header>
            <div className="bg-gray-300">
                <p className="">Content area</p>
            </div>
        </div>
    )
}