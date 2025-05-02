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
        <li className='leading-4 mb-[15px] font-normal'>
        A complaint shall be first raised with the relevant TPAP in respect to all UPI related grievances / complaints of the end-user customers on-boarded by the PSP Bank / TPAP (if the UPI transaction is made through TPAP app). In case the complaint / grievance remains unresolved, the next level for escalation will be the PSP Bank, followed by the bank (where the end-user customer maintains its account) and NPCI, in the same order. After exercising these options, the end-user customer can approach the Banking Ombudsman and / or the Ombudsman for Digital Complaints, as the case may be.
          </li>
         
          <li className='leading-4 mb-[15px] font-normal'>
          The complaint can be raised for both the types of transactions i.e. fund transfer and merchant transactions
          </li>
          <li className='leading-4 mb-[15px] font-normal '>
            The end-user customer shall be kept communicated by the PSP / TPAP by
            means of updating the status of such end-user customer’s complaint on
            the relevant app itself
          </li>
        </ul>
      </div>

      {/* Main Form */}
      <h5 className="text-[22px] font-bold text-[#313131] px-2 mb-6 mt-4">Complaint</h5>

      <div className="px-3 mx-2 shadow-lg rounded-sm bg-white" style={{ boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
        {/* Section Header */}
        <div className="flex justify-between items-center">
          <h3 className="text-md mt-2 text-[#313131]">Transaction</h3>
          <div className="cursor-pointer text-[#27357E]">
            <FaMinus />
          </div>
        </div>

        <form className="space-y-6 mt-2" onSubmit={handleSubmit}>
          {/* Form fields */}
          <div className="flex flex-wrap gap-6">
            <div className="w-full md:w-1/2">
              <label className="block text-xs tracking-wide text-[#27357E]">Nature of transaction</label>
              <div className="w-full border-b border-gray-300">
                <div className="flex justify-between items-center">
                  <div className="text-md font-sm text-[#000000]">Person to Person</div>
                  <div className="text-xl"><MdOutlineKeyboardArrowDown /></div>
                </div>
              </div>
              <small className="text-xs italic text-[#313131]">
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
              <small className="text-xs italic text-[#313131]">
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
            <small className="text-xs italic text-[#313131]">
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
                <option value="lunawadaPeoplesCooperativeBank">The Lunawada peoples Cooperative Bank Ltd.</option>
            <option value="sharadSahakariBankLtdManchar">SHARAD SAHAKARI BANK LTD MANCHAR</option>
            <option value="aPMaheshCooperativeUrbanBankLtd">A P Mahesh Co-operative Urban Bank Ltd</option>
            <option value="abhyudayaCoopBankLtd">Abhyudaya Co-op Bank Ltd</option>
            <option value="adarshCooperativeBankLtd">Adarsh Cooperative Bank Ltd</option>
            <option value="adilabadDistrictCoopCentralBankLtd">Adilabad District Coop Central Bank Ltd</option>
            <option value="ahmednagarShaharSahakariBankLtd">Ahmednagar Shahar Sahakari Bank Ltd</option>
            <option value="airtelPaymentsBank">Airtel Payments Bank</option>
            <option value="ajantaUrbanCoOpBankLtd">Ajanta Urban Co-Op Bank ltd</option>
            <option value="akhandAnandCoopBankLtd">Akhand Anand Co.op Bank Ltd</option>
            <option value="akolaJanataCommercialCoOperativeBank">Akola Janata Commercial Co-Operative Bank</option>
            <option value="amazonPayIndiaPrivateLimited">Amazon Pay (India) Private Limited</option>
            <option value="ambajogaiPeoplesCooperativeBankLimited">Ambajogai Peoples Co-operative Bank Limited</option>
            <option value="ambarnathJaiHindCooperativeBankLtd">Ambarnath Jai Hind Cooperative Bank Ltd.</option>
            <option value="amreliJillaMadhyasthaSahakariBankLtd">Amreli Jilla Madhyastha Sahakari Bank Ltd</option>
            <option value="amreliNagarikSahakariBankLtd">Amreli Nagarik Sahakari Bank Ltd</option>
            <option value="andhraPradeshGraminVikasBank">Andhra pradesh gramin Vikas Bank</option>
            <option value="andhraPradeshStateCooperativeBank">Andhra Pradesh State Cooperative Bank</option>
            <option value="andhraPragathiGraminaBank">Andhra Pragathi Gramina Bank</option>
            <option value="apnaSahakariBankLtd">Apna Sahakari Bank Ltd</option>
            <option value="arihantUrbanCoOperativeBankLtd">Arihant Urban Co-Operative Bank Ltd</option>
            <option value="arunachalPradeshRuralBank">ARUNACHAL PRADESH RURAL BANK</option>
            <option value="arvindSahakariBankLtd">Arvind Sahakari Bank Ltd</option>
            <option value="aryavartBank">Aryavart Bank</option>
            <option value="assamGraminVikasBank">Assam Gramin Vikas Bank</option>
            <option value="associateCooperativeBankLimitedSurat">Associate Co-operative Bank Limited,Surat</option>
            <option value="auSmallFinanceBank">AU Small Finance Bank</option>
            <option value="axisBank">Axis Bank</option>
            <option value="bajajFinanceLimited">Bajaj Finance Limited</option>
            <option value="balasinorNagarikSahakariBankLtd">Balasinor Nagarik Sahakari Bank Ltd</option>
            <option value="balotraUrbanCoOperativeBankLtd">BALOTRA URBAN CO-OPERATIVE BANK LTD</option>
            <option value="bandhanBank">Bandhan Bank</option>
            <option value="bankOfAmericaNA">Bank of America NA</option>
            <option value="bankOfBaroda">Bank of Baroda</option>
            <option value="bankOfIndia">Bank of India</option>
            <option value="bankOfMaharashtra">Bank of Maharashtra</option>
            <option value="baranNagrikSahkariBankLtd">Baran Nagrik Sahkari Bank Ltd</option>
            <option value="barodaGujaratGraminBank">Baroda Gujarat Gramin Bank</option>
            <option value="barodaRajasthanKshetriyaGraminBank">Baroda Rajasthan Kshetriya Gramin Bank</option>
            <option value="barodaUttarPradeshGraminBank">Baroda Uttar Pradesh Gramin bank</option>
            <option value="basseinCatholicCooperativeBank">Bassein Catholic Co operative Bank</option>
            <option value="bhadradriCooperativeUrbanBank">Bhadradri Co-operative Urban Bank</option>
            <option value="bhaginiNiveditaSahakariBankLtdPune">Bhagini Nivedita Sahakari Bank Ltd,Pune</option>
            <option value="bharatCoopBankMumbai">Bharat Co-op Bank(mumbai)</option>
            <option value="bharuchDistrictCentralCooperativeBankLtd">Bharuch District Central Co-operative Bank Ltd</option>
            <option value="bhavnagarDistrictCoOpBankLtd">Bhavnagar District Co Op Bank Ltd</option>
            <option value="bhilwaraUrbanCooperativeBankLtd">Bhilwara Urban Co-operative Bank Ltd</option>
            <option value="bicholimUrbanCooperativeBank">Bicholim Urban Cooperative Bank</option>
            <option value="bombayMercantileCoOpBankLtd">Bombay Mercantile Co-Op Bank Ltd</option>
            <option value="canaraBank">Canara Bank</option>
            <option value="capitalSmallFinanceBank">Capital Small Finance Bank</option>
            <option value="catholicSyrianBank">Catholic Syrian Bank</option>
            <option value="centralBankOfIndia">Central Bank of India</option>
            <option value="chaitanyaGodavariGraminBank">Chaitanya Godavari Gramin Bank</option>
            <option value="charteredSahakariBankNiyamitha">Chartered Sahakari Bank Niyamitha</option>
            <option value="chennaiCentralCooperativeBankLtd">Chennai Central Co-operative Bank Ltd.</option>
            <option value="chhatisgarhRajyaGraminBank">Chhatisgarh Rajya Gramin Bank</option>
            <option value="chhattisgarhRajyaSahakariBankMydt">Chhattisgarh Rajya Sahakari Bank Mydt</option>
            <option value="chittorgarhUrbanCooperativeBankLtd">Chittorgarh Urban Co-operative Bank Ltd</option>
            <option value="citiBank">CITI Bank</option>
            <option value="citizenCooperativeBankLtdNoida">Citizen Co-operative Bank Ltd - Noida</option>
            <option value="citizensCooperativeBankLtd">Citizens Co-operative Bank Ltd</option>
            <option value="cityUnionBank">City Union Bank</option>
            <option value="coastalLocalAreaBankLtd">Coastal Local Area Bank Ltd</option>
            <option value="colourMerchantsCooperativeBankLtd">Colour Merchants Co-operative Bank Ltd</option>
            <option value="cosmosCoOpBank">Cosmos Co op Bank</option>
            <option value="dapoliUrbanCoOpBankLtd">Dapoli Urban Co Op Bank Ltd</option>
            <option value="dapoli">Dapoli</option>
            <option value="dattatrayaMaharajKalambeJaoliSahakari">Dattatraya Maharaj Kalambe Jaoli Sahakari</option>
            <option value="dausaUrbanCooperativeBankLtd">Dausa Urban Cooperative Bank Ltd</option>
            <option value="dbsDigibank">DBS Digibank</option>
            <option value="dcbBank">DCB Bank</option>
            <option value="deendayalNagariSahakariBankLtd">Deendayal Nagari Sahakari Bank Ltd</option>
            <option value="deogiriNagariSahakariBankLtdAurangabad">Deogiri Nagari Sahakari Bank Ltd Aurangabad</option>
            <option value="deutscheBank">Deutsche Bank</option>
            <option value="dhaneraMercantileCooperativeBankLtd">Dhanera Mercantile Co-operative Bank Ltd</option>
            <option value="dhanlaxmiBank">Dhanlaxmi Bank</option>
            <option value="dharmapuriDistrictCentralCoOpBankLimited">Dharmapuri District Central Co-Op Bank Limited</option>
            <option value="dhuleVikasSahakariBankLtd">Dhule Vikas Sahakari bank Ltd</option>
            <option value="dindigulCentralCoOperativeBankLtd">Dindigul Central Co-Operative Bank Ltd</option>
            <option value="districtCoopCentralBankLtdKhammam">District Coop Central Bank Ltd,Khammam</option>
            <option value="dombivliNagriSahakariBank">Dombivli Nagri Sahakari Bank</option>
            <option value="equitasSmallFinanceBank">Equitas small finance bank</option>
            <option value="erouteTechnologiesPrivateLimited">Eroute Technologies Private Limited</option>
            <option value="esafSmallFinanceBank">ESAF Small Finance Bank</option>
            <option value="federalBank">Federal Bank</option>
            <option value="fincareSmallFinanceBank">Fincare Small Finance Bank</option>
            <option value="fingrowthCooperativeBankLtd">Fingrowth Co-operative Bank Ltd</option>
            <option value="finoPaymentsBank">Fino Payments Bank</option>
            <option value="godavariUrbanCoOpBank">Godavari Urban Co-Op Bank</option>
            <option value="gpParsik">GP Parsik</option>
            <option value="gsMahanagarCoOpBankMAHANAGRBankInMainDataBank">GS Mahanagar Co op Bank(MAHANAGR BANK IN MAIN DATA BANK)</option>
            <option value="guardianSouhardaSahakariBankNiyamitha">Guardian Souharda Sahakari Bank Niyamita</option>
            <option value="gujaratAmbujaCooperativeBankLtd">Gujarat Ambuja Co-operative bank Ltd</option>
            <option value="gujaratStateCooperativeBank">Gujarat State Co-operative Bank</option>
            <option value="gunturUrbanBank">Guntur Urban Bank</option>
            <option value="hastiCoOpBank">Hasti Co op Bank</option>
            <option value="hdfcBank">HDFC Bank</option>
            <option value="himachalPradeshGraminBank">Himachal Pradesh Gramin Bank</option>
            <option value="himatnagarNagarikSahakariBankLtd">Himatnagar Nagarik Sahakari Bank Ltd</option>
            <option value="hsbc">HSBC</option>
            <option value="hutatmaCoOpBankLtd">Hutatma Co Op Bank Ltd</option>
            <option value="iciciBank">ICICI Bank</option>
            <option value="idbiBank">IDBI Bank</option>
            <option value="idfcBank">IDFC Bank</option>
            <option value="idfcFirstBankLimited">IDFC First Bank Limited</option>
            <option value="indiaPostPaymentsBank">India Post Payments Bank</option>
            <option value="indianBank">Indian Bank</option>
            <option value="indianOverseasBank">Indian Overseas Bank</option>
            <option value="indoreClothMarketCoOpBankLtd">Indore Cloth Market Co-Op Bank Ltd</option>
            <option value="indoreParasparSahakariBankLtd">Indore Paraspar Sahakari Bank Ltd</option>
            <option value="indorePremierCoOperativeBankLtd">Indore Premier Co-operative Bank Ltd</option>
            <option value="indoreIndrayaniCoOperativeBankLtd">Indore Indrayani Co-operative Bank Ltd</option>
            <option value="indusIndBank">IndusInd Bank</option>
            <option value="irinjalakudaTownCoOperativeBankLtd">Irinjalakuda Town Co-Operative Bank Ltd</option>
            <option value="jKGrameenBank">J & K Grameen Bank</option>
            <option value="jalgaonJantaCoOpBank">Jalgaon Janta co op Bank</option>
            <option value="jalnaMerchantsCooperativeBankLtdJalna">Merchant's Cooperative Bank Ltd., Jalna</option>
            <option value="jaloreNagrikSahakariBankLtd">Jalore Nagrik Sahakari Bank Ltd</option>
            <option value="jammuKashmirBank">Jammu & Kashmir bank</option>
            <option value="janaSmallFinanceBank">Jana Small Finance Bank</option>
            <option value="janakalyanSahakariBank">Janakalyan Sahakari Bank</option>
            <option value="janasevaSahakariBankLtdPune">Janaseva Sahakari Bank Ltd Pune</option>
            <option value="janataSahakariBankLtdAjara">Janata Sahakari Bank Ltd., Ajara</option>
            <option value="janathaSevaCooperativeBankLtd">JANATHA SEVA COOPERATIVE BANK LTD</option>
            <option value="jantaSahakariBankPune">Janta Sahakari Bank Pune</option>
            <option value="jharkhandRajyaGraminBank">Jharkhand Rajya Gramin Bank</option>
            <option value="jijamataMahilaSahakariBankLtd">Jijamata Mahila Sahakari Bank Ltd</option>
            <option value="jilaSahakariKendriyaBankMaryaditRaipur">Jila Sahakari Kendriya Bank Maryadit Raipur</option>
            <option value="jilaSahakariKendriyaBankMydtDurg">Jila Sahakari Kendriya Bank Mydt. Durg</option>
            <option value="jilaSahkariKendriyaBankMaryaditKhargone">JILA SAHKARI KENDRIYA BANK MARYADIT KHARGONE</option>
            <option value="jioPaymentsBank">Jio Payments Bank</option>
            <option value="jivanCommercialCoOperativeBankLtd">Jivan Commercial Co-operative Bank Ltd</option>
            <option value="jodhpurNagrikSahakariBankLimited">Jodhpur Nagrik Sahakari Bank Limited</option>
            <option value="kallapannaArwadeIchalkaranjiJanataSahakariBank">Kallapanna Arwade Ichalkaranji Janata sahakari Bank</option>
            <option value="kalupurCommercialBank">Kalupur Commercial Bank</option>
            <option value="kalyanJantaSahakariKankariaMainagarNagrikSahakariBankLtd">Kalyan Janta Sahakari Kankaria Mainagar Nagrik Sahakari Bank Ltd</option>
            <option value="karimnagarDCCB">Karimnagar DCCB</option>
            <option value="karnatakaBank">Karnataka Bank</option>
            <option value="karnatakaMahilaSahakaraBankNiyamitha">Karnataka Mahila Sahakara Bank Niyamitha</option>
            <option value="karnatakaVikasGraminaBank">Karnataka Vikas Gramina Bank</option>
            <option value="karurVysyaBank">Karur vysya Bank</option>
            <option value="kashmirMercantileCooperativeBankLtd">Kashmir Mercantile Cooperative Bank Ltd.</option>
            <option value="keralaGraminaBank">Kerala Gramina Bank</option>
            <option value="keralaStateCooperativeBankLtd">Kerala State Co-operative Bank Ltd</option>
            <option value="khattriCoOpBank">Khattri Co-op Bank</option>
            <option value="kokanMerchantileCooperativeBankLtd">Kokan Merchantile Co-operative Bank Ltd</option>
            <option value="kolhapurDistrictCentralCooperativeBankLimited">Kolhapur District Central Co-operative Bank Limited</option>
            <option value="kolhapurMahilaSahakariBankLtd">Kolhapur Mahila Sahakari Bank Ltd.</option>
            <option value="kotakMahindraBank">Kotak Mahindra Bank</option>
            <option value="kottakkalCoOpUrbanBankLtd">Kottakkal Co- Op Urban Bank Ltd</option>
            <option value="kottayamCoOperativeUrbanBankLtd">Kottayam Co-Operative Urban Bank Ltd</option>
            <option value="koyanaSahakariBankLtdKarad">Koyana Sahakari bank Ltd, Karad</option>
            <option value="krishnaBhimaSamruddhiLocalAreaBank">Krishna Bhima Samruddhi Local Area Bank</option>
            <option value="lalaUrbanCoOperativeBankLtd">Lala Urban Co-Operative Bank Ltd.</option>
            <option value="laxmiUrbanCoOpBankLtd">Laxmi Urban Co-Op. Bank Ltd.</option>
            <option value="latur">Latur.</option>
            <option value="livquikTechnologyIndiaPrivateLimited">LivQuik Technology (India) Private Limited</option>
            <option value="lokmangalCoOpBankLtdSolapur">LOKMANGAL CO OP BANK LTD SOLAPUR</option>
            <option value="lonavalaSahakariBankLtd">Lonavala Sahakari Bank Ltd</option>
            <option value="mSCoOperativeBankLimited">M.S. Co-Operative Bank Limited.</option>
            <option value="madhyaBiharGraminBankDakshinBiharGraminBank">Madhya Bihar Gramin Bank(Dakshin Bihar Gramin Bank )</option>
            <option value="madhyaPradeshRajyaSahakariBankMaryadit">Madhya Pradesh Rajya Sahakari Bank Maryadit</option>
            <option value="maduraiDistrictCentralCooperativeBank">Madurai District Central Cooperative Bank</option>
            <option value="mahanagarNagrikSahakariBankMaryadit">Mahanagar Nagrik Sahakari Bank Maryadit</option>
            <option value="maharashtraGraminBank">Maharashtra Gramin Bank</option>
            <option value="maharashtraStateCooperativeBank">Maharashtra State Cooperative Bank</option>
            <option value="mahatmaFuleUrbanCoOperativeBankLtd">Mahatma Fule Urban Co-Operative Bank Ltd.</option>
            <option value="mahaveerCoOperativeUrbanBankLimited">MAHAVEER CO-OPERATIVE URBAN BANK LIMITED</option>
            <option value="maheshSahakariBankLimited">Mahesh Sahakari Bank Limited</option>
            <option value="maheshUrbanCoOperativeBankParbhani">Mahesh Urban Co-operative Bank, Parbhani</option>
            <option value="mahilaNagrikSahakariBankMahasamund">Mahila Nagrik Sahakari Bank, Mahasamund</option>
            <option value="malviyaUrbanCoOperativeBankLimited">Malviya Urban Co-operative Bank Limited</option>
            <option value="manipurGraminBank">Manipur Gramin Bank</option>
            <option value="mannDeshiMahilaSahkariBankLimited">Mann Deshi Mahila Sahkari Bank Limited</option>
            <option value="mansingCoOperativeBankLtd">Mansing Co-operative Bank Ltd.</option>
            <option value="manviPattanaSouhardaSahakariBankNiyamitha">Manvi Pattana Souharda Sahakari Bank Niyamitha</option>
            <option value="marathaCooprativeBankLtd">Maratha Cooprative Bank Ltd</option>
            <option value="meghalayaRuralBank">Meghalaya Rural Bank</option>
            <option value="mehasanaUrbanCoOpBank">Mehasana Urban co op Bank</option>
            <option value="mizoramCoOperativeApexBankLtd">Mizoram Co-Operative Apex Bank Ltd</option>
            <option value="mizoramGraminBank">Mizoram Gramin Bank</option>
            <option value="modelCoOperativeBankLimited">Model Co-operative Bank Limited</option>
            <option value="muzaffarnagarDistrictCooperativeBankLtd">Muzaffarnagar District Cooperative Bank Ltd</option>
            <option value="nagarikSahakariBankMaryaditVidisha">Nagarik Sahakari Bank Maryadit, Vidisha</option>
            <option value="nagrikSahakariBankMaryaditGwalior">Nagrik Sahakari Bank Maryadit Gwalior</option>
            <option value="nainitalBankLtd">Nainital Bank Ltd</option>
            <option value="nalgondaDistrictCoopCentralBankLtd">Nalgonda District Coop Central Bank Ltd</option>
            <option value="nandaniSahakariBankLtd">Nandani Sahakari Bank Ltd.</option>
            <option value="naviMumbaiCoOperativeBankLimited">Navi Mumbai Co-operative Bank Limited</option>
            <option value="navsarjanIndustrialCoOpBankLtd">Navsarjan Industrial Co-Op Bank Ltd</option>
            <option value="nkgsbCoOpBank">NKGSB Co op Bank</option>
            <option value="northEastSmallFinanceBankLimited">North East Small Finance Bank Limited</option>
            <option value="nsdlPaymentsBank">NSDL Payments Bank</option>
            <option value="nutanNagrikSahakariBank">Nutan NagrikSahakari Bank</option>
            <option value="oneMobikwikSystemsPrivateLimited">One Mobikwik Systems Private Limited</option>
            <option value="paliUrbanCoOperativeBankLtd">Pali Urban Co-operative Bank Ltd</option>
            <option value="palusSahakariBankLtd">Palus Sahakari Bank Ltd</option>
            <option value="paschimBangaGraminBank">Paschim Banga Gramin Bank</option>
            <option value="patanNagrikSahakariBank">Patan Nagrik Sahakari Bank</option>
            <option value="paytmPaymentsBank">Paytm Payments Bank</option>
            <option value="pdpBankKaradBank">PDP BANK KARAD bank</option>
            <option value="peoplesUrbanCoOperativeBankLtd">People's Urban Co-operative Bank Ltd</option>
            <option value="pinelabsPrivateLimited">PineLabs Private Limited</option>
            <option value="poornawadiNagrikSahakariBankMBEED">POORNAWADI NAGRIK SAHAKARI BANK M.BEED.</option>
            <option value="pragathiKrishnaGraminBank">Pragathi Krishna Gramin Bank</option>
            <option value="prathamaUPGraminBank">Prathama UP Gramin Bank</option>
            <option value="preranaCoOperativeBankLtd">Prerana Co-Operative Bank Ltd</option>
            <option value="primeCoOperativeBankLtd">Prime Co-operative Bank Ltd.</option>
            <option value="priyadarshiniNagariSahakariBankLtdJalna">Priyadarshini Nagari Sahakari Bank Ltd Jalna</option>
            <option value="puneCantonmentSahakariBankLtd">Pune Cantonment Sahakari Bank Ltd</option>
            <option value="punePeoplesCoOpBankLtd">PUNE PEOPLES CO-OP.BANK LTD.td</option>
            <option value="puneUrbanCoOperativeBankLtd">Pune Urban Co-operative Bank Ltd</option>
            <option value="punjabSindBank">Punjab &amp; Sind Bank</option>
            <option value="punjabGraminBank">Punjab Gramin Bank</option>
            <option value="punjabNationalBank">Punjab National Bank</option>
            <option value="pusadUrbanCooperativeBankLtd">Pusad Urban Cooperative Bank Ltd</option>
            <option value="rajadhaniCoOperativeUrbanBankLtd">Rajadhani Co-operative Urban Bank LTD</option>
            <option value="rajarambapuSahakariBankLtd">Rajarambapu Sahakari Bank Ltd</option>
            <option value="rajarshiShahuSahakariBankLimited">Rajarshi Shahu Sahakari Bank Limited</option>
            <option value="rajasthanMarudharGraminBank">Rajasthan Marudhar Gramin Bank</option>
            <option value="rajeVikramsinhGhatgeCoOpBankLtd">Raje Vikramsinh Ghatge Co-Op. Bank Ltd.</option>
            <option value="kagalRajgurunagarSahakariBankLtd">Kagal Rajgurunagar Sahakari Bank Ltd.</option>
            <option value="rajkotNagrikSahakariBank">Rajkot Nagrik sahakari Bank</option>
            <option value="rajkotPeoplesCooperativeBankLtd">Rajkot Peoples Cooperative Bank Ltd</option>
            <option value="raniChannammaMahilaSahakariBankBelagavi">Rani Channamma Mahila Sahakari Bank Belagavi</option>
            <option value="rblBank">RBL Bank</option>
            <option value="sadhanaSahakariBankLtdPune">Sadhana Sahakari Bank Ltd Pune</option>
            <option value="sadhanaSahakariBankLtdNagpur">Sadhana Sahakari Bank Ltd. Nagpur</option>
            <option value="saibabaNagariSahakariBankMaryadit">Saibaba Nagari Sahakari Bank Maryadit</option>
            <option value="samarthSahakariBankLimited">Samarth Sahakari Bank Limited</option>
            <option value="samataCoOperativeDevelopmentBankLtd">Samata Co-Operative Development Bank Ltd</option>
            <option value="samataSahakariBankLtd">SAMATA SAHAKARI BANK LTD</option>
            <option value="sampadaSahakariBankLtdPune">Sampada Sahakari Bank Ltd.,Pune</option>
            <option value="samruddhiCoOperativeBankLtd">Samruddhi Co-operative Bank Ltd</option>
            <option value="sandurPattanaSouhardaSahakariBank">Sandur Pattana Souharda Sahakari Bank</option>
            <option value="santSopankakaSahakariBankLtd">Sant Sopankaka Sahakari Bank Ltd</option>
            <option value="sarakariNaukararaSahakariBankNiyamitVijayapura">Sarakari Naukarara Sahakari Bank Niyamit Vijayapura</option>
            <option value="saraspurNagrikCoOperativeBankLtd">Saraspur Nagrik Co-operative Bank Ltd</option>
            <option value="saraswatBank">Saraswat Bank</option>
            <option value="sardarVallabhbhaiSahakariBankLtd">Sardar Vallabhbhai Sahakari Bank Ltd</option>
            <option value="sarvaHaryanaGraminBank">Sarva Haryana Gramin Bank</option>
            <option value="sarvodayaCommercialCoOperativeBank">Sarvodaya Commercial Co-operative Bank</option>
            <option value="saurashtraGraminBankLtdAhmedabad">Saurashtra Gramin Bank Ltd., Ahmedabad</option>
            <option value="shahadaPeoplesCoopBankLtd">Shahada Peoples Coop Bank Ltd</option>
            <option value="sirsiUrbanSahakariBankLimited">Sirsi Urban Sahakari Bank Limited</option>
            <option value="sivagangaiDistrictCentralCoopBankLtd">Sivagangai District Central Coop Bank Ltd.</option>
            <option value="sskCoOpBank">SSK Co-op Bank</option>
            <option value="suratDistrictCoOpBankLtd">Surat District Co-op Bank Ltd.</option>
            <option value="suratMercantileCoopBankLtd">Surat Mercantile Coop Bank Ltd</option>
            <option value="suratPeoplesCoOpBank">Surat Peoples Co op Bank</option>
            <option value="sutexCoOpBank">Sutex Co Op Bank</option>
            <option value="thaneDistCentralCoOpBankLtd">Thane Dist. Central Co-op. Bank Ltd</option>
            <option value="thanjavurCentralCooperativeBankLtd">Thanjavur Central Cooperative Bank Ltd.</option>
            <option value="thoothukudiDistrictCentralCoOpBankLimited">Thoothukudi District Central Co-Op Bank Limited</option>
            <option value="tiruchirapalliDistCentCooperativeBankLtd">Tiruchirapalli Dist. Cent Cooperative Bank Ltd</option>
            <option value="tirunelveliDistrictCentralCoOpBankLtd">Tirunelveli District Central Co-Op Bank Ltd</option>
            <option value="tiruvannamalaiDistrictCentralCoopBankLimited">Tiruvannamalai District Central Coop Bank Limited</option>
            <option value="udaipurMahilaSamridhiUrbanCoOperativeBankLtd">Udaipur Mahila Samridhi Urban Co-operative Bank Ltd.</option>
            <option value="udaipurMahilaUrbanCoOperativeBankLtd">Udaipur Mahila Urban Co-Operative Bank Ltd.</option>
            <option value="udaipurUrbanCoOperativeBankLtd">Udaipur Urban Co-Operative Bank Ltd.</option>
            <option value="udupiCoOperativeTownBankLtdUdupi">Udupi Co-operative Town Bank Ltd - Udupi</option>
            <option value="uttarsandaPeoplesCoopBankLtd">Uttarsanda Peoples Coop Bank Ltd</option>
            <option value="vallabhVidyanagarCommercialCoOperativeBankLtd">Vallabh Vidyanagar Commercial Co-operative Bank Ltd</option>
            <option value="valsadDistrictCentralCoOperativeBankLtd">Valsad District Central Co-operative Bank Ltd</option>
            <option value="varanchhaCoOpBankLtd"></option>
              </select>
              <MdOutlineKeyboardArrowDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-700 text-xl pointer-events-none" />
            </div>
            <small className="text-xs italic text-[#313131]">Select your bank from the dropdown</small>
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
            <p className="text-sm italic text-[#313131]">
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
            <small className="text-xs italic text-[#313131]">Use the calendar to select the date</small>
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
            <small className="text-xs italic text-[#313131]">Enter your email ID</small>
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
