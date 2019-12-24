import * as SearchUtil from "../util/search_util";

export const RECEIVE_SEARCH_RESULTS = "RECEIVE_SEARCH_RESULTS";

const receiveSearchResult = searchDecks => {
  // debugger
  return {
    type: RECEIVE_SEARCH_RESULTS,
    searchDecks
  };
};

export const search = query => dispatch =>
  SearchUtil.search(query)
    .then(res => dispatch(receiveSearchResult(res)));
