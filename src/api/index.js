import OptionData from '@/json/OptionList.json';
import ReviewData from '@/json/ReviewData.json';
import UserData from '@/json/UserInfoData.json';
import AreaData from '@/json/Area.json';

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

export { fetchOptionList, fetchReviewList, fetchUserList, fetchAreaList };
