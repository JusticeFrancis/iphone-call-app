import React, { useEffect, useState } from "react";
import Call from "./Call";
import BottomBar from "./BottomBar";
import CreateCallDialog from "./CreateCallDialog";

const Main = () => {
  const [isPhone, setIsPhone] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [calls, setCalls] = useState([]);

  function getTimeIn12HourFormat() {
    const now = new Date(); // Get the current date and time
    let hours = now.getHours(); // Get hours (0-23)
    const minutes = now.getMinutes(); // Get minutes (0-59)

    // Convert to 12-hour format
    hours = hours % 12 || 12; // Convert 0 to 12 for 12-hour format

    // Format minutes to always be two digits
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    // Return time in "3:14" format
    return `${hours}:${formattedMinutes}`;
  }

  function isNotPhone() {
    // Check screen width (common breakpoint for phones is 768px)
    const isScreenSmall = window.innerWidth < 768;

    // Optional: Check user agent for additional accuracy
    const userAgent = navigator.userAgent.toLowerCase();
    const isMobileUserAgent =
      /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
        userAgent
      );

    // Return true if the screen is not small or the user agent is not mobile
    return !isScreenSmall || !isMobileUserAgent;
  }

  useEffect(() => {
    if (isNotPhone()) {
      setIsPhone(false);
    } else {
      setIsPhone(true);
    }
  });
  return (
    <div>
      <CreateCallDialog
        open={openDialog}
        setOpen={setOpenDialog}
        calls={calls}
        setCalls={setCalls}
      />
      {!isPhone ? (
        <div className="text-center  mt-[40px]">
          {" "}
          Pls use mobile device to use this app{" "}
        </div>
      ) : (
        <div>
          <div className="pt-3 h-[92vh]">
            <div className="flex items-center justify-between px-8">
              <div className="text-black text-[14px]">
                {" "}
                {getTimeIn12HourFormat()}{" "}
              </div>
              <div className="flex items-center space-x-2 ">
                <div class="network-bars">
                  <div class="bar bar-1"></div>
                  <div class="bar bar-2"></div>
                  <div class="bar bar-3"></div>
                  <div class="bar bar-4"></div>
                </div>
                <div className="text-[14px] relative top-[1.5px]"> LTE </div>
                <div class="battery relative top-[1.5px]">
                  <div class="battery-level"></div>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-[20px] text-[14px] cursor-pointer relative">
              <div className="bg-[#eeeded] py-[2px] px-[2px] rounded-[5px] w-[40%] flex items-center ">
                <div className="bg-white w-[50%] rounded-[5px] text-center">
                  All
                </div>
                <div className="w-[50%] text-center"> Missed </div>
              </div>

              <div className="absolute top-0 text-[16px] left-4 text-blue-600">
                {" "}
                Edit{" "}
              </div>
            </div>

            {calls && calls.length > 0 ? (
              <>
                {calls.map((item, index) => (
                  <Call item={item} />
                ))}
              </>
            ) : (
             <div>
               <div className="flex justify-center">
                <div
                  className=" mt-3 text-center cursor-pointer bg-blue-900  w-fit text-white px-2 rounded-[4px] text-[13px] py-1"
                  onClick={() => setOpenDialog(true)}
                >
                  {" "}
                  create a dummy call{" "}
                </div>
              </div>

              <div className="text-[13px] text-center mt-2 ">
                Hey , Im techkrab(Justice Francis) a software developer , check out
                 my portfolio <span className="hover:text-blue-600 hover:underline font-semibold" onClick={()=> window.open('https://techkrab.vercel.app')}>https://techkrab.vercel.app</span>
                 </div>
              </div>
            )}
          </div>
          <div className="flex flex-1 h-[8vh]">
            <BottomBar />
          </div>
        </div>
      )}
    </div>
  );
};

export default Main;
