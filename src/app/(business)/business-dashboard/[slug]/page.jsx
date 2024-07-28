'use client'
import React, { useState } from 'react';
import AnalyticsComponent from '@/components/helper/businessDashboard/AnalyticsComponent';
import ServicesComponent from '@/components/helper/businessDashboard/ServicesComponent';
import Image from 'next/image';

const Page = () => {
  const [activeTab, setActiveTab] = useState('analytics');

  const renderContent = () => {
    switch (activeTab) {
      case 'analytics':
        return <AnalyticsComponent />;
      case 'services':
        return <ServicesComponent/>;
      case 'account':
        return <div>Account Settings Content</div>;
      default:
        return null;
    }
  };

  return (
    <div className="flex h-full  justify-center items-center mt-10 px-4 md:px-0">
      <Image
        width={300}
        height={300}
        alt="bg"
        src={"/images/shadow-1.png"}
        className="absolute top-14 right-0 z-0 hidden md:block"
      />
      <div className="w-full max-w-[500px] flex flex-col items-center">
        <div className="h-14 rounded-full px-4 flex justify-center items-center w-full  space-x-5 bg-[#F6E9CE] m-auto">
          <button
            onClick={() => setActiveTab('analytics')}
            className={`rounded-full py-2 border-2 border-darkMahron w-full h-10 text-darkMahron transition-colors duration-300 ${
              activeTab === 'analytics' ? 'bg-darkMahron text-white' : ''
            }`}
          >
            Analytics
          </button>
          <button
            onClick={() => setActiveTab('services')}
            className={`rounded-full py-2 border-2 border-darkMahron w-full h-10 text-darkMahron transition-colors duration-300 ${
              activeTab === 'services' ? 'bg-darkMahron text-white' : ''
            }`}
          >
            Services
          </button>
          <button
            onClick={() => setActiveTab('account')}
            className={`rounded-full py-2 border-2 border-darkMahron w-full h-10 text-darkMahron transition-colors duration-300 ${
              activeTab === 'account' ? 'bg-darkMahron text-white' : ''
            }`}
          >
            Settings
          </button>
        </div>
        <div className="w-full md:min-w-[800px] lg:min-w-[900px] xl:min-w-[1100px] mt-5">
          {renderContent()}
         
        </div>
      </div>
      <Image
        width={300}
        height={300}
        alt="bg"
        src={"/images/shadow-2.png"}
        className="absolute bottom-0 left-0 z-0 hidden md:block"
      />
    </div>
  );
};

export default Page;
