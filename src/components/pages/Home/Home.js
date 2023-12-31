import ButtonMain from '../../common/ButtonMain/ButtonMain'
import Posts from '../../views/Posts/Posts'
import { NavLink } from 'react-router-dom';

const Home = () => {

    return (
        <>
            <div className='d-flex justify-content-between'>
                <h1>All posts</h1>
                <ButtonMain as={NavLink} to={'/post/add'} variant='outline-info'>Add post</ButtonMain>
            </div>
            <div>
                <Posts />
            </div>
        </>
    );
};

export default Home;