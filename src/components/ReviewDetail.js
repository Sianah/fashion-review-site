import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ReviewDetail = () => {
    const { id } = useParams();
    const [review, setReview] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:8000/api/reviews/${id}/`)
            .then(response => response.json())
            .then(data => setReview(data))
            .catch(error => console.error('Error fetching data:', error));
    }, [id]);

    return (
        <div style={detailContainerStyle}>
            {review ? (
                <div>
                    <h1 style={titleStyle}>{review.title}</h1>
                    <p style={authorStyle}>{review.author}</p>
                    <img src={`http://localhost:8000/media/${review.image}`} alt={review.title} style={imageStyle} />
                    <div style={textContainerStyle}>
                        
                        <p style={detailTextStyle}>{review.detail_text}</p>
                        <p style={detailTextStyle}>{review.detail_text}</p>
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

const detailContainerStyle = {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Lato, sans-serif',
    textAlign: 'center', 
};

const titleStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '10px',
};

const authorStyle = {
    color: '#888',
    fontSize: '1rem',
    textAlign: 'center',
    marginBottom: '20px',
};

const imageStyle = {
    display: 'block', 
    margin: '20px auto', 
    width: '100%', 
    height: 'auto',
    maxWidth: '600px', 
    objectFit: 'cover',
};

const textContainerStyle = {
    textAlign: 'left',
    marginTop: '20px',
};

const detailTextStyle = {
    fontSize: '1rem',
    lineHeight: '1.8',
    color: '#555',
    marginTop: '10px',
};

export default ReviewDetail;


