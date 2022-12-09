import {Route, Routes} from "react-router-dom";
import {FC} from "react";
import Page from "./Components/Page/Page";
import HomePage from "./Pages/HomePage/HomePage";
import NotFound from "./Pages/NotFound/NotFound";
import CatalogPage from "./Pages/CatalogPage/CatalogPage";
import ProductPage from "./Pages/ProductPage/ProductPage";

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