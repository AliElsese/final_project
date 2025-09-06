import { Player } from "@lottiefiles/react-lottie-player";
import axios from "axios";
import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuthStore } from "../store";
import { useWishlistStore } from "../store/wishlistStore";

export default function WishlistPage() {
    const [isLoading, setIsLoading] = useState(false);

    const { token, user } = useAuthStore();

    const { fetchWishlist, wishlist, removeFromWishlist } = useWishlistStore();


    useEffect(() => {
        setIsLoading(true);

        if(token) fetchWishlist(token, user).finally(() => { setIsLoading(false); });
    }, []);

    const handleRemoveFromWishlist = async(productId) => {
        if(token) await removeFromWishlist(productId, token).finally(() => {
            toast.success('Book Removed Successfully..!', {
                duration: 1800,
                position: 'top-center'
            });
        });
    }

    return (
    
        <div className="min-h-screen bg-gray-50">
            <div className="container mx-auto px-4 py-8">
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                    {
                        isLoading ? null : (
                            <div className="grid grid-cols-12 gap-4 p-6 bg-gray-50 border-b border-gray-200 font-semibold text-gray-700">
                                <div className="col-span-6">Item</div>
                                <div className="col-span-2 text-center">Price</div>
                            </div>
                        )
                    }

                    <div>
                        {
                            isLoading ? (
                                <div className="flex flex-col items-center justify-center md:py-10 lg:py-20">
                                    <Player autoplay loop src="/animations/loading.json" />
                                </div>
                            ) : (
                                wishlist.length === 0 ? (
                                    <div className="text-center py-16">
                                        <FiHeart className="w-24 h-24 text-gray-300 mx-auto mb-6" />
                                        <h2 className="text-2xl font-semibold text-gray-600 mb-4">Your wishlist is empty</h2>
                                        <p className="text-gray-500 mb-6">Start adding books you love to your wishlist</p>
                                        <Link to={"/books"} className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-lg font-medium transition-colors inline-block">
                                            Browse Books
                                        </Link>
                                    </div>
                                ) : (
                                    wishlist.map((item) => (
                                        <div key={item.id} className="grid grid-cols-12 gap-4 p-6 items-center">
                                            <div className="col-span-6 flex space-x-4">
                                                <div className="flex-shrink-0">
                                                    <div className="w-20 h-28 rounded-lg">
                                                        <img src={`http://localhost:1337${item.pro_image.url}`} alt={item.pro_image.name} />
                                                    </div>
                                                </div>
                                                <div className="flex-1">
                                                    <h3 className="font-semibold text-gray-800 mb-1">{item.pro_name}</h3>
                                                    <p className="text-sm text-gray-600 mb-2">
                                                        <span className="font-medium">Author:</span> {item.pro_author}
                                                    </p>
                                                    <p className="text-sm text-gray-500 mb-3 leading-relaxed">
                                                        {item.pro_description}
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="col-span-2 text-center">
                                                <span className="text-lg font-semibold text-gray-800">${item.pro_price}</span>
                                            </div>

                                            <div className="col-span-2 text-center">
                                                <button onClick={() => { handleRemoveFromWishlist(item.id) }}
                                                    className="border border-pink-500 text-pink-500 hover:bg-pink-50 p-2 rounded-lg transition-colors">
                                                    <FaHeart className="w-5 h-5" />
                                                </button>
                                            </div>
                                        </div>
                                    ))
                                )
                            )
                        }
                    </div>
                </div>

            </div>
        </div>
    )
}