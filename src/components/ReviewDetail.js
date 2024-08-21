import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ReviewDetail = () => {
    const { id } = useParams(); // Extract 'id' from the route parameters
    const [review, setReview] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:8000/api/reviews/${id}/`)
            .then(response => response.json())
            .then(data => setReview(data))
            .catch(error => console.error('Error fetching data:', error));
    }, [id]);

    return (
        <div style={detailStyle}>
            {review ? (
                <div>
                    <h1>{review.title}</h1>
                    <p>{review.author}</p>
                    <img src={review.image} alt={review.title} style={imageStyle} />
                    <p>{review.excerpt}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

const detailStyle = {
    padding: '20px',
    textAlign: 'center',
};

const imageStyle = {
    width: '100%',
    height: 'auto',
    maxWidth: '600px',
    objectFit: 'cover',
    margin: '20px 0',
};

export default ReviewDetail;

