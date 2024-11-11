function Navbar()
    {
        return(
            <nav className="bg-gray-800">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">

                            <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                                <span className="absolute -inset-0.5"></span>
                                <span className="sr-only">Open main menu</span>

                                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>

                                <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="flex shrink-0 items-center">
                                <img className="h-8 w-auto" src="https://i.pinimg.com/564x/51/34/1e/51341e6a58426f62316ae45fae22344c.jpg" alt="Your Company" />
                            </div>
                            <div className="hidden sm:ml-6 sm:block">
                                <div className="flex space-x-4">

                                    <a href="#" className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white" aria-current="page">Dashboard</a>
                                    <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Books</a>
                                   
                                </div>
                            </div>
                        </div>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            <button type="button" className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                <span className="absolute -inset-1.5"></span>
                                <span className="sr-only">View notifications</span>
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                                </svg>
                            </button>


                            <div className="relative ml-3">
                                <div>
                                    <button type="button" className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                        <span className="absolute -inset-1.5"></span>
                                        <span className="sr-only">Open user menu</span>
                                        <img className="h-8 w-8 rounded-full" src="data:image/png;base64,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" alt="" />
                                    </button>
                                </div>



                            </div>
                        </div>
                    </div>
                </div>

                <div className="sm:hidden" id="mobile-menu">
                    <div className="space-y-1 px-2 pb-3 pt-2">

                        <a href="#" className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white" aria-current="page">Dashboard</a>
                        <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Home</a>
                        <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Books</a>
                        <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">CONTACT</a>
                    </div>
                </div>
            </nav>


        )

    }
    export default Navbar;