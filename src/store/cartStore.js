import axios from "axios";
import { create } from "zustand";
import { backendUrlApi } from './index'

export const useCartStore = create((set, get) => ({
    cart: [],
    cartId: null,

    fetchCart: async (token, user) => {
        try {
            const res = await axios.get(`${backendUrlApi}carts`, {
                params: {
                    "populate[products][populate]": "*",
                    "populate[users_permissions_user][populate]": "*",
                    "filters[users_permissions_user][id][$eq]": user.id
                },
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            const userCart = res.data.data[0];
            set({ 
                cart: userCart?.products || [],
                cartId: userCart?.documentId || null 
            })
        } catch (err) {
            console.error("cartlist error:", err);
        }
    },

    removeFromCart: async (productId, token) => {
        const { cart, cartId } = get();

        try {
            const updatedProducts = cart
                .filter(item => item.id !== productId)
                .map(item => item.id);

            const res = await axios.put(`${backendUrlApi}carts/${cartId}`, {
                data: { products: updatedProducts }
            }, {
                params: { populate: { products: { populate: '*' }} },
                headers: { Authorization: `Bearer ${token}` }
            });
            // console.log(res.data.data.products)
            set({ cart: res.data.data.products });
        } catch (err) {
            console.error("removeFromCart error:", err);
        }
    },

    addToCart: async (productId, token) => {
        const { cart, cartId } = get();

        if (cart.some(item => item.id === productId)) return;

        try {
            const updatedProducts = [...cart.map(item => item.id), productId];

            const res = await axios.put(`${backendUrlApi}carts/${cartId}`, {
                data: { products: updatedProducts }
            }, { 
                params: { populate: { products: { populate: '*' }} },
                headers: { Authorization: `Bearer ${token}` }
            });

            set({ cart: res.data.data.products });
        } catch (error) {
            console.error("addToCart error:", error);
        }
    }

}))