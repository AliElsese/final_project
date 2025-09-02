import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import AboutPage from "../pages/AboutPage";
import BooksPage from "../pages/BooksPage";
import NotFoundPage from "../pages/NotFoundPage";
import SingleBookPage from "../pages/SingleBookPage";
import ProfilePage from "../pages/ProfilePage";
import WishlistPage from "../pages/WishlistPage";
import ProtectedRoutes from "../Auth/ProtectedRoutes";
import { useAuthStore } from "../store";

export default function AppRouter() {
    const { isLoggedIn } = useAuthStore();

    return (
        <>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path="home" element={<HomePage />} />
                    <Route path="about" element={<AboutPage />} />

                    <Route path="books" element={<BooksPage />} />
                    <Route path="books/:bookId" element={<SingleBookPage />} />

                    <Route path="profile" element={
                        <ProtectedRoutes isLoggedIn={isLoggedIn} redirectTo={'/login'}>
                            <ProfilePage />
                        </ProtectedRoutes>
                    } />

                    <Route path="wishlist" element={
                        <ProtectedRoutes isLoggedIn={isLoggedIn} redirectTo={'/login'}>
                            <WishlistPage />
                        </ProtectedRoutes>
                    } />

                    <Route path="login" element={
                        <ProtectedRoutes isLoggedIn={!isLoggedIn} redirectTo={'/home'}>
                            <LoginPage />
                        </ProtectedRoutes>
                    } />
                    <Route path="signup" element={
                        <ProtectedRoutes isLoggedIn={!isLoggedIn} redirectTo={'/home'}>
                            <RegisterPage />
                        </ProtectedRoutes>
                    } />
                </Route>

                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </>
    )
}