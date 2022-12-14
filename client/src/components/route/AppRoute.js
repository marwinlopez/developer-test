import { Route, Routes } from 'react-router-dom';
import { Home } from '../../screens/Home';

// import { Post } from '../../screens/Post';
const AppRoute = props => {
	return (
			<Routes>
				<Route index path='/' element={<Home />} />
				{/* <Route path='*' element={<Post />} /> */}
			</Routes>
	);
};

export default AppRoute;