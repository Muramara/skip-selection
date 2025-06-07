import React, { useState } from 'react';
import { ChevronRight, Truck, Calendar, PoundSterling, Shield, CheckCircle, Info, X } from 'lucide-react';

interface Skip {
  id: number;
  size: number;
  hire_period_days: number;
  transport_cost: number | null;
  per_tonne_cost: number | null;
  price_before_vat: number;
  vat: number;
  postcode: string;
  area: string;
  forbidden: boolean;
  created_at: string;
  updated_at: string;
  allowed_on_road: boolean;
  allows_heavy_waste: boolean;
}

const skipData: Skip[] = [
  {
    "id": 17933,
    "size": 4,
    "hire_period_days": 14,
    "transport_cost": null,
    "per_tonne_cost": null,
    "price_before_vat": 278,
    "vat": 20,
    "postcode": "NR32",
    "area": "",
    "forbidden": false,
    "created_at": "2025-04-03T13:51:46.897146",
    "updated_at": "2025-04-07T13:16:52.813",
    "allowed_on_road": true,
    "allows_heavy_waste": true
  },
  {
    "id": 17934,
    "size": 6,
    "hire_period_days": 14,
    "transport_cost": null,
    "per_tonne_cost": null,
    "price_before_vat": 305,
    "vat": 20,
    "postcode": "NR32",
    "area": "",
    "forbidden": false,
    "created_at": "2025-04-03T13:51:46.897146",
    "updated_at": "2025-04-07T13:16:52.992",
    "allowed_on_road": true,
    "allows_heavy_waste": true
  },
  {
    "id": 17935,
    "size": 8,
    "hire_period_days": 14,
    "transport_cost": null,
    "per_tonne_cost": null,
    "price_before_vat": 375,
    "vat": 20,
    "postcode": "NR32",
    "area": "",
    "forbidden": false,
    "created_at": "2025-04-03T13:51:46.897146",
    "updated_at": "2025-04-07T13:16:53.171",
    "allowed_on_road": true,
    "allows_heavy_waste": true
  },
  {
    "id": 17936,
    "size": 10,
    "hire_period_days": 14,
    "transport_cost": null,
    "per_tonne_cost": null,
    "price_before_vat": 400,
    "vat": 20,
    "postcode": "NR32",
    "area": "",
    "forbidden": false,
    "created_at": "2025-04-03T13:51:46.897146",
    "updated_at": "2025-04-07T13:16:53.339",
    "allowed_on_road": false,
    "allows_heavy_waste": false
  },
  {
    "id": 17937,
    "size": 12,
    "hire_period_days": 14,
    "transport_cost": null,
    "per_tonne_cost": null,
    "price_before_vat": 439,
    "vat": 20,
    "postcode": "NR32",
    "area": "",
    "forbidden": false,
    "created_at": "2025-04-03T13:51:46.897146",
    "updated_at": "2025-04-07T13:16:53.516",
    "allowed_on_road": false,
    "allows_heavy_waste": false
  },
  {
    "id": 17938,
    "size": 14,
    "hire_period_days": 14,
    "transport_cost": null,
    "per_tonne_cost": null,
    "price_before_vat": 470,
    "vat": 20,
    "postcode": "NR32",
    "area": "",
    "forbidden": false,
    "created_at": "2025-04-03T13:51:46.897146",
    "updated_at": "2025-04-07T13:16:53.69",
    "allowed_on_road": false,
    "allows_heavy_waste": false
  },
  {
    "id": 17939,
    "size": 16,
    "hire_period_days": 14,
    "transport_cost": null,
    "per_tonne_cost": null,
    "price_before_vat": 496,
    "vat": 20,
    "postcode": "NR32",
    "area": "",
    "forbidden": false,
    "created_at": "2025-04-03T13:51:46.897146",
    "updated_at": "2025-04-07T13:16:53.876",
    "allowed_on_road": false,
    "allows_heavy_waste": false
  },
  {
    "id": 15124,
    "size": 20,
    "hire_period_days": 14,
    "transport_cost": 248,
    "per_tonne_cost": 248,
    "price_before_vat": 992,
    "vat": 20,
    "postcode": "NR32",
    "area": "",
    "forbidden": false,
    "created_at": "2025-04-03T13:51:40.344435",
    "updated_at": "2025-04-07T13:16:52.434",
    "allowed_on_road": false,
    "allows_heavy_waste": true
  },
  {
    "id": 15125,
    "size": 40,
    "hire_period_days": 14,
    "transport_cost": 248,
    "per_tonne_cost": 248,
    "price_before_vat": 992,
    "vat": 20,
    "postcode": "NR32",
    "area": "",
    "forbidden": false,
    "created_at": "2025-04-03T13:51:40.344435",
    "updated_at": "2025-04-07T13:16:52.603",
    "allowed_on_road": false,
    "allows_heavy_waste": false
  }
];

