import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { submitFeedback } from '../services/api';

const FeedbackForm = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState('');
  const [rating, setRating] = useState(5);
  const [feedback, setFeedback] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!category || !feedback) {
      alert('Please fill in all fields');
      return;
    }

    setIsSubmitting(true);
    try {
      await submitFeedback({
        category,
        rating,
        comment: feedback
      });
      
      alert('Feedback submitted successfully!');
      navigate('/');
    } catch (error) {
      alert('Error submitting feedback. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-full mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-blue-700 mb-3">Share Your Feedback</h2>
          <p className="text-xl text-indigo-600">Help us improve our products with your valuable insights</p>
        </div>

        <div className="bg-white rounded-xl shadow-xl p-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Feature Cards */}
            <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all">
              <div className="text-blue-700 mb-4">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">Quick & Easy</h3>
              <p className="text-base text-blue-700">Submit your feedback in just a few clicks</p>
            </div>

            <div className="bg-gradient-to-br from-indigo-100 to-indigo-50 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all">
              <div className="text-indigo-700 mb-4">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-indigo-800 mb-2">Make an Impact</h3>
              <p className="text-base text-indigo-700">Your feedback shapes our future updates</p>
            </div>

            <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all">
              <div className="text-blue-700 mb-4">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">Track Progress</h3>
              <p className="text-base text-blue-700">Follow how your feedback is implemented</p>
            </div>
          </div>

          {/* Feedback Form */}
          <form className="space-y-6 mt-8" onSubmit={handleSubmit}>
            <div>
              <label className="block text-lg font-medium text-blue-800 mb-2">
                Select Category
              </label>
              <select 
                className="w-full px-4 py-2 rounded-lg border-2 border-blue-200 focus:ring-blue-500 focus:border-blue-500 text-base text-blue-700 bg-blue-50"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
              >
                <option value="">Choose a category</option>
                <option value="Product Features">Product Features</option>
                <option value="Product Pricing">Product Pricing</option>
                <option value="Product Usability">Product Usability</option>
              </select>
            </div>

            <div>
              <label className="block text-lg font-medium text-blue-800 mb-2">
                Rating
              </label>
              <div className="flex items-center space-x-2">
                {[1, 2, 3, 4, 5].map((value) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => setRating(value)}
                    className={`w-10 h-10 rounded-full focus:outline-none transition-all ${
                      rating >= value
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-200 text-gray-600'
                    }`}
                  >
                    {value}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-lg font-medium text-blue-800 mb-2">
                Your Feedback
              </label>
              <textarea
                className="w-full px-4 py-2 rounded-lg border-2 border-blue-200 focus:ring-blue-500 focus:border-blue-500 text-base text-blue-700 bg-blue-50"
                rows="5"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="Share your thoughts..."
                required
              ></textarea>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-base font-medium rounded-lg hover:opacity-90 transition-all transform hover:scale-105 shadow-lg disabled:opacity-50"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FeedbackForm;
