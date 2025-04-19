import React from 'react';

export const CertificateCard: React.FC = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {[1, 2, 3, 4, 5, 6].map((i) => (
      <div key={i} className="bg-gray-700 rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300">
        <img
          src={`https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&w=400&h=300`}
          alt={`Certificate ${i}`}
          className="w-full h-40 object-cover rounded-lg mb-4"
        />
        <h3 className="text-xl font-bold mb-2">Dicoding Certificate {i}</h3>
        <p className="text-gray-300">Advanced Web Development</p>
      </div>
    ))}
  </div>
);