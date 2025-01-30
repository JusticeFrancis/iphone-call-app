import { InfoOutlined, PhoneForwarded } from '@mui/icons-material'
import { Divider } from '@mui/material'
import React from 'react'

const Call = ({item}) => {
  return (
    <div className='mt-2'>
        <div className='pl-10'>
            <div  className='w-full border-b-[1px] border-[#e5e5e5]'></div>
        </div>

        <div className='px-4 '>
            <div className='flex items-start space-x-3 w-full'>
                <div>
                  {
                    item.type == 'incoming_call' ? (
                        <PhoneForwarded sx={{ color:'#d7d5d5', fontSize:'13px'}} />
                    ): (
                      <div className='mr-3'> </div>
                    )
                  }
                </div>

                <div className='flex items-center justify-between w-full'>
                    <div>
                        <div className={item.mode =='answered' ? 'text-[15px] font-semibold' : 'text-[15px] font-semibold text-red-600'} >{item.recipient} {item.count > 1 && `(${item.count})`} </div>
                        <div className='text-[13px] text-[#8f8d8d]' >mobile</div>
                    </div>

                    <div className='flex items-center space-x-3'>
                        <div className='text-[14px] text-[#8f8d8d]'>
                           {item.time}
                        </div>
                        <div>
                            <InfoOutlined sx={{ color:'#2563EB', fontSize:'20px' }}/>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    </div>
  )
}

export default Call