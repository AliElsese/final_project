import { BiMinus, BiPlus } from "react-icons/bi";
import coverBook from "../assets/images/cover.png";

export default function CheckoutPage() {
    return (
        <div className="min-h-screen bg-gray-50 p-5">
            <div className="max-w-6xl mx-auto flex gap-5">
                <div className="flex-1 bg-white p-8 rounded-lg shadow-sm">
                    <h2 className="text-lg font-semibold text-gray-900 mb-5">Shipping Information</h2>

                    <div className="space-y-5">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm text-gray-600 mb-2">Name</label>
                                <input
                                    type="text"
                                    defaultValue="John Smith"
                                    className="w-full px-3 py-3 bg-gray-50 border border-gray-200 rounded text-sm focus:outline-none focus:border-blue-500 focus:bg-white"
                                />
                            </div>
                            <div>
                                <label className="block text-sm text-gray-600 mb-2">Phone</label>
                                <input
                                    type="text"
                                    defaultValue="17345789"
                                    className="w-full px-3 py-3 bg-gray-50 border border-gray-200 rounded text-sm focus:outline-none focus:border-blue-500 focus:bg-white"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm text-gray-600 mb-2">Email</label>
                                <input
                                    type="email"
                                    defaultValue="johnsmith@gmail.com"
                                    className="w-full px-3 py-3 bg-gray-50 border border-gray-200 rounded text-sm focus:outline-none focus:border-blue-500 focus:bg-white"
                                />
                            </div>
                            <div>
                                <label className="block text-sm text-gray-600 mb-2">City</label>
                                <input
                                    type="text"
                                    defaultValue="Mosul"
                                    className="w-full px-3 py-3 bg-gray-50 border border-gray-200 rounded text-sm focus:outline-none focus:border-blue-500 focus:bg-white"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm text-gray-600 mb-2">Country</label>
                                <input
                                    type="text"
                                    defaultValue="Cairo"
                                    className="w-full px-3 py-3 bg-gray-50 border border-gray-200 rounded text-sm focus:outline-none focus:border-blue-500 focus:bg-white"
                                />
                            </div>
                            <div>
                                <label className="block text-sm text-gray-600 mb-2">ZIP</label>
                                <input
                                    type="text"
                                    defaultValue="11211"
                                    className="w-full px-3 py-3 bg-gray-50 border border-gray-200 rounded text-sm focus:outline-none focus:border-blue-500 focus:bg-white"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm text-gray-600 mb-2">Address</label>
                            <input
                                type="text"
                                defaultValue="Maadi, Cairo, Egypt"
                                className="w-full px-3 py-3 bg-gray-50 border border-gray-200 rounded text-sm focus:outline-none focus:border-blue-500 focus:bg-white"
                            />
                        </div>
                    </div>

                    <div className="mt-8">
                        <h2 className="text-lg font-semibold text-gray-900 mb-4">Payment Method</h2>
                        <div className="flex gap-6">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input type="radio" name="payment" className="w-4 h-4" />
                                <span className="text-sm text-gray-700">Online payment</span>
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input type="radio" name="payment" defaultChecked className="w-4 h-4" />
                                <span className="text-sm text-pink-600">Cash on delivery</span>
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input type="radio" name="payment" className="w-4 h-4" />
                                <span className="text-sm text-gray-700">POS on delivery</span>
                            </label>
                        </div>
                    </div>

                    <div className="mt-8">
                        <h2 className="text-lg font-semibold text-gray-900 mb-4">Note</h2>
                        <textarea
                            placeholder="Add note"
                            className="w-full px-3 py-3 bg-gray-50 border border-gray-200 rounded text-sm focus:outline-none focus:border-blue-500 focus:bg-white resize-none h-16"
                        />
                    </div>
                </div>

                <div className="w-96 bg-white p-8 rounded-lg shadow-sm">
                    <h2 className="text-lg font-semibold text-gray-900 mb-5">Order summary</h2>

                    <div className="space-y-4">

                        <div className="flex items-center py-4 border-b border-gray-100">
                            <div className="w-20 h-20 bg-gradient-to-br from-yellow-600 to-orange-600 rounded flex items-center justify-center text-white text-xs font-bold text-center leading-tight mr-4">

                                <img src={coverBook} alt="" />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-sm font-semibold text-gray-900 mb-1">Rich Dad And Poor Dad</h3>
                                <p className="text-xs text-gray-600 mb-2">Robert T. Kiyosaki</p>
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="text-yellow-400 text-xs">★★★★★</div>
                                    <span className="text-xs text-gray-500">Free shipping</span>
                                </div>
                                <div className='flex items-center justify-between'>
                                    <p className="text-base font-semibold text-gray-900">$40</p>
                                    <div className="flex items-center gap-3 ml-4">
                                        <button className="w-6 h-6 border-2 border-pink-500 rounded-full flex items-center justify-center hover:bg-gray-50">
                                            <BiMinus size={12} className="text-pink-600" />
                                        </button>
                                        <span className="text-sm min-w-4 text-center">1</span>
                                        <button className="w-6 h-6 border-2 border-pink-500 rounded-full flex items-center justify-center hover:bg-gray-50">
                                            <BiPlus size={12} className="text-pink-600" />
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="flex items-center py-4 border-b border-gray-100">
                            <div className="w-20 h-20 bg-gradient-to-br from-yellow-600 to-orange-600 rounded flex items-center justify-center text-white text-xs font-bold text-center leading-tight mr-4">

                                <img src={coverBook} alt="" />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-sm font-semibold text-gray-900 mb-1">Rich Dad And Poor Dad</h3>
                                <p className="text-xs text-gray-600 mb-2">Robert T. Kiyosaki</p>
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="text-yellow-400 text-xs">★★★★★</div>
                                    <span className="text-xs text-gray-500">Free shipping</span>
                                </div>
                                <div className='flex items-center justify-between'>
                                    <p className="text-base font-semibold text-gray-900">$40</p>
                                    <div className="flex items-center gap-3 ml-4">
                                        <button className="w-6 h-6 border-2 border-pink-500 rounded-full flex items-center justify-center hover:bg-gray-50">
                                            <BiMinus size={12} className="text-pink-600" />
                                        </button>
                                        <span className="text-sm min-w-4 text-center">1</span>
                                        <button className="w-6 h-6 border-2 border-pink-500 rounded-full flex items-center justify-center hover:bg-gray-50">
                                            <BiPlus size={12} className="text-pink-600" />
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="mt-5 pt-5 border-t border-gray-100">
                        <div className="flex gap-3">
                            <input
                                type="text"
                                placeholder="Enter Promo Code"
                                className="flex-1 px-3 py-2.5 border border-gray-200 rounded text-sm focus:outline-none focus:border-blue-500"
                            />
                            <button className="px-5 py-2.5 bg-gray-900 text-white rounded text-sm font-medium hover:bg-gray-800">
                                Apply
                            </button>
                        </div>
                    </div>

                    <div className="mt-5 pt-5 border-t border-gray-100 space-y-3">
                        <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Subtotal</span>
                            <span className="text-gray-900">$80</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Tax</span>
                            <span className="text-gray-900">$4</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Shipping</span>
                            <span className="text-gray-900">$0</span>
                        </div>
                        <div className="flex justify-between text-lg font-semibold pt-4 border-t border-gray-100">
                            <span className="text-gray-900">Total (USD)</span>
                            <span className="text-pink-600">$84</span>
                        </div>
                    </div>

                    <button className="w-full mt-5 py-4 bg-gradient-to-r from-pink-600 to-pink-700 text-white rounded-md font-semibold text-base hover:from-pink-700 hover:to-pink-800 transition-colors">
                        Confirm order
                    </button>
                </div>
            </div>
        </div>
    )
}