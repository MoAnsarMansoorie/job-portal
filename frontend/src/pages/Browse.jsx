import JobSingleCard from "@/components/shared/JobSingleCard"
import Navbar from "@/components/shared/Navbar"

const randomJobs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const Browse = () => {
  return (
    <div>
        <Navbar />
        <div className="max-w-7xl mx-auto my-8">
            <h1 className="font-bold text-xl my-5">Search Results: {randomJobs.length}</h1>
            <div className="grid grid-cols-3 gap-4">
            {
                randomJobs.map((item, index) => {
                    return (
                        <JobSingleCard key={index}/>
                    )
                })
            }
            </div>
        </div>
    </div>
  )
}

export default Browse