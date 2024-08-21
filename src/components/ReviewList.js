import React, { useEffect, useState } from 'react';
import ReviewCard from './ReviewCard';

const ReviewList = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        console.log('Fetching data...');
        fetch('http://localhost:8000/api/reviews/')
            .then(response => {
                console.log('Response received:', response);
                return response.json();
            })
            .then(data => {
                console.log('Data received:', data);
                setReviews(data);
            })
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

