import { Cancel, Delete, InfoOutlined } from "@mui/icons-material";
import {
  Button,
  Dialog,
  InputBase,
  MenuItem,
  Select,
  Tooltip,
} from "@mui/material";
import React, { useState } from "react";

const CreateCallDialog = ({ open, setOpen, calls, setCalls }) => {
    const [call, setCall] = useState({
        type:'incoming_call',
        mode:'answered',
        count: '1',
        subtype:'mobile'
    })



    const addCall = () => {
        setCalls([...calls, {...call , id: calls? calls.length + 1 : 1}])
        setCall({
            recipient:'',
            time: '',
            type:'incoming_call',
            mode:'answered',
            count: '1',
            subtype:'mobile'
        })
    }
  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <div className="w-[80vw] py-4 px-2 relative">

       
        <div className="text-center font-semibold text-[15px] mb-4">
          Create call
          <Tooltip  title="Create up to 3 calls to use the application" arrow>
            <InfoOutlined sx={{ fontSize:'17px', ml: '2px', position:'relative', bottom: 1 }} />
          </Tooltip>
        </div>

        <Cancel onClick={()=> {
            setOpen(false)
        }} sx={{ fontSize:'17px', ml: '2px', position:'absolute', top: 1, right: 3, color:'red' }} />

        {calls && calls.length > 0 ? (
            <>
            {calls.map((item,index)=>(
                <div className="text-[13px] flex items-center justify-between mb-2">
                    <div>
                    #{item.id} // {item.recipient} // {item.mode} // {item.time}
                    </div>
                    <div>
                        <Delete sx={{ color:'red', fontSize:'15px'}}
                        onClick={
                            ()=>{
                                setCalls(calls.filter((e)=> e.id !== item.id))
                            }
                        }
                        />
                    </div>
                </div>
            ))}
            </>
        ): (
            <div className="text-[13px] mb-3"> No calls yet </div>
        )}

        <div className="text-[14px]">
          <div className="mb-1">Recipient name</div>
          <InputBase
            placeholder="john doe"
            value={call.recipient}
            onChange={(e)=> {
                setCall({...call, recipient:e.target.value})
            }}
            sx={{
              pl: 2,
              bgcolor: "#e5e5e5",
              width: "100%",
              borderRadius: "5px",
              fontSize: "14px",
            }}
          />
        </div>

        <div className="flex items-center space-x-2 w-full">
        <div className="text-[14px] mt-2 w-full">
          <div className="mb-1">Call Time</div>
          <InputBase
            placeholder="4:33 AM"
            value={call.time}
            onChange={(e)=> {
                setCall({...call, time:e.target.value})
            }}
            sx={{
              pl: 2,
              bgcolor: "#e5e5e5",
              width: "100%",
              borderRadius: "5px",
              fontSize: "14px",
            }}
          />
        </div>

        <div className="text-[14px] mt-2 w-full">
            <div className="mb-1">Call Count</div>
            <Select
             value={call.count}
             onChange={(e)=> {
                 setCall({...call, count:e.target.value})
             }}
              sx={{
                
                bgcolor: "#e5e5e5",
                width: "100%",
                height: "30px",
                borderRadius: "5px",
                fontSize: "14px",
                border: "none", // Remove border
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none", // Remove border in outlined variant
                },
                "&:focus": {
                  outline: "none", // Remove focus outline
                  "& .MuiOutlinedInput-notchedOutline": {
                    border: "none", // Remove border on focus
                  },
                },
              }}
              variant="outlined" // Use outlined variant for better control
            >
              <MenuItem value="1">1</MenuItem>
              <MenuItem value="2">2</MenuItem>
              <MenuItem value="2">3</MenuItem>
            </Select>
          </div>
        </div>

        <div className="flex items-center space-x-4 w-full">
          <div className="text-[14px] mt-2 w-full">
            <div className="mb-1">Call Type</div>
            <Select
             value={call.type}
             onChange={(e)=> {
                 setCall({...call, type:e.target.value})
             }}
              sx={{
                
                bgcolor: "#e5e5e5",
                width: "100%",
                height: "30px",
                borderRadius: "5px",
                fontSize: "14px",
                border: "none", // Remove border
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none", // Remove border in outlined variant
                },
                "&:focus": {
                  outline: "none", // Remove focus outline
                  "& .MuiOutlinedInput-notchedOutline": {
                    border: "none", // Remove border on focus
                  },
                },
              }}
              variant="outlined" // Use outlined variant for better control
            >
              <MenuItem value="incoming_call">Incoming call</MenuItem>
              <MenuItem value="outgoing call">Outgoing call</MenuItem>
            </Select>
          </div>

          <div className="text-[14px] mt-2 w-full">
            <div className="mb-1">Call Mode</div>
            <Select
             value={call.mode}
             onChange={(e)=> {
                 setCall({...call, mode:e.target.value})
             }}
              sx={{
                
                bgcolor: "#e5e5e5",
                width: "100%",
                height: "30px",
                borderRadius: "5px",
                fontSize: "14px",
                border: "none", // Remove border
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none", // Remove border in outlined variant
                },
                "&:focus": {
                  outline: "none", // Remove focus outline
                  "& .MuiOutlinedInput-notchedOutline": {
                    border: "none", // Remove border on focus
                  },
                },
              }}
              variant="outlined" // Use outlined variant for better control
            >
              <MenuItem value="answered">Answered</MenuItem>
              <MenuItem value="missed">Missed</MenuItem>
            </Select>
          </div>

        
        </div>

        <div className="text-[14px] mt-2 w-full">
            <div className="mb-1">Call Sub Type</div>
            <Select
             value={call.subtype}
             onChange={(e)=> {
                 setCall({...call, subtype:e.target.value})
             }}
              sx={{
                
                bgcolor: "#e5e5e5",
                width: "100%",
                height: "30px",
                borderRadius: "5px",
                fontSize: "14px",
                border: "none", // Remove border
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none", // Remove border in outlined variant
                },
                "&:focus": {
                  outline: "none", // Remove focus outline
                  "& .MuiOutlinedInput-notchedOutline": {
                    border: "none", // Remove border on focus
                  },
                },
              }}
              variant="outlined" // Use outlined variant for better control
            >
              <MenuItem value="mobile">Mobile</MenuItem>
              <MenuItem value="WA Business Call">Whatsapp Business</MenuItem>
            </Select>
          </div>

        <div>
         {calls && calls.length < 3 ? (
             <Button
             sx={{
               textTransform: "none",
               width: "100%",
               mt: 4,
               bgcolor: "black",
               color: "white",
             }}
 
             onClick={addCall}
           >
             Add Call
           </Button>
         ): (
            <div className="text-center text-[13px] mt-2"> 
            You've exceeded the 3 calls limit , delete a call.
            </div>
         )}
        </div>
      </div>
    </Dialog>
  );
};

export default CreateCallDialog;
