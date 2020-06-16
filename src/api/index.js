import OptionData from '@/json/OptionList.json';
import ReviewData from '@/json/ReviewData.json';

function fetchOptionList() {
  return OptionData;
}

function fetchReviewList() {
  return ReviewData;
}

export { fetchOptionList, fetchReviewList };
