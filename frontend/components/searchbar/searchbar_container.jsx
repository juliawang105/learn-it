import { connect } from 'react-redux';
import { search } from '../../actions/search_actions';
import SearchBar from './searchbar'

const mDTP = dispatch => ({
    search: (query) => dispatch(search(query))
});

export default connect(null, mDTP)(SearchBar);