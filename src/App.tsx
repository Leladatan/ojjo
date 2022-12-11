import {Route, Routes} from "react-router-dom";
import {FC} from "react";
import Page from "./Components/Page/Page";
import HomePage from "./Pages/HomePage/HomePage";
import NotFound from "./Pages/NotFound/NotFound";
import CatalogPage from "./Pages/CatalogPage/CatalogPage";
import ProductPage from "./Pages/ProductPage/ProductPage";
import ContactsPage from "./Pages/ContactsPage/ContactsPage";
import BlogsPage from "./Pages/BlogsPage/BlogsPage";
import BlogsIdPage from "./Pages/BlogsIdPage/BlogsIdPage";

const App: FC = ({}) => {
    return (
        <>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Page>
                            <HomePage/>
                        </Page>}/>
                <Route
                    path="/catalog"
                    element={
                        <Page>
                            <CatalogPage/>
                        </Page>}/>
                <Route
                    path="/catalog/:id"
                    element={
                        <Page>
                            <ProductPage/>
                        </Page>}/>
                <Route
                    path="/contacts"
                    element={
                        <Page>
                            <ContactsPage/>
                        </Page>}/>
                <Route
                    path="/blogs"
                    element={
                        <Page>
                            <BlogsPage/>
                        </Page>}/>
                <Route
                    path="/blogs/:id"
                    element={
                        <Page>
                            <BlogsIdPage/>
                        </Page>}/>
                <Route
                    path="*"
                    element={
                        <Page>
                            <NotFound/>
                        </Page>}/>
            </Routes>

        </>
    );
};

export default App