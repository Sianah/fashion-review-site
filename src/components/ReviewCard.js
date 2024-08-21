import React from 'react';
import { Link } from 'react-router-dom';

const ReviewCard = ({ review }) => {
    return (
        <div style={cardStyle}>
            <img src={`http://localhost:8000/media/${review.image}`} alt={review.title} style={imageStyle} />
            <div style={cardContentStyle}>
                <h2 style={titleStyle}>
                    <Link to={`/reviews/${review.id}`} style={linkStyle}>{review.title}</Link>
                </h2>
                <p style={authorStyle}>by {review.author}</p>
                <p style={excerptStyle}>{review.excerpt}</p>
            </div>
        </div>
    );
};

const cardStyle = {
    background: '#fff',
    borderRadius: '10px',
    overflow: 'hidden',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    marginBottom: '20px',
};

const imageStyle = {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
};

const cardContentStyle = {
    padding: '15px',
};

const titleStyle = {
    fontSize: '1.5rem',
    margin: '0 0 10px 0',
};

const authorStyle = {
    color: '#888',
    fontSize: '0.9rem',
};

const excerptStyle = {
    fontSize: '1rem',
    lineHeight: '1.5',
};

const linkStyle = {
    textDecoration: 'none',
    color: '#333',
};

export default ReviewCard;

