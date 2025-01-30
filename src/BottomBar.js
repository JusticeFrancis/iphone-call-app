import { AccountCircle, Star, Voicemail, WatchLater } from "@mui/icons-material";
import React from "react";

const BottomBar = () => {
  return (
    <div
      className="border-t-[1px] border-[#e5e5e5] w-full bg-[#f6f6f6] flex items-center
     justify-between px-3"
    >
      <div>
        <div className="flex justify-center text-[#c6c5c5]">
          <Star sx={{ color: "#b4b3b3", fontSize: "25px" }} />
        </div>
        <div className="text-[#8f8d8d] text-[12px] text-center mt-[2px]">
          Favorites
        </div>
      </div>

      <div>
        <div className="flex justify-center">
          <WatchLater sx={{ color: "#2563eb", fontSize: "25px" }} />
        </div>
        <div className="text-[#2563eb] text-[12px] text-center mt-[2px]">
          Recent
        </div>
      </div>

      <div>
        <div className="flex justify-center">
          <AccountCircle sx={{ color: "#b4b3b3", fontSize: "25px" }} />
        </div>
        <div className="text-[#8f8d8d] text-[12px] text-center mt-[2px]">
          Contact
        </div>
      </div>


      <div className="relative bottom-[1px]">
        <div className="flex justify-center">
        <div class="dots-container ">
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
  </div>
        </div>
        <div className="text-[#8f8d8d] text-[12px] text-center mt-[2px]">
          Keypad
        </div>
      </div>



      <div>
        <div className="flex justify-center">
          <Voicemail sx={{ color: "#b4b3b3", fontSize: "25px" }} />
        </div>
        <div className="text-[#8f8d8d] text-[12px] text-center mt-[2px]">
          Voicemail
        </div>
      </div>



      
    </div>
  );
};

export default BottomBar;
