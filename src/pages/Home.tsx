import React from 'react'
import MainLayout from 'layouts/main'
import HomeContainer from 'containers/Home'
import 'assets/css/style.css';

function HomePage() {
    return (
        <MainLayout title="Home">
            <HomeContainer />
        </MainLayout>
    )
}

export default HomePage
