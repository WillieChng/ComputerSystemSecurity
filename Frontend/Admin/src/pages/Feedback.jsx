import React from 'react';

const CustomerFeedback = () => {
  const feedbacks = [
    {
      id: 1,
      name: "Sarah Collins",
      rating: "5/5",
      feedback: "This co-working space is exactly what I was looking for! The atmosphere is productive yet relaxed, and the internet speed is incredible. I love the fact that there are quiet areas for focus and communal spaces for collaboration. Definitely coming back!"
    },
    {
      id: 2,
      name: "James Patel",
      rating: "4/5",
      feedback: "Great location and very comfortable workspaces. The staff is friendly, and the amenities, like the coffee station and meeting rooms, are top-notch. However, I wish the parking situation was a bit easier. Overall, a great experience!"
    },
    {
      id: 3,
      name: "Emily Tan",
      rating: "3/5",
      feedback: "The space is clean, modern, and the internet works well, but it gets a bit crowded during peak hours. I had trouble finding a quiet spot. If the management can limit the number of bookings or expand, it would be perfect."
    },
  ];

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', color: '#333' }}>
      <div style={{ backgroundColor: '#4CAF50', padding: '8px 18px', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#fff' }}>
        <h2 style={{ margin: 0 }}>Customer Feedback</h2>
        <div style={{ fontSize: '24px', cursor: 'pointer' }}>☰</div>
      </div>
    
        <br>
        </br>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {feedbacks.map((item, index) => (
          <div key={index} style={{
            padding: '15px 20px',
            borderRadius: '12px',
            backgroundColor: '#ffffff',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.08)',
            display: 'flex',
            flexDirection: 'column',
            borderLeft: '6px solid #4CAF50',
            transition: 'transform 0.2s ease-in-out',
            maxWidth: '450px',
            margin: '0 auto'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ fontWeight: '600', fontSize: '1rem', color: '#333' }}>{item.name}</div>
              <div style={{ color: '#FFC107', fontWeight: '500', fontSize: '0.9rem' }}>⭐ {item.rating}</div>
            </div>
            <p style={{
              fontSize: '0.9rem',
              lineHeight: '1.4',
              color: '#666',
              marginTop: '8px'
            }}>
              {item.feedback}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerFeedback;
