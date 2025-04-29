'use client'; // This marks the file as a client component

import React, { useState } from 'react';
import { FaMinus } from "react-icons/fa";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";


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
    <div className="max-w-4xl mx-auto p-3 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Complaint</h2>

<div className='px-3 shadow-lg rounded-sm bg-white' style={{ boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>




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
  font- text-purple-900 ">Nature of transaction</label>
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