interface SkipSelectionProps {
  selectedSkipId: number | null;
  onSkipSelect: (id: number) => void;
}

function SkipCard({ skip, isSelected, onSelect }: { 
  skip: Skip; 
  isSelected: boolean; 
  onSelect: (id: number) => void; 
}) {
  const totalPrice = Math.round(skip.price_before_vat * (1 + skip.vat / 100));

  return (
    <div 
      className={`bg-white rounded-xl shadow-lg border-2 cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 ${
        isSelected ? 'border-blue-500 ring-2 ring-blue-200' : 'border-gray-200 hover:border-gray-300'
      }`}
      onClick={() => onSelect(skip.id)}
    >
      {/* Skip Image */}
      <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-t-xl flex items-center justify-center relative overflow-hidden">
        <div className="text-center">
          {/* Simple skip representation */}
          <div 
            className={`mx-auto bg-orange-500 rounded-t-lg shadow-lg relative ${
              skip.size <= 6 ? 'w-20 h-12' : skip.size <= 12 ? 'w-24 h-14' : 'w-28 h-16'
            }`}
          >
            <div className="absolute inset-x-0 bottom-0 h-1 bg-orange-600 rounded-b-lg"></div>
            <div className="absolute top-1 left-1 right-1 h-1 bg-orange-400 rounded"></div>
          </div>
          <div className={`mx-auto mt-1 bg-gray-600 rounded ${
            skip.size <= 6 ? 'w-24 h-2' : skip.size <= 12 ? 'w-28 h-2' : 'w-32 h-3'
          }`}></div>
        </div>
        
        {/* Size badge */}
        <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full font-bold text-sm">
          {skip.size} Yard
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{skip.size} Yard Skip</h3>
          <p className="text-gray-600 text-sm">Perfect for medium-sized projects and home clearances</p>
        </div>

        {/* Details */}
        <div className="space-y-3 mb-6">
          <div className="flex items-center text-gray-700">
            <Calendar className="w-4 h-4 mr-2 text-blue-500" />
            <span className="text-sm">{skip.hire_period_days} day hire period</span>
          </div>
          
          <div className="flex items-center text-gray-700">
            <Truck className="w-4 h-4 mr-2 text-green-500" />
            <span className="text-sm">
              {skip.allowed_on_road ? 'Road placement allowed' : 'Private land only'}
            </span>
          </div>

          {skip.allows_heavy_waste && (
            <div className="flex items-center text-gray-700">
              <div className="w-4 h-4 mr-2 bg-purple-500 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <span className="text-sm">Heavy waste accepted</span>
            </div>
          )}
        </div>

        {/* Pricing */}
        <div className="mb-6">
          <div className="flex items-baseline gap-2 mb-1">
            <PoundSterling className="w-5 h-5 text-green-600" />
            <span className="text-2xl font-bold text-gray-900">{skip.price_before_vat}</span>
            <span className="text-sm text-gray-500">before VAT</span>
          </div>
          <p className="text-sm text-gray-600">
            £{totalPrice} inc. VAT ({skip.vat}%)
          </p>
        </div>

        {/* Select Button */}
        <button
          className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${
            isSelected
              ? 'bg-blue-500 text-white hover:bg-blue-600'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-300'
          }`}
          onClick={(e) => {
            e.stopPropagation();
            onSelect(skip.id);
          }}
        >
          {isSelected ? 'Selected' : 'Select this skip'}
          <ChevronRight className={`w-4 h-4 transition-transform ${
            isSelected ? 'rotate-90' : ''
          }`} />
        </button>
      </div>
    </div>
  );
}

export default function SkipSelection({ selectedSkipId, onSkipSelect }: SkipSelectionProps) {
  const handleCancelSelection = () => {
    if (selectedSkipId) {
      onSkipSelect(selectedSkipId); // This will toggle the selection off
    }
  };
  return (
    // <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
    //   {/* Page Header */}
    //   <div className="bg-white shadow-sm border-b">
    //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
    //       <div className="text-center">
    //         <h1 className="text-3xl font-bold text-gray-900 mb-2">Choose Your Skip Size</h1>
    //         <p className="text-gray-600 max-w-2xl mx-auto">
    //           Select the perfect skip for your waste management needs. All prices include delivery and collection within our service area.
    //         </p>
    //       </div>
    //     </div>
    //   </div>

    //   {/* Skip Cards Grid */}
    //   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    //       {skipData.map((skip) => (
    //         <SkipCard
    //           key={skip.id}
    //           skip={skip}
    //           isSelected={selectedSkipId === skip.id}
    //           onSelect={onSkipSelect}
    //         />
    //       ))}
    //     </div>

    //     {/* Selected Skip Summary */}
    //     {selectedSkipId && (() => {
    //       const selectedSkip = skipData.find(skip => skip.id === selectedSkipId);
    //       if (!selectedSkip) return null;

    //       const totalPrice = Math.round(selectedSkip.price_before_vat * (1 + selectedSkip.vat / 100));

    //       return (
    //         <div className="fixed bottom-0 left-0 w-full bg-white border-t border-blue-300 shadow-xl z-50 p-6">
    //           <h3 className="text-xl font-bold text-gray-900 mb-4">Your Selection</h3>
    //           <p className="text-sm text-gray-700 mb-4">
    //             Imagery and information shown throughout this website may not reflect the exact shape or size specification,
    //             colours may vary, options and/or accessories may be featured at additional cost.
    //           </p>
    //           <div className="flex items-center justify-between">
    //             <div>
    //               <p className="text-lg font-semibold text-gray-900">
    //                 {selectedSkip.size} Yard Skip
    //               </p>
    //               <p className="text-gray-600">
    //                 {selectedSkip.hire_period_days} day hire period
    //               </p>
    //             </div>
    //             <div className="text-right">
    //               <p className="text-2xl font-bold text-green-600">£{totalPrice}</p>
    //               <p className="text-sm text-gray-500">inc. VAT</p>
    //             </div>
    //           </div>

    //           <div className="flex justify-between mt-6">
    //             <button
    //               onClick={() => window.history.back()}
    //               className="px-6 py-2 bg-gray-200 text-gray-800 font-semibold rounded-md hover:bg-gray-300"
    //             >
    //               Back
    //             </button>
    //             <button
    //               onClick={() => window.location.href = '/next-page'} // 🔁 Replace with routing logic
    //               className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700"
    //             >
    //               Continue
    //             </button>
    //           </div>
    //         </div>
    //       );
    //     })()}

    //   </div>
    // </div>
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-blue-50">

  {/* 🔷 Hero Page Header */}
  <header className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-16 shadow-lg">
    <div className="max-w-4xl mx-auto px-6 text-center">
      <div className="mb-4">
        <svg className="mx-auto w-12 h-12 text-white opacity-80" fill="none" stroke="currentColor" strokeWidth="2"
             viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round"
                d="M4 16V8a2 2 0 012-2h1l2-3h6l2 3h1a2 2 0 012 2v8a2 2 0 01-2 2h-1l-2 3H9l-2-3H6a2 2 0 01-2-2z"/>
        </svg>
      </div>
      <h1 className="text-4xl font-extrabold mb-3">Select Your Skip</h1>
      <p className="text-lg text-blue-100 max-w-2xl mx-auto">
        Browse our range of skips and choose the one that fits your project. Transparent pricing, fast delivery.
      </p>
    </div>
  </header>

  {/* ♻️ Skip Cards Grid Section */}
  <main className="max-w-7xl mx-auto px-6 py-16">
    <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
      {skipData.map((skip) => {
        const totalPrice = Math.round(skip.price_before_vat * (1 + skip.vat / 100));
        const isSelected = selectedSkipId === skip.id;

        return (
          <div
            key={skip.id}
            className={`group relative bg-white border-2 rounded-2xl p-6 transition-shadow hover:shadow-xl cursor-pointer ${
              isSelected ? 'border-blue-600 ring-2 ring-blue-400' : 'border-gray-200'
            }`}
            onClick={() => onSkipSelect(skip.id)}
          >
            <div className="absolute top-4 right-4 bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-1 rounded-full">
              {skip.size} Yard
            </div>

            <h2 className="text-xl font-semibold text-gray-800 mb-2">{skip.size} Yard Skip</h2>
            {/* <p className="text-sm text-gray-600 mb-4">{skip.hire_period_days} day hire period</p> */}

            <div className="text-gray-900 font-bold text-xl mb-2">
              £{totalPrice} <span className="text-sm text-gray-500 font-normal">inc. VAT</span>
            </div>

            <p className="text-sm text-gray-500 mb-6">{skip.hire_period_days} day hire included</p>

            <button
              className={`w-full py-2 rounded-lg font-medium transition-colors ${
                isSelected
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {isSelected ? 'Selected' : 'Select'}
            </button>
          </div>
        );
      })}
    </div>
  </main>

  {/* ✅ Selected Skip Summary (bottom popup remains unchanged) */}
  {selectedSkipId && (() => {
    const selectedSkip = skipData.find(skip => skip.id === selectedSkipId);
    if (!selectedSkip) return null;

    const totalPrice = Math.round(selectedSkip.price_before_vat * (1 + selectedSkip.vat / 100));

    return (
          <div className="fixed bottom-0 left-0 w-full bg-white border-t-2 border-blue-200 shadow-2xl z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Your Selection</h3>
                    <p className="text-sm text-gray-600">Ready to proceed with your booking</p>
                  </div>
                </div>
                {/* Cancel Button */}
                <button
                  onClick={handleCancelSelection}
                  className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-all duration-200"
                  title="Cancel selection"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 mb-4">
                <p className="text-sm text-gray-700 flex items-start gap-2">
                  <Info className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  Imagery and information shown throughout this website may not reflect the exact shape or size specification,
                  colours may vary, options and/or accessories may be featured at additional cost.
                </p>
              </div>
              
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-10 bg-gradient-to-b from-orange-400 to-orange-600 rounded-t-lg relative">
                    <div className="absolute inset-x-0 bottom-0 h-1 bg-orange-700 rounded-b-lg"></div>
                  </div>
                  <div>
                    <p className="text-xl font-bold text-gray-900">
                      {selectedSkip.size} Yard Skip
                    </p>
                    <p className="text-gray-600 flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {selectedSkip.hire_period_days} day hire period
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold text-green-600">£{totalPrice}</p>
                  <p className="text-sm text-gray-500 font-medium">inc. VAT</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-between">
                <div className="flex gap-3">
                  <button
                    onClick={() => window.history.back()}
                    className="px-6 py-3 bg-gradient-to-r from-gray-200 to-gray-300 text-gray-800 font-semibold rounded-xl hover:from-gray-300 hover:to-gray-400 transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    <ChevronRight className="w-4 h-4 rotate-180" />
                    Back
                  </button>
                  <button
                    onClick={handleCancelSelection}
                    className="px-6 py-3 bg-gradient-to-r from-red-100 to-red-200 text-red-700 font-semibold rounded-xl hover:from-red-200 hover:to-red-300 transition-all duration-200 flex items-center justify-center gap-2 border border-red-300"
                  >
                    <X className="w-4 h-4" />
                    Cancel Selection
                  </button>
                </div>
                <button
                  onClick={() => window.location.href = '/next-page'}
                  className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 flex items-center justify-center gap-2 shadow-lg"
                >
                  Continue to Next Step
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        );
  })()}
</div>

  );
}