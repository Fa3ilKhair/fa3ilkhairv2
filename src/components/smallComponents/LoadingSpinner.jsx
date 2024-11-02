// src/components/LoadingSpinner.js
import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="loading-spinner">
        <div className="disk"></div>
        <div className="disk"></div>
        <div className="disk"></div>
      </div>
      <style jsx>{`
        .loading-spinner {
          display: flex;
          justify-content: space-between;
          width: 50px;
        }
        .disk {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #333;
          animation: spin 0.6s infinite alternate;
        }
        .disk:nth-child(2) {
          animation-delay: 0.2s;
        }
        .disk:nth-child(3) {
          animation-delay: 0.4s;
        }
        @keyframes spin {
          from {
            transform: translateY(0);
          }
          to {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </div>
  );
};

export default LoadingSpinner;
