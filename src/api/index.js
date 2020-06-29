import OptionData from '@/json/OptionList.json';
import ReviewData from '@/json/ReviewData.json';

function fetchOptionList() {
  return OptionData;
}

function fetchReviewList() {
  return ReviewData;
}

// 리뷰 평균 평점
function fetchAverageRating() {
  return 4.5;
}

export { fetchOptionList, fetchReviewList, fetchAverageRating };
