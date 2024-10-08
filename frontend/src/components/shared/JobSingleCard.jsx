import { Bookmark } from "lucide-react";
import { Button } from "../ui/button";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";

const JobSingleCard = () => {
  return (
    <div className="p-5 rounded-md shadow-xl bg-white border-gray-100">
      <div className="flex items-center justify-between">
      <h1 className="text-sm text-gray-500">2 days ago</h1>
      <Button variant="outline" className="rounded-full" size="icon">
        <Bookmark />
      </Button>
      </div>

      <div className="flex items-center gap-2 my-2">
        <Button className="p-6" variant="outline" size="icon">
          <Avatar>
            <AvatarImage src="https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg" />
          </Avatar>
        </Button>
        <div>
          <h1 className="font-medium text-lg">Company Name</h1>
          <p className="text-sm text-gray-500">India</p>
        </div>
      </div>

      <div>
        <h1 className="text-lg font-bold my-2">Title</h1>
        <p className="text-sm text-gray-600">asdfg hjbkask ackkkja jhbsjkak jhsk sakks kjbsls hbdiui sakukjbkx sjhj skjhkjsao hxbujuowu jhbxuj sjhxbj sxjbbs bkskbks jbsjjjnk</p>
      </div>

      <div className='flex items-center gap-2 mt-4'>
                <Badge className={'text-blue-700 font-bold'} variant="ghost">12 Positions</Badge>
                <Badge className={'text-[#F83002] font-bold'} variant="ghost">full-time</Badge>
                <Badge className={'text-[#7209b7] font-bold'} variant="ghost">10LPA</Badge>
            </div>
        <div className="flex items-center gap-4 my-2">
          <Button variant="outline">Details</Button>
          <Button className="bg-[#7209b7]">Save for Later</Button>
        </div>
    </div>
  );
};

export default JobSingleCard;
