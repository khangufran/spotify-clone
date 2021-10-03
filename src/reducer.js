export const initialState = {
	user:null,
	playlists:[],
	playing:false,
	item:null,
	token:'BQD6PdQQ0BCvBb6TNKObr626ccGuoanvGTveUgaziUvSYcKLdIDdn1j_ILEjqNb6vRdILIDzOjGnnFIxlwNnT4m4tbDRFKHcSMqVDqtQXMsXe38lf7-dN6VXM52KFHk8Qy5NxRlR-ZoUbnxKw5EU2j4wOHWfJYZkTQwZE2_g4VdZgfH8'
};

const reducer = (state,action) => {
	
	switch(action.type) {
		case 'SET_USER':
			return {
				...state,
				user:action.user
			};
		case 'SET_TOKEN':
			return {
				...state,
				token:action.token
			};
		case 'SET_PLAYLISTS':
			return {
				...state,
				playlists:action.playlists,
			};
		case 'SET_DISCOVER_WEEKLY':
			return {
				...state,
				discover_weekly:action.discover_weekly,
			};
		default:
			return state;
			};
};

export default reducer;
