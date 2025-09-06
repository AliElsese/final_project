import { BiCheck } from "react-icons/bi";
import { BsTrash2 } from "react-icons/bs";

export default function HistoryPage() {
    return (
        <div className="my-4">
            <div className="max-w-6xl mx-auto p-6 bg-white shadow border border-pink-200 rounded-2xl">
                <div className="flex justify-end mb-6">
                    <button className="w-8 h-8 flex items-center justify-center text-pink-400 hover:bg-pink-50">
                        <span className="text-sm"><BsTrash2 /></span>
                    </button>
                </div>

                <div className="space-y-4 mb-12">
                    <div className="flex justify-between items-center">
                        <span className="text-gray-500 text-sm">Order No.</span>
                        <span className="text-gray-900 font-medium">#123456</span>
                    </div>

                    <div className="flex justify-between items-center">
                        <span className="text-gray-500 text-sm">Status</span>
                        <span className="text-gray-900 font-medium">In progress</span>
                    </div>

                    <div className="flex justify-between items-center">
                        <span className="text-gray-500 text-sm">Date</span>
                        <span className="text-gray-900 font-medium">Jul, 31 2024</span>
                    </div>

                    <div className="flex justify-between items-center">
                        <span className="text-gray-500 text-sm">Address</span>
                        <span className="text-gray-900 font-medium">Maadi, Cairo, Egypt.</span>
                    </div>
                </div>

                <div className="relative flex-1 w-1/2 justify-center mx-auto">
                    <div className="absolute top-6 left-6 right-6 h-0.5 bg-gray-200">
                        <div className="h-full bg-gray-300 w-1/2"></div>
                    </div>

                    <div className="flex justify-between items-start relative z-10">
                        <div className="flex flex-col items-center">
                            <div className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center mb-3">
                                <BiCheck className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-pink-500 text-sm font-medium">Order placed</span>
                        </div>

                        <div className="flex flex-col items-center">
                            <div className="w-12 h-12 bg-gray-400 rounded-full flex items-center justify-center mb-3">
                                <BiCheck className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-gray-400 text-sm">Shipping</span>
                        </div>

                        <div className="flex flex-col items-center">
                            <div className="w-12 h-12 bg-gray-400 rounded-full flex items-center justify-center mb-3">
                                <BiCheck className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-gray-400 text-sm">Completed</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}