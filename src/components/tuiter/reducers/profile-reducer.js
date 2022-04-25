import profileJson from '../data/profile.json';

const profileReducer = (state = profileJson, action) => {
    switch (action.type) {
        case 'update-profile':
            const newProfiles = state.map(prof => {
                const newProfile = prof._id === action.profile._id ? action.profile : prof;
                return newProfile;
            });
            return newProfiles;
        default:
            return state
    }
};

export default profileReducer;