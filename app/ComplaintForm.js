'use client'
import React, { useState } from 'react';
import './layout.js';
import {
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaPlus
} from 'react-icons/fa';
import { ImCross } from 'react-icons/im';

export default function NPCIUI() {
  const [showPopup, setShowPopup] = useState(true);

  return (
    <div className="font-Poppins min-h-screen">
      <div className="tracking-wide bg-white dark:bg-black min-h-screen">
        
        {/* Full Screen Background with darkened overlay */}
        {showPopup && (
          <div className="fixed inset-0 bg-black/30 dark:bg-black/60 z-40">
            {/* This ensures the background is darkened without blocking content */}
          </div>
        )}

        {/* Fixed Popup at the very Top and Centered horizontally */}
        {showPopup && (
          <div className="fixed top-0 left-1/2 transform -translate-x-1/2 flex justify-center z-50 bg-white dark:bg-gray-800 text-black dark:text-white shadow-lg rounded-md p-4 w-[370px] text-[17px]">
            {/* Close button */}
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-2 right-2 text-gray-600 dark:text-white hover:text-gray-800"
            >
              <ImCross className="text-gray-400" size={14} />
            </button>

            {/* Popup content */}
            <p className="tracking-wide">
              We have lodged your complaint successfully.<br />
              Please note your CURN (Complaint Unique Reference Number) is <span className='font-bold'>CN52094088995</span>.<br /><br />
              Please be informed that transaction details provided by you are incorrect/not matching.
              We request to check the TXN details properly and raise the complaint again or try again
              after 24 hours.
            </p>
          </div>
        )}

        {/* Non-Transaction Section */}
        <div className="fixed top-[calc(100%+10px)] left-1/2 transform -translate-x-1/2 w-[370px] bg-white dark:bg-gray-800 shadow-md px-3 py-2 rounded-sm">
          <span className="text-black dark:text-white tracking-wide text-md">Non-Transaction</span>
          <FaPlus className="text-[#27357E] dark:text-white cursor-pointer" />
        </div>

        {/* Footer */}
        <footer className="bg-gray-50 dark:bg-gray-900 text-gray-500 dark:text-gray-300 p-5 text-sm font-[Montserrat,sans-serif]">
          <div className="flex flex-wrap justify-between">
            <div>
              <p className="mt-2">Disclaimer</p>
              <p className="mt-2">Privacy Policy</p>
              <p className="mt-2">Site Map</p>
              <p className="mt-2">Tenders & Notices</p>
              <p className="mt-2">NPS</p>
            </div>
            <div>
              <p className="mt-2">Work With Us</p>
              <p className="mt-2">Events And Awards</p>
              <p className="mt-2">Blog</p>
              <div>
                <p className="font-semibold mt-4 text-gray-400">FOLLOW US</p>
                <div className="flex text-[20px] w-[100px] text-gray-400 gap-3 flex-wrap mt-1">
                  <FaTwitter />
                  <FaFacebookF />
                  <FaLinkedinIn />
                  <FaInstagram />
                  <FaYoutube />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-11 text-xs">
            Corporate Identity Number (CIN): U74990MH2008NPL189067 <br />
            © 2025 NPCI. All rights reserved
          </div>
        </footer>
      </div>
    </div>
  );
}
