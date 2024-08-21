import React, { useEffect, useState } from 'react';

const ReviewDetail = ({ match }) => {
    const [review, setReview] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:8000/api/reviews/${match.params.id}/`)
            .then(response => response.json())
            .then(data => setReview(data))
            .catch(error => console.error('Error fetching data:', error));
    }, [match.params.id]);

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

