import { Link } from "react-router-dom";
import img2 from "../../assets/Vector (16).png";
import img3 from "../../assets/Vector (17).png";
import { useState } from "react";

const Header = ({ count, count2 }) => {
  try {
    return (
      <>
        <header className="bg-[#EAEAEA] py-5 px-[180px] pb-[40px]">
          <div className="container flex justify-between ">
            <div className="flex justify-between w-[35%]">
              <Link to={"/"}>
                <h1 className="text-2xl">
                  <strong> QPICK </strong>
                </h1>
              </Link>
            </div>
            <div className="flex justify-between w-[7%] py-1 ">
              <Link to={"/liked"}>
                <div className="flex">
                  <img width={20} height={19} src={img2} alt="heart" />
                  <span className="rounded-[50%] bg-orange-400  max-h-[18px] px-[6px] mt-[-8px] ml-[-5]">
                    <p className="text-white text-[12px]">{count}</p>
                  </span>
                </div>
              </Link>
              <Link to={"/korzinka"}>
                <div className="flex">
                  <img width={19} height={19} src={img3} alt="korzinka" />
                  <span className="rounded-[50%] bg-orange-400  max-h-[18px] px-[6px] mt-[-8px] ml-[-5]">
                    <p className="text-white text-[12px]">{count2}</p>
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </header>
      </>
    );
  } catch (error) {
    console.log(error.message);
  }
};

export default Header;
