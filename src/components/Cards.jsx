import { sample } from "../utils/constant";

function Cards() {
  return (
    <div className="w-full  md:w-56  ">
    <div className="tub h-60 sm:h-72 md:h-36 rounded-lg bg-red-50">
    </div>
    <div>
      <div className="mt-2 flex gap-2">
        <div className="logo">
          <div>
            <img src={sample} alt="" style={{minwidth:"35px",minheight:"30px",maxHeight:"35px"}} className="rounded-full" />
          </div>
        </div>
          <div>
            <p className="text-sm font-medium text-white line-clamp-2">Build and Deploy Fully Functional youtuble clone single page application</p>
          </div>
      </div>
      <div className="channel w-full flex justify-end mt-2">
        <div className="w-[91%] flex flex-col leading-none gap-1 text-gray-400" style={{fontSize:"13px"}}>
          <span>JS Dev Hindi</span>
          <span>92k views 1year ago</span>
        </div>
      </div>
    </div>
  </div>
  );
}
export default Cards;
