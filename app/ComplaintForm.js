'use client'
import React, { useState } from 'react';
import './layout.js';
import {
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaBars,
  FaSearch,
  FaPlus
} from 'react-icons/fa';
import { ImCross } from 'react-icons/im';

export default function NPCIUI() {
  const [showPopup, setShowPopup] = useState(true);

  return (
    <div className="font-montserrat tracking-wide bg-white min-h-screen">
     

      {/* Popup */}
      {showPopup && (
        <div className="fixed pt-3 pb-[500px] inset-x-0 top-0 flex justify-center z-50 bg-black/20">
         
          <div className="relative bg-white shadow-lg rounded-md p-4 w-[360px] max-w-md text-[15px] leading-relaxed">
            {/* Close button */}
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
            >
              <ImCross className='text-gray-400' size={14} />
            </button>

            {/* Popup content */}
           
            <p className="mb-2">
              Complaint already lodged with CURN (Complaint Unique Reference Number) <br />
              <strong>CN52151511249.</strong>
            </p>
            <p>
              Please be informed that transaction details provided by you are incorrect/not matching. We
              request to check the TXN details properly and raise the complaint again or try again after
              24 hours.
            </p>
           
            
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="p-5 text-center mt-19">
        <input
          type="email"
          placeholder="Please enter your Email ID"
          className="w-full max-w-md p-2 border border-gray-300 rounded mb-4 text-sm"
        />
        <br />
        <button className="bg-white text-[#1f2c61] border border-[#1f2c61] px-6 py-2 rounded text-sm font-medium mb-4 hover:bg-[#1f2c61] hover:text-white transition">
          Submit
        </button>
        <div className="text-sm mb-3 pb-4 tracking-wide font-[Montserrat,sans-serif]">
          <span className="font-bold">Note:</span>Please Ensure contact details provided are correct before submitting
        </div>

        {/* Non-Transaction Section */}
        <div className="bg-white shadow-md px-3 py-2 w-[350px] flex justify-between  rounded-sm" style={{ boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
        <span className="text-black tracking-wide  text-md">Non-Transaction</span>
        <FaPlus className="text-[#27357E] cursor-pointer" />
      </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-50   border-gray-300 mt-3 pb-11 p-5 text-sm text-gray-500 font-[Montserrat,sans-serif]">
        <div className="flex flex-wrap justify-between">
          <div>
            <p className='mt-2'>Disclaimer</p>
            <p className='mt-2'>Privacy Policy</p>
            <p className='mt-2'>Site Map</p>
            <p className='mt-2'>Tenders & Notices</p>
            <p className='mt-2'>NPS</p>
          </div>
          <div>
            <p className='mt-2'>Work With Us</p>
            <p className='mt-2'>Events And Awards</p>
            <p className='mt-2' >Blog</p>
          <div>
            <p className="font-semibold mt-4 text-gray-400 mt-2">FOLLOW US</p>
            <div className="flex text-[20px] w-[100px] text-gray-400 gap-3 flex-wrap mt-1">
              <FaTwitter />
              <FaFacebookF />
              <FaLinkedinIn  /> 
              
              <FaInstagram />
              <FaYoutube />
              
            
            </div>
          </div>
          </div>
         
        </div>
        <div className="mt-11 text-xs ">
          Corporate Identity Number (CIN): U74990MH2008NPL189067 <br />
          © 2025 NPCI. All rights reserved
        </div>
      </footer>
    </div>
  );
}
