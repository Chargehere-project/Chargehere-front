import React from 'react';

// Review 데이터 타입 정의
interface ReviewProps {
  reviewId: number;
  userId: number;
  productId: number;
  rating: number;
  content: string;
  reviewDate: string;
}

const ReviewItem: React.FC<ReviewProps> = ({ reviewId, userId, productId, rating, content, reviewDate }) => {
  return (
    <div style={styles.reviewItem}>
      <h3>리뷰 #{reviewId}</h3>
      <p>작성자: {userId}</p>
      <p>상품 ID: {productId}</p>
      <p>별점: {rating} / 5</p>
      <p>내용: {content}</p>
      <p>작성일: {new Date(reviewDate).toLocaleDateString()}</p>
    </div>
  );
};

// 간단한 스타일링을 위한 객체
const styles = {
  reviewItem: {
    border: '1px solid #ccc',
    padding: '10px',
    margin: '10px 0',
    borderRadius: '5px',
  },
};

export default ReviewItem;
