import React, { useEffect, useState } from 'react';
import ReviewCard from './ReviewCard';

const ReviewList = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/api/reviews/')
            .then(response => response.json())
            .then(data => setReviews(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div style={listStyle}>
            {reviews.map(review => (
                <ReviewCard key={review.id} review={review} />
            ))}
        </div>
    );
};

const listStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '20px',
    padding: '20px',
};

export default ReviewList;
