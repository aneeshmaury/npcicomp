'use client'

import { useState } from "react";

export default function SubmitForm() {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-md shadow-xl max-w-md text-sm">
            <p className="mb-2">
              We have lodged your complaint successfully. Please note your CURN
              (Complaint Unique Reference Number) is{" "}
              <strong>CN51183069646</strong>
            </p>
            <p className="text-gray-800">
              Please be informed that transaction details provided by you are
              incorrect/not matching. We request to check the TXN details
              properly and raise the complaint again or try again after 24
              hours.
            </p>
            <button
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              onClick={() => setShowPopup(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-4 rounded shadow max-w-md mx-auto space-y-3"
      >
        <input
          type="number"
          placeholder="Rupees"
          className="border px-3 py-2 w-full rounded"
        />
        <input
          type="text"
          placeholder="Date of Transaction"
          className="border px-3 py-2 w-full rounded"
        />
        <input
          type="email"
          placeholder="Email ID"
          className="border px-3 py-2 w-full rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
