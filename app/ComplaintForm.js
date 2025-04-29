'use client'; // This marks the file as a client component

import React, { useState } from 'react';
import { FaMinus } from "react-icons/fa";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { BiMenuAltLeft } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import { GrRefresh } from "react-icons/gr";

function ComplaintForm() {
  const [formData, setFormData] = useState({
    natureOfTransaction: '',
    issueType: '',
    comments: '',
    bankName: '',
    transactionId: '',
    rupees: '',
    paisa: '',
    transactionDate: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
     <div>
      <div className='px-4 py-3 flex justify-between items-center'>
     <div>
      <img
        src="https://cdn-icons-png.flaticon.com/128/2438/2438078.png"
        alt="NCL Logo"
        className="h-4 object-contain "
      />
     </div>
     <div>
      Dispute Redressal Mechanis
     </div>
      <div>
      <GrRefresh />
      </div>
        

      </div>
<div className="w-full bg-[#1e1e1e] text-white text-xs px-4 py-1 flex gap-3 justify-end items-center">
  <span>Skip to main content</span>
  <div className="space-x-2">
    <button className="hover:underline">A+</button>
    <button className="hover:underline">A-</button>
    <button className="hover:underline">A</button>
  </div>
</div>

{/* Logo and menu bar */}
<div className="relative bg-[#707070] py-4 px-6 ">
  {/* Background Text - behind everything */}
  <p className="absolute inset-0 z-0 text-black px-6  pointer-events-none">
  <ul class="list-disc">
  <li>The end-user customer shall be kept communicated by the PSP / TPAP by means of updating the status of such end-user customer’s complaint on the relevant app itself</li>
  
</ul>
  </p>

  {/* Foreground Content - z-10 ensures it stays on top */}
  <div className="relative z-10 flex justify-between items-center gap-4">
    {/* Left Icon */}
    <div className="text-3xl text-white">
      <BiMenuAltLeft />
    </div>

    {/* Logos */}
    <div className="flex items-center ml-[-100px] gap-2">
      <img
        src="https://www.npci.org.in/images/npci/new-logo1.png"
        alt="NCL Logo"
        className="h-8 object-contain"
      />
      <img
        src="https://www.npci.org.in/images/npci/har-payment-digital-logo.png"
        alt="Har Payment Logo"
        className="h-8 object-contain"
      />
    </div>

    {/* Right Icon */}
    <div className="text-white text-xl">
      <FaSearch />
    </div>
  </div>
</div>





      <h2 className="text-2xl font-semibold text-gray-800 px-2 mb-6 mt-16">Complaint</h2>

<div className='px-3 mx-2 shadow-lg rounded-sm bg-white' style={{ boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>




      <div className=" flex justify-between items-center">
        <h3 className="text-md mt-2 text-gray-700">Transaction</h3>
        <div className="cursor-pointer ">
        <FaMinus />
        </div>
      </div>

      <form className="space-y-6 mt-2" onSubmit={handleSubmit}>
        <div className="flex flex-wrap gap-6">
          <div className="w-full md:w-1/2">
            <label className="block text-sm tracking-wider
  font- text-[#27357E] ">Nature of transaction</label>
            <div
              name="natureOfTransaction"
              value={formData.natureOfTransaction}
              onChange={handleChange}
              className="w-full  border-b border-gray-300 "
            >
              <div className=' flex justify-between items-center'>
               <div className='text-md'>Person to Person</div>
            <div className='text-xl'><MdOutlineKeyboardArrowDown /></div> 
              </div>
              
            </div>
            <small className="text-xs italic text-gray-500">Please select the Nature of Transaction from drop down list</small>
          </div>

          <div className="w-full md:w-1/2">
            <label className="block mt-[-19] text-sm tracking-wider
  font- text-purple-900">Issue</label>
            <div
              name="issueType"
              value={formData.issueType}
              onChange={handleChange}
              className="w-full  border-b border-blue-500 "
            >
               <div className=' flex justify-between items-center'>
               <div className='text-md'>Fraudulent transaction</div>
            <div className='text-xl'><MdOutlineKeyboardArrowDown /></div> 
              </div>
            </div>
            <small className="text-xs italic text-gray-500">Please select the issue from drop down list</small>
          </div>
        </div>

        <div className="w-full">
          <label className="block mt-[-19] text-sm tracking-wider
  font- text-purple-900">Comments</label>
          <textarea
            name="comments"
            rows="1"
            maxLength="500"
            placeholder=""
            value={formData.comments}
            onChange={handleChange}
            className="w-full  border-b border-gray-300"
          ></textarea>
                      <small className="text-xs italic text-gray-500">Provide brief about your issue. Not greater than 500 characters</small>
        </div>

        <div className="w-full">
          <label className="block mt-[-19] text-sm tracking-wider
  font- text-purple-900 ">Transaction ID</label>
          <input
            type="text"
            name="transactionId"
            placeholder=""
            value={formData.transactionId}
            onChange={handleChange}
            className="w-full  border-b border-gray-300"
          />
                      <small className="text-xs italic text-gray-500">Please enter your 12-digit transaction reference number. E.g. 500112345678</small>
        </div>


        <div className="w-full">
          <label className="block mt-[-19] text-sm tracking-wider
  font- text-purple-900">Bank Name</label>
          <select
            name="bankName"
            required
            value={formData.bankName}
            onChange={handleChange}
            className="w-full ml-[-3]  border-b border-gray-300 "
          >
            <option>--Select Bank Name--</option>
            <option>State Bank of India</option>
            <option>HDFC Bank</option>
            <option>ICICI Bank</option>
          </select>
          <small className="text-xs italic text-gray-500">Please select your bank from drop down list</small>
        </div>

     

        <div className="flex gap-6">
          <div className="w-full md:w-1/2">
            <label className="block mt-[-19] text-sm tracking-wider
  font- text-purple-900">Rupees</label>
            <input
              type="number"
              name="rupees"
              placeholder="Please capture rupee separately"
              value={formData.rupees}
              onChange={handleChange}
              className="w-full  border-b border-gray-300 "
            />
          </div>

          <div className="w-full md:w-1/2">
            <label className="block mt-[-19] text-sm tracking-wider
  font- text-purple-900">Paisa</label>
            <input
              type="number"
              name="paisa"
              placeholder="Please capture paisa separately"
              value={formData.paisa}
              onChange={handleChange}
              className="w-full border-b border-gray-300"
            />
          </div>
        </div>

        <div className="w-full">
          <label className="block mt-[-19] text-sm tracking-wider
  font- text-purple-900">Date of Transaction</label>
          <input
            type="date"
            name="transactionDate"
            value={formData.transactionDate}
            onChange={handleChange}
            className="w-full border-b border-gray-300 "
          />
          <small className="text-xs italic text-gray-500">Please use the calendar to select the date</small>
        </div>

        <div className="w-full">
          <label className="block mt-[-19] text-sm tracking-wider
  font- text-purple-900 ">Email ID</label>
          <input
            type="email"
            name="email"
            placeholder="Please enter your mail ID"
            value={formData.email}
            onChange={handleChange}
            className="w-full border-b border-gray-300 rounded-md "
          />
        </div>

        <div className="text-center mt-6">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </div>
      </form>
</div>

    </div>
    
  );
}

export default ComplaintForm;
