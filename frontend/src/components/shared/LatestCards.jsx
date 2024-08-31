import { Badge } from "../ui/badge"



const LatestJobCards = () => {
    return (
        <div  className='p-5 rounded-md shadow-xl bg-white border border-gray-100 cursor-pointer'>
            <div>
                <h1 className='font-medium text-lg'>companyname</h1>
                <p className='text-sm text-gray-500'>India</p>
            </div>
            <div>
                <h1 className='font-bold text-lg my-2'>title</h1>
                <p className='text-sm text-gray-600'>description</p>
            </div>
            <div className='flex items-center gap-2 mt-4'>
                <Badge className={'text-blue-700 font-bold'} variant="ghost">position Positions</Badge>
                <Badge className={'text-[#F83002] font-bold'} variant="ghost">jobType</Badge>
                <Badge className={'text-[#7209b7] font-bold'} variant="ghost">salaryLPA</Badge>
            </div>

        </div>
    )
}

export default LatestJobCards