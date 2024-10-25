import React from 'react';

// Review 데이터 타입 부분
interface ReviewProps {
  reviewId: number;
  userId: number;
  userName: string;
  productId: number;
  productName: string;
  rating: number;
  content: string;
  reviewDate: string;
  userImage: string;
}

const ReviewItem: React.FC<ReviewProps> = ({ 
  reviewId, 
  userId, 
  userName, 
  productId, 
  productName, 
  rating, 
  content, 
  reviewDate, 
  userImage 
}) => {
  // 별점을 시각적으로 보여주는 함수
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} style={i <= rating ? styles.starFilled : styles.starEmpty}>
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div style={styles.reviewItem}>
      <div style={styles.reviewHeader}>
        <img src={userImage} alt={`${userName} profile`} style={styles.userImage} />
        <div>
          <h3>{userName}</h3>
          <p>{new Date(reviewDate).toLocaleDateString()}</p>
        </div>
      </div>
      <div style={styles.reviewBody}>
        <p style={styles.productInfo}>상품: {productName} (ID: {productId})</p>
        <div style={styles.rating}>{renderStars(rating)} ({rating} / 5)</div>
        <p>{content}</p>
      </div>
      <div style={styles.reviewFooter}>
        <button style={styles.likeButton}>좋아요</button>
      </div>
    </div>
  );
};

// 간단한 스타일링
const styles = {
  reviewItem: {
    border: '1px solid #ccc',
    padding: '20px',
    margin: '20px 0',
    borderRadius: '8px',
    backgroundColor: '#fff',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  },
  reviewHeader: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
  },
  userImage: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    marginRight: '10px',
  },
  reviewBody: {
    textAlign: 'left' as 'left',
  },
  productInfo: {
    fontWeight: 'bold',
  },
  rating: {
    margin: '10px 0',
    fontSize: '20px',
    color: '#ffcc00',
  },
  starFilled: {
    color: '#ffcc00',
  },
  starEmpty: {
    color: '#ddd',
  },
  reviewFooter: {
    marginTop: '10px',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  likeButton: {
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default ReviewItem;
