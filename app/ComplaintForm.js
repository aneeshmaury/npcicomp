'use client';

import React, { useState } from 'react';
import { FaMinus, FaPlus, FaSearch } from 'react-icons/fa';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { BiMenuAltLeft } from 'react-icons/bi';
import { ImCross } from 'react-icons/im';

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
    const randomDigits = Math.floor(1000000000 + Math.random() * 9000000000);
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
    setTimeout(() => setShowPopup(false), 3000);
  };

  return (
    <div className="relative">
      {/* Popup */}
      {showPopup && (
        <>
          <div className="fixed inset-0 bg-black opacity-50 z-40"></div>
          <div className="fixed left-1/2 top-20 transform -translate-x-1/2 z-50 w-[380px] max-w-md bg-white text-black shadow-lg rounded-sm px-4 py-2 border border-gray-300">
            <div className="flex justify-between">
              <p className="text-md mt-2">
                We have lodged your complaint successfully.
                Your CURN is <strong>{curn}</strong>.
              </p>
              <button onClick={() => setShowPopup(false)} className="text-red-500">
                <ImCross />
              </button>
            </div>
            <p className="text-md mt-2">
              Please be informed that transaction details provided by you are incorrect/not matching.
              Please check the TXN details and try again after 24 hours.
            </p>
          </div>
        </>
      )}

      {/* Fixed Top Bar */}
      <div className="fixed top-0 left-0 w-full z-50">
        <div className="w-full bg-[#1e1e1e] text-white text-xs px-4 py-1 flex gap-3 justify-end items-center">
          <span>Skip to main content</span>
          <div className="space-x-2">
            <button className="hover:underline">A+</button>
            <button className="hover:underline">A-</button>
            <button className="hover:underline text-md">A</button>
          </div>
        </div>
        <div className="bg-[#00000080] opacity py-4 px-6 relative">
          <div className="flex justify-between items-center gap-4 relative z-10">
            <div className="text-3xl text-white">
              <BiMenuAltLeft />
            </div>
            <div className="flex items-center ml-[-100px] gap-2">
              <img
                src="https://www.npci.org.in/images/npci/new-logo1.png"
                alt="NCL Logo"
                className="h-9 object-contain"
              />
              <img
                src="https://www.npci.org.in/images/npci/har-payment-digital-logo.png"
                alt="Har Payment Logo"
                className="h-9 object-contain"
              />
            </div>
            <div className="text-white text-xl">
              <FaSearch />
            </div>
          </div>
        </div>
      </div>

      {/* Scrollable Notice (NOT fixed) */}
      <div className="bg-white tracking-wider   px-7 py-2 mt-[96px]">
        <ul className="list-disc text-[14px] text-[#313131]">
        <li className='leading-4 mb-[15px]'>
        A complaint shall be first raised with the relevant TPAP in respect to all UPI related grievances / complaints of the end-user customers on-boarded by the PSP Bank / TPAP (if the UPI transaction is made through TPAP app). In case the complaint / grievance remains unresolved, the next level for escalation will be the PSP Bank, followed by the bank (where the end-user customer maintains its account) and NPCI, in the same order. After exercising these options, the end-user customer can approach the Banking Ombudsman and / or the Ombudsman for Digital Complaints, as the case may be.
          </li>
         
          <li className='leading-4 mb-[15px]'>
          The complaint can be raised for both the types of transactions i.e. fund transfer and merchant transactions
          </li>
          <li className='leading-4 mb-[15px]'>
            The end-user customer shall be kept communicated by the PSP / TPAP by
            means of updating the status of such end-user customer’s complaint on
            the relevant app itself
          </li>
        </ul>
      </div>

      {/* Main Form */}
      <h2 className="text-2xl font-semibold text-gray-800 px-2 mb-6 mt-4">Complaint</h2>

      <div className="px-3 mx-2 shadow-lg rounded-sm bg-white" style={{ boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
        {/* Section Header */}
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
                <div className="flex justify-between items-center">
                  <div className="text-md">Person to Person</div>
                  <div className="text-xl"><MdOutlineKeyboardArrowDown /></div>
                </div>
              </div>
              <small className="text-xs italic text-gray-500">
                Please select the Nature of Transaction from drop down list
              </small>
            </div>

            <div className="w-full md:w-1/2">
              <label className="block text-sm tracking-wider text-[#27357E]">Issue</label>
              <div className="w-full border-b border-gray-300">
                <div className="flex justify-between items-center">
                  <div className="text-md">Fraudulent transaction</div>
                  <div className="text-xl"><MdOutlineKeyboardArrowDown /></div>
                </div>
              </div>
              <small className="text-xs italic text-gray-500">
                Please select the issue from drop down list
              </small>
            </div>
          </div>

          {/* Other Fields */}
          <div className="w-full">
            <label className="block text-sm tracking-wider text-[#27357E]">Comments</label>
            <textarea
              name="comments"
              rows="3"
              maxLength="500"
              value={formData.comments}
              onChange={handleChange}
              className="w-full border-b border-gray-300"
            />
            <small className="text-xs italic text-[#313131]">
              Provide brief about your issue. Not greater than 500 characters
            </small>
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
            <small className="text-xs italic text-gray-500">
              Enter your 12-digit transaction reference number. E.g. 500112345678
            </small>
          </div>

          <div className="w-full">
            <label className="block text-sm tracking-wider text-[#27357E]">Bank Name</label>
            <div className="relative">
              <select
                name="bankName"
                value={formData.bankName}
                onChange={handleChange}
                className="w-full border-b border-gray-300 appearance-none pr-8"
              >
                <option>--Select Bank Name--</option>
                <option>State Bank of India</option>
                <option>HDFC Bank</option>
                <option>ICICI Bank</option>
              </select>
              <MdOutlineKeyboardArrowDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-700 text-xl pointer-events-none" />
            </div>
            <small className="text-xs italic text-gray-500">Select your bank from the dropdown</small>
          </div>

          <div className="flex flex-col gap-1">
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
            <p className="text-sm italic text-gray-600">
              Capture rupee & paise separately
            </p>
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
            <small className="text-xs italic text-gray-500">Use the calendar to select the date</small>
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
            <small className="text-xs italic text-gray-500">Enter your email ID</small>
          </div>

          <div className="text-center mt-9 pb-5">
            <button
              type="submit"
              className="px-9 py-1 bg-[#27357E] text-white hover:bg-blue-700"
            >
              Submit
            </button>
          </div>
        </form>

        <div className="text-sm mb-9 pb-4">
          <span className="font-bold">Note:</span> Ensure contact details provided are correct before submitting
        </div>
      </div>

      <div className="bg-white shadow-md px-3 py-3 mx-2 my-3 flex justify-between items-center rounded-sm" style={{ boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
        <span className="text-black text-md">Non-Transaction</span>
        <FaPlus className="text-[#27357E] cursor-pointer" />
      </div>
    </div>
  );
}

export default ComplaintForm;
