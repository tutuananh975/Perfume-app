import { FC } from "react";
import { FaChevronRight } from "react-icons/fa";
import Header from "../../components/layouts/components/Header";
import Footer from "../../components/layouts/components/Footer";
import SidebarAdmin from "./components/SidebarAdmin";
import { Outlet } from "react-router-dom";

const Admin: FC = () => {
  return (
    <div>
      <Header />
      <div className="title-products flex items-center text-sm pb-4 px-4">
        <span className="mr-2">Home</span>
        <span className="mr-2">
          <FaChevronRight size={10} />
        </span>
        <span>Perfume & Cologne Gift Sets</span>
      </div>
      <div className="px-4">
        <div className="grid grid-cols-4 gap-4">
          <div className="hidden md:block md:col-span-1">
            <SidebarAdmin />
          </div>
          <div className="col-start-1 col-end-5 md:col-span-3"><Outlet /></div>
        </div>
      </div>
      {/* {openSideBarMobile && <SideBarMobile onCloseSideBarMobile={() => setOpenSideBarMobile(false)}/>}     */}
      <Footer />
    </div>
  );
};

export default Admin;
