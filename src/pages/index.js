import AboutUs from "src/components/LandingPage/AboutUs"
import Hero from "src/components/LandingPage/Hero"
import Products from "src/components/LandingPage/Products"
import TopCategories from "src/components/LandingPage/TopCategories"
import LandingPageLayout from "src/components/layouts/LandingPageLayout"




const HomePage = () => {

    return (
        <LandingPageLayout>
        <Hero />
        <AboutUs />
        <TopCategories />
        <Products />
        </LandingPageLayout>
    )
}

export default HomePage