import { hamburgerMentu, logo } from "../utils/constant";
function TopBar(){
    return(
        <div className="top_bar w-[100%] bg-red-300 px-4">
      <div className="main_items flex items-center">
        <div className="menu mr-4">
          <img src={hamburgerMentu} alt="" />
        </div>
          <img src={logo} alt="" style={{height:"16px",width:"auto"}} />
      </div>
    </div>
    )
}
export default TopBar