import { connect } from 'react-redux';
import TagForm from './create_tag_form'
import { fetchTags, createTag } from '../../actions/tag_actions';

const mDTP = dispatch => {
    // debugger
    return {
        createTag: tag => dispatch(createTag(tag))
    }
};

export default connect(null, mDTP)(TagForm)