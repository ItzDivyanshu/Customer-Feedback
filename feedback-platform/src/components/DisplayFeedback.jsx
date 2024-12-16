import { useState, useEffect } from 'react';
import axios from 'axios';

function DisplayFeedback() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const response = await axios.get('http://localhost:8800/api/feedback', {
          withCredentials: true,
        });
        setFeedbacks(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching feedback:', error);
        setError('Failed to load feedback. Please try again later.');
        setLoading(false);
      }
    };

    fetchFeedback();
  }, []);

  const getStatusColor = (status) => {
    const statusColors = {
      pending: 'bg-yellow-100 text-yellow-800',
      open: 'bg-blue-100 text-blue-800',
      'in-progress': 'bg-purple-100 text-purple-800',
      completed: 'bg-green-100 text-green-800',
    };
    return statusColors[status] || 'bg-gray-100 text-gray-800';
  };

  const getRatingStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-xl ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
        ★
      </span>
    ));
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-red-500 text-center">
          <p className="text-xl font-semibold">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-8 px-6 md:px-12 lg:px-24 xl:px-48">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Feedback Dashboard</h1>

      {feedbacks.length === 0 ? (
        <div className="text-center text-gray-500">
          <p className="text-xl">No feedback submitted yet.</p>
        </div>
      ) : (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {feedbacks.map((feedback) => (
            <div
              key={feedback._id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-xl font-semibold text-gray-800">{feedback.title}</h2>
                  <span
                    className={`px-2 py-1 rounded-full text-sm font-medium ${getStatusColor(
                      feedback.status
                    )}`}
                  >
                    {feedback.status}
                  </span>
                </div>

                <p className="text-gray-600 mb-4">{feedback.comment}</p>

                <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                  <div>
                    <span className="font-medium">Category:</span> {feedback.category}
                  </div>
                  <div className="flex space-x-1">{getRatingStars(feedback.rating)}</div>
                </div>

                <div className="flex justify-between items-center text-sm text-gray-500 border-t pt-4">
                  <div>By: {feedback.userName || 'Anonymous'}</div>
                  <div>{new Date(feedback.createdAt).toLocaleDateString()}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default DisplayFeedback;
