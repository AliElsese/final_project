import { Player } from "@lottiefiles/react-lottie-player";
import axios from "axios"
import { useEffect, useState } from "react"
import { FiFilter, FiHeart, FiSearch, FiShoppingCart } from "react-icons/fi";

export default function BooksPage() {
    const [isLoading, setIsLoading] = useState(false);

    const [books, setBooks] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pagesNumber, setPagesNumber] = useState(1);

    const pageSize = 5;

    const handleCategoryChange = (id) => {
        setSelectedCategories((prev) => prev.includes(id) ? prev.filter((el) => el !== id) : [...prev, id])
    }

    useEffect(() => {
        // pending
        setIsLoading(true)

        const getPageData = async () => {
            try {
                const dbCategories = await axios.get('http://localhost:1337/api/categories')
                // console.log(dbCategories.data.data)
                setCategories(dbCategories.data.data)

                // success
                const res = await axios.get('http://localhost:1337/api/products', {
                    params: {
                        // "populate": "*"
                        populate: "*",

                        // "filters[pro_price][$gt]": 100
                        // filters: {
                        //     pro_price: {
                        //         $gt: 600
                        //     }
                        // },

                        // "pagination[page]": 1,
                        // "pagination[pageSize]": 6

                        // pagination: {
                        //     page: 2,
                        //     pageSize: 6
                        // }

                        // "pagination[start]": 4,
                        // "pagination[limit]": 6

                        // pagination: {
                        //     start: 2,
                        //     limit: 4
                        // }

                        // "sort[0][pro_price]": "desc",
                        // "sort[1][pro_name]": "asc"

                        // sort: {
                        //     pro_price: "desc"
                        // }

                        // "fields[0]": "pro_price",
                        // "fields[1]": "pro_name"

                        // fields: "pro_price, pro_name"

                        pagination: {
                            page: currentPage,
                            pageSize: pageSize
                        },

                        filters: {
                            category: {
                                id: selectedCategories
                            }
                        },

                        filters: {
                            pro_name: {
                                $contains: 'MD'
                            }
                        }
                    }
                });
                // console.log(res.data.data)
                const total = res.data.meta.pagination.total;
                setPagesNumber(Math.ceil(total / pageSize));
                setBooks(res.data.data)
            } catch (error) {
                // error
                console.log(error)
            } finally {
                setIsLoading(false)
            }




















            // try {
            //     if(categories.length === 0) {
            //         const dbCategories = await axios.get("http://localhost:1337/api/categories");
            //         setCategories(dbCategories.data.data);
            //     }

            //     let booksUrl = `http://localhost:1337/api/products?populate=*&pagination[page]=${currentPage}&pagination[pageSize]=${pageSize}`
            //     if(selectedCategories.length > 0) {
            //         const query = selectedCategories
            //             .map((id, index) => `filters[category][id][$in][${index}]=${id}`)
            //             .join("&");
            //         booksUrl += `&${query}`;
            //     }

            //     const filteredBooks = await axios.get(booksUrl);
            //     setBooks(filteredBooks.data.data);
            //     const total = res.data.meta.pagination.total;
            //     setPageCount(Math.ceil(total / pageSize));
            //     setIsLoading(false);
            // } catch (error) {
            //     console.log(error)
            // } finally {
            //     setIsLoading(false);
            // }
        }

        getPageData();
    }, [currentPage, selectedCategories])

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="container mx-auto px-4 py-8">
                <div className="flex gap-8">
                    <aside className="w-64 flex-shrink-0">
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <div className="flex items-center space-x-2 mb-6">
                                <FiFilter className="w-5 h-5 text-gray-600" />
                                <h2 className="text-lg font-semibold text-gray-800">Filter</h2>
                            </div>

                            <div className="mb-6">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-pink-400 font-medium">Categories</h3>
                                </div>
                                <div className="space-y-3">
                                    {
                                        isLoading ? (
                                            <Player autoplay loop src="/animations/Insider-loading.json" />
                                        ) : (
                                            categories.map((category) => (
                                                <label key={category.id} className="flex items-center justify-between cursor-pointer">
                                                    <div className="flex items-center space-x-2">
                                                        <input type="checkbox" className="w-4 h-4 text-pink-500 border-gray-300 rounded focus:ring-pink-500"
                                                            checked={selectedCategories.includes(category.id) ? true : false}
                                                            onChange={() => handleCategoryChange(category.id)}
                                                        />
                                                        <span className="text-sm text-gray-700">{category.cat_name}</span>
                                                    </div>
                                                </label>
                                            ))
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </aside>

                    <main className="flex-1">
                        {/* <div className="flex items-center justify-between mb-6">
                            <div className="relative flex-1 max-w-md">
                                <input type="text" placeholder="Search"
                                    className="w-full pl-4 pr-12 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                                />
                                <div className="absolute right-3 top-3 flex space-x-2">
                                    <FiSearch className="w-5 h-5 text-pink-500 cursor-pointer" />
                                </div>
                            </div>
                        </div> */}

                        <div className="space-y-6">
                            {   
                                isLoading ? (
                                    <div className="flex justify-center h-[200px] w-[200px]">
                                        <Player autoplay loop src="/animations/loading_gray.json" />
                                    </div>
                                ) : (
                                    books.map((book) => (
                                        <div key={book.id} className="bg-white rounded-lg shadow-sm p-6">
                                            <div className="flex gap-6">
                                                <div className="flex-shrink-0">
                                                    <div className="w-32 h-48 rounded-lg">
                                                        <img src={`http://localhost:1337${book.pro_image.url}`} alt={book.pro_image.name} />
                                                    </div>
                                                </div>

                                                <div className="flex-1">
                                                    <div className="flex justify-between items-start mb-2">
                                                        <h3 className="text-xl font-semibold text-gray-800">{book.pro_name}</h3>
                                                    </div>
                                                
                                                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                                                        {book.pro_description}
                                                    </p>
                                                
                                                    <div className="flex items-center space-x-6 text-sm text-gray-600">
                                                        <div>
                                                            <span className="text-gray-500">Author</span>
                                                            <div className="font-medium">{book.pro_author}</div>
                                                        </div>
                                                        <div>
                                                            <span className="text-gray-500">Year</span>
                                                            <div className="font-medium">{book.pro_year}</div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="flex flex-col items-end space-y-4">
                                                    <div className="text-2xl font-bold text-gray-800">${book.pro_price}</div>
                                                    <div className="flex space-x-2">
                                                        <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-lg flex items-center space-x-2 transition-colors">
                                                            <span>Add To Cart</span>
                                                            <FiShoppingCart className="w-4 h-4" />
                                                        </button>
                                                        <button className="border border-pink-500 text-pink-500 hover:bg-pink-50 p-2 rounded-lg transition-colors">
                                                            <FiHeart className="w-5 h-5" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                )
                            }
                        </div>

                        <div className="flex items-center justify-center space-x-2 mt-8">
                            <button className="text-pink-500 hover:text-pink-600 px-3 py-2" 
                                disabled={currentPage === 1 ? true : false}
                                onClick={() => { setCurrentPage( currentPage - 1 )}}>Previous</button>
                            <button className="bg-pink-500 text-white px-4 py-2 rounded-lg">1</button>
                            <button className="bg-pink-500 text-white px-4 py-2 rounded-lg">2</button>
                            <button className="text-pink-500 hover:text-pink-600 px-3 py-2"
                                disabled={currentPage === pagesNumber ? true : false}
                                onClick={() => { setCurrentPage( currentPage + 1 )}}>Next</button>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}