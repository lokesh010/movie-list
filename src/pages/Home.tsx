import React from 'react'
import MainLayout from 'layouts/main'
import HomeContainer from 'containers/Home'
import { Helmet } from "react-helmet";

function HomePage() {
    return (
        <>
            <Helmet title={`Movies | Homie`} />
            <MainLayout>
                <HomeContainer />
            </MainLayout>
        </>
    )
}

export default HomePage
