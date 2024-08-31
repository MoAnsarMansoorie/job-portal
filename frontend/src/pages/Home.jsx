import Navbar from "@/components/shared/Navbar"
import HeroSection from "../components/shared/HeroSection"
import CategoryCarousel from "../components/shared/CategoryCarousel"
import LatestJobs from "@/components/shared/LatestJobs"
import Footer from "@/components/shared/Footer"

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <CategoryCarousel />
      <LatestJobs />
      <Footer />
    </>
  )
}

export default Home