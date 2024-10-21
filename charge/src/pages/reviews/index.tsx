import { useState, useEffect } from 'react';
import axios from 'axios';
import ReviewItem from '../../components/reviews/reviews'; 

interface Review {
  reviewId: number;
  userId: number;
  productId: number;
  rating: number;
  content: string;
  reviewDate: string;
}

const ReviewsPage = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get('https://your-backend-api/reviews');
        setReviews(response.data);
        setLoading(false);
      } catch (error: any) {
        setError('리뷰를 불러오는 중 에러가 발생했습니다.');
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  if (loading) {
    return <div>리뷰 데이터를 불러오는 중...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>리뷰 목록</h1>

      {/* 리뷰 데이터   -------------- 수정해야함(사진 추가해야함) */}
      {reviews.map((review) => (
        <ReviewItem
          key={review.reviewId}
          reviewId={review.reviewId}
          userId={review.userId}
          productId={review.productId}
          rating={review.rating}
          content={review.content}
          reviewDate={review.reviewDate}
        />
      ))}
    </div>
  );
};

export default ReviewsPage;