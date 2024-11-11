function Home()
{
    return(
        <div className="bg-gray-100 min-h-screen">
      
        <header className="bg-blue-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Welcome to Invitation Books World
            </h1>
            <p className="text-lg sm:text-xl mb-6">
              Discover a world of timeless invitations, memories, and designs for every occasion.
            </p>
            <a
              href="#explore"
              className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-md hover:bg-gray-200"
            >
              Explore Now
            </a>
          </div>
        </header>
  
        <section className="py-12">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
              About Invitation Books World
            </h2>
            <p className="text-gray-700 text-lg">
              At Invitation Books World, we offer a unique collection of invitation-themed books designed to celebrate special moments, share cherished memories, and provide inspiration for events and celebrations.
            </p>
          </div>
        </section>
  
     
        <section className="bg-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl font-semibold mb-6 text-center">
              Featured Categories
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
           
              <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg">
                <h4 className="text-xl font-semibold mb-2">Wedding Invitations</h4>
                <p className="text-gray-600">
                  Discover elegant designs and inspirations for weddings of all themes and sizes.
                </p>
              </div>
            
              <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg">
                <h4 className="text-xl font-semibold mb-2">Birthday Celebrations</h4>
                <p className="text-gray-600">
                  From children's parties to milestone birthdays, explore unique invitation ideas.
                </p>
              </div>
             
              <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg">
                <h4 className="text-xl font-semibold mb-2">Corporate Events</h4>
                <p className="text-gray-600">
                  Stylish, professional invitations for conferences, launches, and business events.
                </p>
              </div>
            </div>
          </div>
        </section>
  
     
        <section className="py-12 bg-blue-600 text-white text-center">
          <h3 className="text-2xl font-semibold mb-4">Ready to Get Inspired?</h3>
          <p className="mb-6">
            Browse our collection of invitation books and make your next event unforgettable.
          </p>
          <a
            href="#explore"
            className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-md hover:bg-gray-200"
          >
            Browse Collection
          </a>
        </section>
      </div>

    )
}
export default Home;