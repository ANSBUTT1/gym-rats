import React, { useState } from 'react';
import { FaUserAlt, FaUsers, FaLaptop, FaChartBar, FaClipboardList } from 'react-icons/fa'; // Import specific icons

const TrainingRates = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const trainingPlans = [
    {
      id: 1,
      title: 'Personal Training',
      description: 'One-on-one personal sessions tailored to your fitness goals.',
      rate: '$60 per session',
      icon: <FaUserAlt className="h-6 w-6 text-green-400" />, // Icon for personal training
    },
    {
      id: 2,
      title: 'Group Training',
      description: 'Join group sessions for a motivating environment and support.',
      rate: '$30 per session',
      icon: <FaUsers className="h-6 w-6 text-blue-400" />, // Icon for group training
    },
    {
      id: 3,
      title: 'Online Training',
      description: 'Virtual training from anywhere with a customized workout plan.',
      rate: '$40 per session',
      icon: <FaLaptop className="h-6 w-6 text-yellow-400" />, // Icon for online training
    },
    {
      id: 4,
      title: 'Monthly Membership',
      description: 'Unlimited access to all group training classes for the month.',
      rate: '$250 per month',
      icon: <FaChartBar className="h-6 w-6 text-red-400" />, // Icon for membership
    },
    {
      id: 5,
      title: 'Fitness Assessment',
      description: 'Personalized fitness evaluation to track progress and set goals.',
      rate: '$50 per assessment',
      icon: <FaClipboardList className="h-6 w-6 text-purple-400" />, // Icon for assessment
    },
  ];

  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);
  };

  return (
    <div className="bg-fixed h-full px-16 bg-no-repeat py-16 w-full bg-cover" style={{ backgroundImage: "url(https://images.pexels.com/photos/669576/pexels-photo-669576.jpeg?auto=compress&cs=tinysrgb&w=600)" }}>
      <h1 className="text-4xl font-bold text-center mb-6 text-white">Gym Training Rates</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {trainingPlans.map((plan) => (
          <div
            key={plan.id}
            className="bg-black text-white p-6 rounded-lg shadow-md hover:bg-gray-800 cursor-pointer"
            onClick={() => handleSelectPlan(plan)}
          >
            <div className="flex items-center justify-center mb-4">
              {plan.icon}
            </div>
            <h3 className="text-2xl font-semibold text-center text-white">{plan.title}</h3>
            <p className="mt-2 text-white opacity-80">{plan.description}</p>
            <p className="mt-4 text-xl font-bold text-center text-green-400">{plan.rate}</p>
          </div>
        ))}
      </div>

      {selectedPlan && (
        <div className="mt-8 p-6 bg-black text-white rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-center">{selectedPlan.title}</h2>
          <p className="mt-2">{selectedPlan.description}</p>
          <p className="mt-4 text-xl font-bold text-center text-green-400">{selectedPlan.rate}</p>
          <div className="mt-6 flex justify-center">
            <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-700">
              Book Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TrainingRates;
