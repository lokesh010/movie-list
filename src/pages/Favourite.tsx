import React from 'react'
import MainLayout from 'layouts/main'
import FavouriteContainer from 'containers/Favourite'
import { Helmet } from "react-helmet";

function Favourite() {
    return (
        <>
            <Helmet title={`Movies | Favourite`} />
            <MainLayout>
                <FavouriteContainer />
            </MainLayout>
        </>
    )
}

export default Favourite
