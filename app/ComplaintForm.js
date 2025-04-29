'use client';

import React, { useState } from 'react';
import { FaMinus } from "react-icons/fa";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { BiMenuAltLeft } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import { ImCross } from "react-icons/im";

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

  const [showPopup, setShowPopup] = useState(false);
  const [curn, setCurn] = useState('');

  const generateCURN = () => {
    const randomDigits = Math.floor(1000000000 + Math.random() * 9000000000); // 10-digit number
    return `CN5${randomDigits}`;
  };

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

    const newCURN = generateCURN();
    setCurn(newCURN);

    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2000);
  };

  return (
    <div className="relative">

      {/* Popup */}
      {showPopup && (
        <>
          <div className="fixed inset-0 bg-black opacity-50 z-40"></div>
          <div className="fixed left-1/2 transform -translate-x-1/2 z-50 w-[370px] max-w-md bg-white text-black shadow-lg rounded-sm px-4 py-2 border border-gray-300">
           
           <div className='flex '>
             <p className="text-sm mt-2">
              We have lodged your complaint successfully.
              Please note your CURN (Complaint Unique Reference Number) is <strong>{curn}</strong>.
            </p>
           <div className='text-[#f0e9e9] mt-2'>
            <ImCross />
           </div>
            


           </div>
           
           
            <p className="text-sm mt-2">
              Please be informed that transaction details provided by you are incorrect/not matching.
              Please check the TXN details and try again after 24 hours.
            </p>
          </div>
        </>
      )}

      {/* Top bar */}
      <div className="w-full bg-[#1e1e1e] text-white text-xs px-4 py-1 flex gap-3 justify-end items-center">
        <span>Skip to main content</span>
        <div className="space-x-2">
          <button className="hover:underline">A+</button>
          <button className="hover:underline">A-</button>
          <button className="hover:underline">A</button>
        </div>
      </div>

      {/* Header */}
      <div className="relative bg-[#707070] py-4 px-6 ">
        <p className="absolute inset-0 z-0 text-black px-6 pointer-events-none">
          <ul className="list-disc">
            <li>The end-user customer shall be kept communicated by the PSP / TPAP by means of updating the status of such end-user customer’s complaint on the relevant app itself</li>
          </ul>
        </p>

        <div className="relative z-10 flex justify-between items-center gap-4">
          <div className="text-3xl text-white"><BiMenuAltLeft /></div>
          <div className="flex items-center ml-[-100px] gap-2">
            <img src="https://www.npci.org.in/images/npci/new-logo1.png" alt="NCL Logo" className="h-8 object-contain" />
            <img src="https://www.npci.org.in/images/npci/har-payment-digital-logo.png" alt="Har Payment Logo" className="h-8 object-contain" />
          </div>
          <div className="text-white text-xl"><FaSearch /></div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-800 px-2 mb-6 mt-16">Complaint</h2>

      <div className='px-3 mx-2 shadow-lg rounded-sm bg-white' style={{ boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
        <div className="flex justify-between items-center">
          <h3 className="text-md mt-2 text-gray-700">Transaction</h3>
          <div className="cursor-pointer">
            <FaMinus />
          </div>
        </div>

        <form className="space-y-6 mt-2" onSubmit={handleSubmit}>
          {/* Form fields */}
          <div className="flex flex-wrap gap-6">
            <div className="w-full md:w-1/2">
              <label className="block text-sm tracking-wider text-[#27357E]">Nature of transaction</label>
              <div className="w-full border-b border-gray-300">
                <div className='flex justify-between items-center'>
                  <div className='text-md'>Person to Person</div>
                  <div className='text-xl'><MdOutlineKeyboardArrowDown /></div>
                </div>
              </div>
              <small className="text-xs italic text-gray-500">Please select the Nature of Transaction</small>
            </div>

            <div className="w-full md:w-1/2">
              <label className="block text-sm tracking-wider text-[#27357E]">Issue</label>
              <div className="w-full border-b border-gray-300">
                <div className='flex justify-between items-center'>
                  <div className='text-md'>Fraudulent transaction</div>
                  <div className='text-xl'><MdOutlineKeyboardArrowDown /></div>
                </div>
              </div>
              <small className="text-xs italic text-gray-500">Please select the issue</small>
            </div>
          </div>

          <div className="w-full">
            <label className="block text-sm tracking-wider text-[#27357E]">Comments</label>
            <textarea
              name="comments"
              rows="1"
              maxLength="500"
              placeholder=""
              value={formData.comments}
              onChange={handleChange}
              className="w-full border-b border-gray-300"
            ></textarea>
            <small className="text-xs italic text-gray-500">Not greater than 500 characters</small>
          </div>

          <div className="w-full">
            <label className="block text-sm tracking-wider text-[#27357E]">Transaction ID</label>
            <input
              type="text"
              name="transactionId"
              value={formData.transactionId}
              onChange={handleChange}
              className="w-full border-b border-gray-300"
            />
            <small className="text-xs italic text-gray-500">E.g. 500112345678</small>
          </div>

          <div className="w-full">
            <label className="block text-sm tracking-wider text-[#27357E]">Bank Name</label>
            <select
              name="bankName"
              required
              value={formData.bankName}
              onChange={handleChange}
              className="w-full border-b border-gray-300"
            >
              <option>--Select Bank Name--</option>
              <option>State Bank of India</option>
              <option>HDFC Bank</option>
              <option>ICICI Bank</option>
            </select>
            <small className="text-xs italic text-gray-500">Please select your bank</small>
          </div>

          <div className="flex gap-6">
            <div className="w-full md:w-1/2">
              <label className="block text-sm tracking-wider text-[#27357E]">Rupees</label>
              <input
                type="number"
                name="rupees"
                value={formData.rupees}
                onChange={handleChange}
                className="w-full border-b border-gray-300"
              />
            </div>

            <div className="w-full md:w-1/2">
              <label className="block text-sm tracking-wider text-[#27357E]">Paisa</label>
              <input
                type="number"
                name="paisa"
                value={formData.paisa}
                onChange={handleChange}
                className="w-full border-b border-gray-300"
              />
            </div>
          </div>

          <div className="w-full">
            <label className="block text-sm tracking-wider text-[#27357E]">Date of Transaction</label>
            <input
              type="date"
              name="transactionDate"
              value={formData.transactionDate}
              onChange={handleChange}
              className="w-full border-b border-gray-300"
            />
          </div>

          <div className="w-full">
            <label className="block text-sm tracking-wider text-[#27357E]">Email ID</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border-b border-gray-300"
            />
          </div>

          <div className="text-center mt-6">
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
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
