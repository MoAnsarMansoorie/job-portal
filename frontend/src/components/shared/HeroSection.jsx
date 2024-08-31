import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

const HeroSection = () => {
  return (
    <div className="text-center">
        <div className="flex flex-col gap-5 my-10">
            <span className="mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#f83002] font-medium">No.1 Job Hunt Website</span>
            <h1 className="text-5xl font-bold">Search, Apply & <br /> Get Your <span className="text-[#6a38c2]">Dream Jobs</span></h1>
            <p>A website that will help recruiter and jobseekers to find person for fullfilling the requirements.</p>
            <div className="flex w-[40%] border border-gray-200 pl-3 items-center mx-auto rounded-full shadow-lg gap-4">
              <input 
                type="text"
                placeholder="Find your dream jobs"
                className="outline-none border-none w-full"
              />
              <Button className="rounded-r-full bg-[#6a38c2]">
                <Search className="h-5 w-5" />
              </Button>
            </div>
        </div>
    </div>
  )
}

export default HeroSection