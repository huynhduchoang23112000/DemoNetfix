import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MoviesRow from './MoviesRow';
import * as ACTIONS from '../store/actions';


// const movies = [
//     "https://ss-images.saostar.vn/wp700/pc/1606897461583/BoGia_Teaser1.jpg",
//     "https://edugate.vn/wp-content/uploads/2021/09/huong-dan-tao-poster-phim-cuc-chat-bang-photoshop-235-123.jpg",
//     "https://i.pinimg.com/736x/cb/63/a7/cb63a711c39e8d4f5696a8d387f46b49.jpg",
//     "https://arena.fpt.edu.vn/wp-content/uploads/2021/04/5-yeu-to-tao-nen-mot-poster-phim-an-tuong.jpeg",
//     "https://gaumedia.vn/wp-content/uploads/2021/06/5-buoc-thiet-ke-poster-phim-6.png",
//     "http://d1j8r0kxyu9tj8.cloudfront.net/files/1582782582h5DhM7zcUDHc3kY.jpg",
//     "https://creativereview.imgix.net/content/uploads/2019/12/joker_full.jpg?auto=compress,format&q=60&w=1012&h=1500",
//     "https://upload.wikimedia.org/wikipedia/vi/e/ec/Monster_Hunter_Film_Poster.jpg",
//     "https://photo-cms-anninhthudo.zadn.vn/w660/Uploaded/2022/ipjoohb/2022_09_07/fd6384d7-7558-49b5-b97e-8654863ff256-968.jpeg",
//     "https://www.adobe.com/express/create/poster/media_14f888136eecf9b6e4d83386789e660f15349f96c.jpeg?width=400&format=jpeg&optimize=medium",
//   ];

function Contents(props) {
    const dispatch = useDispatch();
    const {NetflixOriginals,
            TrendingMovies,
            TopRatedMovies,
            ActionMovies,
            ComedyMovies,
            HorrorMovies,
            RomanceMovies,
            Documentaries,
    } = useSelector(state => state.infoMovies);
    
    useEffect (() => {
        dispatch(ACTIONS.getNetflixOriginals());
        dispatch(ACTIONS.getTrendingMovies());
        dispatch(ACTIONS.getTopRatedMovies());
        dispatch(ACTIONS.getActionMovies());
        dispatch(ACTIONS.getComedyMovies());
        dispatch(ACTIONS.getHorrorMovies());
        dispatch(ACTIONS.getRomanceMovies());
        dispatch(ACTIONS.getDocumentaries());
    },[dispatch]);

    // console.log(NetflixOriginals);

    return (
        <div>
            <MoviesRow movies={NetflixOriginals} title="Netflix Originals" isNetflix={true}/>
            <MoviesRow movies={TrendingMovies} title="Trending Movies"/>
            <MoviesRow movies={TopRatedMovies} title="Top Rate Movies"/>
            <MoviesRow movies={ActionMovies} title="Action Movies"/>
            <MoviesRow movies={ComedyMovies} title="Comedy Movies"/>
            <MoviesRow movies={HorrorMovies} title="Horror Movies"/>
            <MoviesRow movies={RomanceMovies} title="Romance Movies"/>
            <MoviesRow movies={Documentaries} title="Documentaties"/>
        </div>
    );
}

export default Contents;