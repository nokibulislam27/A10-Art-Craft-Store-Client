/* eslint-disable react/prop-types */


import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useContext, useEffect, useState } from "react"; 


import FavoriteCard from './FavoriteCard/FavoriteCard';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';
import { Helmet } from 'react-helmet';
// ..
AOS.init();
const Favorite = () => {
    const { getLoved } = useContext(AuthContext)
    const [arts, setArts] = useState([])
    const loved = getLoved()

    useEffect(() => {

        const fetchData = async () => {
            const response = await fetch('https://a10-server-opal.vercel.app/arts');
            
            const data = await response.json();
           
            const exist = data.filter(item => loved.includes(item._id));
          
            if (exist) {
                setArts(exist)
            }

        };
        fetchData();
    }, [loved])



    if (arts.length < 1) {
        return (
            <h1 className='text-center my-3'>Add to favorite to see here</h1>
    )
}



    return (

        <div className='mt-4'>
            <h1 className='text-3xl text-center my-3'> Your Favorite</h1>
            <Helmet>
                <title>CraftVista || Favorite</title>
            </Helmet>
            {
                arts.map(art => <FavoriteCard key={art._id} art={art}></FavoriteCard>)
            }


        </div>

    );
};

export default Favorite;