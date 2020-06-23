import OptionData from '@/json/OptionList.json';
import ReviewData from '@/json/ReviewData.json';
import UserData from '@/json/UserInfoData.json';

function fetchOptionList() {
  return OptionData;
}

function fetchReviewList() {
  return ReviewData;
}

function fetchUserList() {
  return UserData;
}

export { fetchOptionList, fetchReviewList, fetchUserList };
