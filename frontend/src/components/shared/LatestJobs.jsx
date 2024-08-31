import LatestCards from "./LatestCards"

const randomJobs = [1,2,3,4,5,6,7,8]

const LatestJobs = () => {
  return (
    <div className="max-w-5xl mx-auto my-20">
        <h1 className="text-4xl font-bold"><span className="text-[#6a38c2]">Latest & Top </span>Job Opening</h1>
        {/* Cards */}
        <div className="grid grid-cols-3 gap-4 my-5">
            {
                randomJobs.slice(0, 6).map((item, index) => (
                    <LatestCards key={index}/>
                ))
            }
        </div>
    </div>
  )
}

export default LatestJobs