import React from 'react';
import Chart from './Chart';

const Dashboard = () => {
  return (
    <div className='flex flex-col py-12 px-14'>
        <h2 className="text-black  font-Satoshi text-2xl font-bold">
            Dashboard Page
        </h2>

        <div className="flex space-x-8">
            <div className="w-100 h-[150px] rounded  border border-gray-400 flex flex-col justify-center p-4 mt-5 text-gray-600 ">
                <span className='font-medium'>Sayan Ankur</span>
                <span className="text-gray-500 flex flex-col ">
                    Your Balance is $2500
                </span>
            </div>
            <div className="w-100 h-[150px] rounded  border  border-gray-400 flex flex-col justify-center p-4 mt-5 text-gray-600 ">
                <span className='font-medium'>Card Details:*******5676 </span>
                <span className="text-gray-500 flex flex-col ">
                    Your EXpances is $500
                </span>

            </div>
        </div>    


         <div className="text-black w-4/5 font-Satoshi text- font-bold flex mt-10 flex-col">
            Expanses Chart
            <Chart />
        </div> 

         <div className="flex space-x-8">
            <div className="w-100 h-[150px] rounded  border border-gray-400 flex flex-col justify-center p-4 mt-5 text-gray-600 ">
                <span className='font-medium'>Your Activity</span>
                <li className=" mt-4 mx-4 list-disc">
                    Sent Rs 10000 to Mother
                </li>
            </div>
            
            <div className="w-100 h-[150px] rounded  border  border-gray-400 flex flex-col justify-center p-4 mt-5 text-gray-600 ">
                <span className='font-medium'>Card Details:*******5676 </span>
                <li className=" mt-4 mx-4 list-disc">
                    Your EXpances is $500
                </li>
            </div>
        </div> 
    </div>


    


  )
}

export default Dashboard