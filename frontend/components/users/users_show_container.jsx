import { connect } from 'react-redux';
import UserShow from './user_show';
import { fetchSave } from '../../actions/save_actions';
import { fetchDecks } from '../../actions/deck_actions';

const mSTP = state => ({
    user: state.session,
    saves: Object.values(state.entities.saves),
    decks: state.entities.decks
});

const mDTP = dispatch => ({
    fetchSave: saveId => dispatch(fetchSave(saveId)),
    fetchDecks: () => dispatch(fetchDecks())
})

export default connect(mSTP, mDTP)(UserShow)