import { useState, useEffect } from "react";
function Books() {
  const [books, setBooks] = useState([
    {
      "author_key": ["OL2666337A"],
      "author_name": ["Peter Steele"],
      "ddc": ["828"],
      "ebook_access": "no_ebook",
      "ebook_count_i": 0,
      "edition_count": 1,
      "edition_key": ["OL15212978M"],
      "first_publish_year": 1992,
      "has_fulltext": false,
      "isbn": ["187452601X", "9781874526018"],
      "key": "/works/OL8008880W",
      "language": ["eng"],
      "last_modified_i": 1307531948,
      "number_of_pages_median": 40,
      "oclc": "27686632",
      "public_scan_b": false,
      "publish_date": ["1992"],
      "publish_place": ["Gloucester"],
      "publish_year": [1992],
      "publisher": ["Zaphire"],
      "seed": ["/books/OL15212978M", "/works/OL8008880W", "/authors/OL2666337A"],
      "title": "COMPUTER LEARNING",
      "title_suggest": "Hilarious book-titles & authors",
      "title_sort": "Hilarious book-titles & authors",
      "type": "work",
      "publisher_facet": ["Zaphire"],
      "_version_": 1795927570441568257,
      "author_facet": ["OL2666337A Peter Steele"],
      "imageUrl": "https://computechpublications.in/wp-content/uploads/2018/08/183-1_acc_ENG_FRONT.jpg",
      "ddc_sort": "828"
    },
    {
      "author_key": ["OL2348743A"],
      "author_name": ["G. Douglas"],
      "ebook_access": "no_ebook",
      "ebook_count_i": 0,
      "edition_count": 1,
      "edition_key": ["OL21467954M"],
      "first_publish_year": 1922,
      "has_fulltext": false,
      "key": "/works/OL7645738W",
      "language": ["eng"],
      "last_modified_i": 1260861888,
      "public_scan_b": false,
      "publish_date": ["1922"],
      "publish_year": [1922],
      "seed": ["/books/OL21467954M", "/works/OL7645738W", "/authors/OL2348743A"],
      "title": "REACT JS",
      "title_suggest": "REACT JS",
      "title_sort": "A gossip on book-titles",
      "type": "work",
      "_version_": 1795926928197156865,
      "imageUrl": "https://m.media-amazon.com/images/I/81x8Qt-q1ZL._SY522_.jpg",
      "author_facet": ["OL2348743A G. Douglas"]
    },
    {
      "author_key": ["OL1291470A"],
      "author_name": ["Charles Rockwell Lanman"],
      "ddc": ["891.3"],
      "ebook_access": "no_ebook",
      "ebook_count_i": 0,
      "edition_count": 1,
      "edition_key": ["OL45017626M"],
      "first_publish_year": 1909,
      "has_fulltext": false,
      "key": "/works/OL33140796W",
      "language": ["eng"],
      "last_modified_i": 1672270658,
      "lcc": ["Z--7090.00000000.L366"],
      "number_of_pages_median": 707,
      "oclc": ["6591566"],
      "public_scan_b": false,
      "publish_date": ["1909"],
      "publish_place": ["Boston]"],
      "publish_year": [1909],
      "publisher": ["[American academy of arts and sciences]"],
      "seed": ["/books/OL45017626M", "/works/OL33140796W", "/authors/OL1291470A"],
      "title": "JAVASCRIPT",
      "title_suggest": "Pali book-titles and their brief designations",
      "title_sort": "Pali book-titles and their brief designations",
      "type": "work",
      "publisher_facet": ["[American academy of arts and sciences]"],
      "_version_": 1795905810522439680,
      "lcc_sort": "Z--7090.00000000.L366",
      "author_facet": ["OL1291470A Charles Rockwell Lanman"],
      "imageUrl": "https://www.dummies.com/wp-content/uploads/javascript-essentials-for-dummies-cover-9781394263219.jpg",
      "ddc_sort": "891.3"
    },
    {
      "author_key": ["OL2348743A"],
      "author_name": ["G. Douglas"],
      "ebook_access": "no_ebook",
      "ebook_count_i": 0,
      "edition_count": 1,
      "edition_key": ["OL21467954M"],
      "first_publish_year": 1922,
      "has_fulltext": false,
      "key": "/works/OL7645738W",
      "language": ["eng"],
      "last_modified_i": 1260861888,
      "public_scan_b": false,
      "publish_date": ["1922"],
      "publish_year": [1922],
      "seed": ["/books/OL21467954M", "/works/OL7645738W", "/authors/OL2348743A"],
      "title": "WEB TECHNOLOGIES",
      "title_suggest": "A gossip on book-titles",
      "title_sort": "A gossip on book-titles",
      "type": "work",
      "_version_": 1795926928197156865,
      "imageUrl": "https://m.media-amazon.com/images/I/51zsuUDj1SL.jpg",
      "author_facet": ["OL2348743A G. Douglas"]
    },
    {
      "author_key": ["OL1291470A"],
      "author_name": ["Charles Rockwell Lanman"],
      "ddc": ["891.3"],
      "ebook_access": "no_ebook",
      "ebook_count_i": 0,
      "edition_count": 1,
      "edition_key": ["OL45017626M"],
      "first_publish_year": 1909,
      "has_fulltext": false,
      "key": "/works/OL33140796W",
      "language": ["eng"],
      "last_modified_i": 1672270658,
      "lcc": ["Z--7090.00000000.L366"],
      "number_of_pages_median": 707,
      "oclc": ["6591566"],
      "public_scan_b": false,
      "publish_date": ["1909"],
      "publish_place": ["Boston]"],
      "publish_year": [1909],
      "publisher": ["[American academy of arts and sciences]"],
      "seed": ["/books/OL45017626M", "/works/OL33140796W", "/authors/OL1291470A"],
      "title": "DATA ANALYTICS",
      "title_suggest": "Pali book-titles and their brief designations",
      "title_sort": "Pali book-titles and their brief designations",
      "type": "work",
      "publisher_facet": ["[American academy of arts and sciences]"],
      "_version_": 1795905810522439680,
      "lcc_sort": "Z--7090.00000000.L366",
      "author_facet": ["OL1291470A Charles Rockwell Lanman"],
      "imageUrl": "https://m.media-amazon.com/images/I/81GXFVTUbVL._SY522_.jpg",
      "ddc_sort": "891.3"
    },
    {
      "author_key": ["OL5672341A"],
      "author_name": ["John Smith"],
      "ebook_access": "no_ebook",
      "ebook_count_i": 0,
      "edition_count": 1,
      "edition_key": ["OL56723456M"],
      "first_publish_year": 2015,
      "has_fulltext": false,
      "key": "/works/OL10023456W",
      "language": ["eng"],
      "last_modified_i": 1452345678,
      "publish_date": ["2015"],
      "publish_year": [2015],
      "seed": ["/books/OL56723456M", "/works/OL10023456W", "/authors/OL5672341A"],
      "title": "Mastering Java Programming",
      "title_suggest": "Mastering Java Programming",
      "title_sort": "Mastering Java Programming",
      "type": "work",
      "_version_": 1795926928197156865,
      "imageUrl": "https://m.media-amazon.com/images/I/814qCvkdZSL._SY522_.jpg",
      "author_facet": ["OL5672341A John Smith"]
    },
    {
      "author_key": ["OL9876543A"],
      "author_name": ["Jane Doe"],
      "ebook_access": "no_ebook",
      "ebook_count_i": 0,
      "edition_count": 1,
      "edition_key": ["OL98765434M"],
      "first_publish_year": 2010,
      "has_fulltext": false,
      "key": "/works/OL6543210W",
      "language": ["eng"],
      "last_modified_i": 1452345678,
      "publish_date": ["2010"],
      "publish_year": [2010],
      "seed": ["/books/OL98765434M", "/works/OL6543210W", "/authors/OL9876543A"],
      "title": "C Programming for Beginners",
      "title_suggest": "C Programming for Beginners",
      "title_sort": "C Programming for Beginners",
      "type": "work",
      "_version_": 1795926928197156865,
      "imageUrl": "https://m.media-amazon.com/images/I/51HTieS6nkL._SY445_SX342_.jpg",
      "author_facet": ["OL9876543A Jane Doe"]
    },
    {
      "author_key": ["OL3456789A"],
      "author_name": ["Richard Roe"],
      "ebook_access": "no_ebook",
      "ebook_count_i": 0,
      "edition_count": 1,
      "edition_key": ["OL34567890M"],
      "first_publish_year": 2018,
      "has_fulltext": false,
      "key": "/works/OL20098765W",
      "language": ["eng"],
      "last_modified_i": 1572345678,
      "publish_date": ["2018"],
      "publish_year": [2018],
      "seed": ["/books/OL34567890M", "/works/OL20098765W", "/authors/OL3456789A"],
      "title": "ASP.NET Web Development Made Easy",
      "title_suggest": "ASP.NET Web Development Made Easy",
      "title_sort": "ASP.NET Web Development Made Easy",
      "type": "work",
      "_version_": 1795926928197156865,
      "imageUrl": "https://m.media-amazon.com/images/I/71YnLRxR5mL._SY522_.jpg",
      "author_facet": ["OL3456789A Richard Roe"]
    },
    {
      "author_key": ["OL1122334A"],
      "author_name": ["Michael Johnson"],
      "ebook_access": "no_ebook",
      "ebook_count_i": 0,
      "edition_count": 1,
      "edition_key": ["OL11223345M"],
      "first_publish_year": 2020,
      "has_fulltext": false,
      "key": "/works/OL10011223W",
      "language": ["eng"],
      "last_modified_i": 1572345678,
      "publish_date": ["2020"],
      "publish_year": [2020],
      "seed": ["/books/OL11223345M", "/works/OL10011223W", "/authors/OL1122334A"],
      "title": "Spring Boot Essentials",
      "title_suggest": "Spring Boot Essentials",
      "title_sort": "Spring Boot Essentials",
      "type": "work",
      "_version_": 1795926928197156865,
      "imageUrl": "https://m.media-amazon.com/images/I/51ghvCr7YIL._SX342_SY445_.jpg",
      "author_facet": ["OL1122334A Michael Johnson"]
    },
    {
      "author_key": ["OL6677889A"],
      "author_name": ["Alice Williams"],
      "ebook_access": "no_ebook",
      "ebook_count_i": 0,
      "edition_count": 1,
      "edition_key": ["OL66778890M"],
      "first_publish_year": 2022,
      "has_fulltext": false,
      "key": "/works/OL56788900W",
      "language": ["eng"],
      "last_modified_i": 1672345678,
      "publish_date": ["2022"],
      "publish_year": [2022],
      "seed": ["/books/OL66778890M", "/works/OL56788900W", "/authors/OL6677889A"],
      "title": "Introduce DBMS",
      "title_suggest": "MySQL Database Management",
      "title_sort": "MySQL Database Management",
      "type": "work",
      "_version_": 1795926928197156865,
      "imageUrl": "https://m.media-amazon.com/images/I/51eySiDKFJL._SY522_.jpg",
      "author_facet": ["OL6677889A Alice Williams"]
    },
    {
      "author_key": ["OL2348743A"],
      "author_name": ["G. Douglas"],
      "ebook_access": "no_ebook",
      "ebook_count_i": 0,
      "edition_count": 1,
      "edition_key": ["OL21467954M"],
      "first_publish_year": 1922,
      "has_fulltext": false,
      "key": "/works/OL7645738W",
      "language": ["eng"],
      "last_modified_i": 1260861888,
      "public_scan_b": false,
      "publish_date": ["1922"],
      "publish_year": [1922],
      "seed": ["/books/OL21467954M", "/works/OL7645738W", "/authors/OL2348743A"],
      "title": "PHP LEARNING",
      "title_suggest": "A gossip on book-titles",
      "title_sort": "A gossip on book-titles",
      "type": "work",
      "_version_": 1795926928197156865,
      "imageUrl": "https://m.media-amazon.com/images/I/71aHDJ3KjoL._SY522_.jpg",
      "author_facet": ["OL2348743A G. Douglas"]
    },
    {
      "author_key": ["OL5672341A"],
      "author_name": ["John Smith"],
      "ebook_access": "no_ebook",
      "ebook_count_i": 0,
      "edition_count": 1,
      "edition_key": ["OL56723456M"],
      "first_publish_year": 2015,
      "has_fulltext": false,
      "key": "/works/OL10023456W",
      "language": ["eng"],
      "last_modified_i": 1452345678,
      "publish_date": ["2015"],
      "publish_year": [2015],
      "seed": ["/books/OL56723456M", "/works/OL10023456W", "/authors/OL5672341A"],
      "title": "CLOUD/AWS LEARNING",
      "title_suggest": "Mastering CLOUD",
      "title_sort": "Mastering CLOUD Programming",
      "type": "work",
      "_version_": 1795926928197156865,
      "imageUrl": "https://m.media-amazon.com/images/I/61sAfdNzvbL._SY522_.jpg",
      "author_facet": ["OL5672341A John Smith"]
    }
  ]);
  const [filterdbooks, setFilterdBooks] = useState(books);
  const [searchTerm, setSearchTerm] = useState('');
  const searchBooks = () => {
    console.log(searchTerm);
  };
  useEffect(() => {
    const _filterBooks = books.filter(book => book.title.toLowerCase().includes(searchTerm.toLowerCase()));
    setFilterdBooks(_filterBooks);
  }, [searchTerm]);
  return (
    <div>
      
      <header className="bg-blue-600 text-white py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Welcome to Invitation Books World
          </h1>
          <p className="text-lg sm:text-xl mb-6">
            Discover a world of timeless invitations, memories, and designs for every occasion.
          </p>
        </div>
      </header>
      <div className="my-6 flex justify-center mr-200">
        <input
          type="text"
          placeholder="Search books..."
          onChange={(event) => setSearchTerm(event.target.value)}
          className="p-2 border border-gray-300 rounded w-1/2"
        />
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={searchBooks}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap gap-y-5 justify my-6">
        {filterdbooks.map((book) => (
          <div className="m-10 max-w-sm rounded-lg overflow-hidden shadow-lg border">
            <img
              src={book.imageUrl}
              alt="Hilarious book-titles & authors"
              className="h-64 mx-auto w-80 h-140 h-32 md:h-64 lg:h-96"
            />
            <div className="p-4 ">
              <h1 className="text-2xl font-bold mb-2">{book.title}</h1>
              <p className="text-lg text-gray-700 mb-1">author_key: <span className="font-semibold">{book.author_key}</span></p>
              <p className="text-sm text-gray-600 mb-1">ebook_access: <span className="font-medium">{book.ebook_access}</span></p>
              <p className="text-sm text-gray-600 mb-1">ebook_count_i: <span className="font-medium">{book.ebook_count_i}</span></p>
              <p className="text-sm text-gray-600 mb-1">edition_count: <span className="font-medium">{book.edition_count}</span></p>
              <p className="text-sm text-gray-600 mb-1">first_publish_year: <span className="font-medium">{book.first_publish_year}</span></p>
              <p className="text-sm text-gray-600">has_fulltext: <span className="font-medium">{book.has_fulltext}</span></p>
              <p className="text-sm text-gray-600 mb-1">isbn: <span className="font-medium">{book.isbn}</span></p>
              <p className="text-sm text-gray-600 mb-1">key: <span className="font-medium">{book.key}</span></p>
              <p className="text-sm text-gray-600 mb-1">language: <span className="font-medium">{book.language}</span></p>
              <p className="text-sm text-gray-600 mb-1">last_modified_i: <span className="font-medium">{book.last_modified_i}</span></p>
              <p className="text-sm text-gray-600 mb-1">number_of_pages_median: <span className="font-medium">{book.number_of_pages_median}</span></p>
              <p className="text-sm text-gray-600 mb-1">oclc: <span className="font-medium">{book.number_of_pages_median}</span></p>
              <p className="text-sm text-gray-600 mb-1">public_scan_b: <span className="font-medium">{book.oclc}</span></p>
              <p className="text-sm text-gray-600 mb-1">publish_date: <span className="font-medium">{book.publish_date}</span></p>
              <p className="text-sm text-gray-600 mb-1">publish_place: <span className="font-medium">{book.publish_place}</span></p>
              <p className="text-sm text-gray-600 mb-1">publish_year: <span className="font-medium">{book.publish_year}</span></p>
              <p className="text-sm text-gray-600 mb-1">publisher: <span className="font-medium">{book.publisher}</span></p>
              <p className="text-sm text-gray-600 mb-1">seed: <span className="font-medium">{book.seed}</span></p>
              <p className="text-sm text-gray-600 mb-1">title: <span className="font-medium">{book.title}</span></p>
              <p className="text-sm text-gray-600 mb-1">title_suggest: <span className="font-medium">{book.title_suggest}</span></p>
              <p className="text-sm text-gray-600 mb-1">title_sort: <span className="font-medium">{book.title_sort}</span></p>
              <p className="text-sm text-gray-600 mb-1">type: <span className="font-medium">{book.type}</span></p>
              <p className="text-sm text-gray-600 mb-1">publisher_facet: <span className="font-medium">{book.publisher_facet}</span></p>
              <p className="text-sm text-gray-600 mb-1">_version_: <span className="font-medium">{book._version_}</span></p>
              <p className="text-sm text-gray-600 mb-1">author_facet: <span className="font-medium">{book.author_facet}</span></p>
              <p className="text-sm text-gray-600 mb-1"> imageUrl:: <span className="font-medium">{book.imageUrl}</span></p>
              <p className="text-sm text-gray-600 mb-1">ddc_sort: <span className="font-medium">{book.ddc_sort}</span></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Books;