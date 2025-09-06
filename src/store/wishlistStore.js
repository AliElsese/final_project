import { create } from "zustand";
import { backendUrlApi } from './index'
import axios from "axios";

export const useWishlistStore = create((set, get) => ({
    wishlist: [],
    wishlistId: null,

    fetchWishlist: async (token, user) => {
        try {
            const res = await axios.get(`${backendUrlApi}wishlists`, {
                params: {
                    "populate[users_permissions_user][populate]": "*",
                    "populate[products][populate]": "*",
                    "filters[users_permissions_user][id][$eq]": user.id
                },
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            const userWishlist = res.data.data[0];

            set({
                wishlist: userWishlist?.products || [],
                wishlistId: userWishlist?.documentId || null
            });
        } catch (err) {
            console.error("fetchWishlist error:", err);
        }
    },

    removeFromWishlist: async (productId, token) => {
        const { wishlist, wishlistId } = get();

        try {
            const updatedProducts = wishlist
                .filter(item => item.id !== productId)
                .map(item => item.id);

            const res = await axios.put(`${backendUrlApi}wishlists/${wishlistId}`, {
                data: { products: updatedProducts }
            }, {
                params: { populate: { products: { populate: '*' }} },
                headers: { Authorization: `Bearer ${token}` }
            });
            console.log(res.data.data.products)
            set({ wishlist: res.data.data.products });
        } catch (err) {
            console.error("removeFromWishlist error:", err);
        }
    },

    addToWishlist: async (productId, token) => {
        const { wishlist, wishlistId } = get();

        if (wishlist.some(item => item.id === productId)) return;

        try {
            const updatedProducts = [...wishlist.map(item => item.id), productId];

            const res = await axios.put(`${backendUrlApi}wishlists/${wishlistId}`, {
                data: { products: updatedProducts }
            }, { 
                params: { populate: { products: { populate: '*' }} },
                headers: { Authorization: `Bearer ${token}` }
            });

            set({ wishlist: res.data.data.products });
        } catch (error) {
            console.error("addToWishlist error:", error);
        }
    }
}))