import AboutUs from "src/components/LandingPage/AboutUs"
import Hero from "src/components/LandingPage/Hero"
import NewsFeed from "src/components/LandingPage/NewsFeed"
import Products from "src/components/LandingPage/Products"
import TalkToConsultant from "src/components/LandingPage/TalkToConsultant"
import TopCategories from "src/components/LandingPage/TopCategories"
import LandingPageLayout from "src/components/layouts/LandingPageLayout"




const HomePage = () => {

    return (
        <LandingPageLayout>
        <Hero />
        <AboutUs />
        <TopCategories />
        <Products />
        <TalkToConsultant />
        <NewsFeed />
        </LandingPageLayout>
    )
}

export default HomePage