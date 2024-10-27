import { useState } from "react";

const faqs = [
  {
    question: "What is Fa3il Khair?",
    answer: "Fa3il Khair is an association dedicated to helping people through various projects and initiatives.",
  },
  {
    question: "How can I contribute to the projects?",
    answer: "You can contribute by donating, volunteering, or spreading the word about our initiatives.",
  },
  {
    question: "Are donations tax-deductible?",
    answer: "Yes, donations made to Fa3il Khair are tax-deductible as we are a registered non-profit organization.",
  },
  {
    question: "How can I get involved as a volunteer?",
    answer: "You can sign up on our website to join our volunteer programs and receive updates on upcoming projects.",
  },
  {
    question: "Where can I find information about past projects?",
    answer: "Information about our past projects can be found in the 'Projects' section of our website.",
  },
];

export default function MoreModalContent() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex items-center justify-center w-full h-full bg-gray-50 p-6">
      <div className="w-full g bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-300">
              <button className="w-full text-left py-4 flex justify-between items-center" onClick={() => toggleFAQ(index)}>
                <span className="font-semibold text-lg text-gray-800">{faq.question}</span>
                <span className={`transition-transform ${openIndex === index ? "rotate-180" : ""}`}>
                  <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </span>
              </button>
              {openIndex === index && (
                <div className="p-4 transition-all duration-300 ease-in-out">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
