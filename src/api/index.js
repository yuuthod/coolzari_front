import OptionData from '@/json/OptionList.json';
import ReviewData from '@/json/ReviewData.json';
import UserData from '@/json/UserInfoData.json';
import AreaData from '@/json/Area.json';
import MyReviewData from '@/json/MyReviewData.json';

function fetchOptionList() {
  return OptionData;
}

function fetchReviewList() {
  return ReviewData;
}

function fetchUserList() {
  return UserData;
}

function fetchAreaList() {
  return AreaData;
}

// 리뷰 평균 평점
function fetchAverageRating() {
  return 4.5;
}

function fetchMyReviewList() {
  return MyReviewData;
}

export {
  fetchOptionList,
  fetchReviewList,
  fetchUserList,
  fetchAreaList,
  fetchAverageRating,
  fetchMyReviewList,
};
