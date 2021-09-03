import React from 'react'
import MainLayout from 'layouts/main'
import HomeContainer from 'containers/Home'
import { Helmet } from "react-helmet";

function Favourite() {
    return (
        <>
            <Helmet title={`React | Favourite`} />
            <MainLayout>
                <HomeContainer />
            </MainLayout>
        </>
    )
}

export default Favourite
