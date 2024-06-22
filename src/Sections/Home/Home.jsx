import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import Slider from "../Header/Slider/Slider";
import Art from "./Art/Art";
import Best from "./Best/Best";
import Ideas from "./Ideas/Ideas";
import { Helmet } from "react-helmet";



const Home = () => {
  const{state}=useContext(AuthContext)
    const [arts, setArts] = useState([])
    const [tab, setTab] = useState(0);
    const [link, setLink] = useState('')
    useEffect(() =>{
        fetch(`https://a10-server-opal.vercel.app/${link ? `arts/${link}` : `horairaabu013025@gmail.com`}`)
            .then(res => res.json())
            .then(data => {
                setArts(data)
              
        })
    }, [link, state])
    

    return (
        
        <div className="h-full relative">
            <Helmet>
                <title>CraftVista || Home</title>
            </Helmet>
            <Slider></Slider>
            
            
           
            <h1 className="text-center my-3">Art and Crafts</h1>
            <p className="text-center">Art and craft, though sometimes used interchangeably, differ slightly. Art focuses on expressing ideas and emotions, while crafts prioritize creating functional or decorative objects. Both involve creativity and skill, using a wide range of materials like paint, clay, fabric, or even recycled items!</p>
            <div className="flex items-center p-3 -mx-4 overflow-x-auto overflow-y-hidden sm:justify-center flex-wrap dark:bg-gray-100 dark:text-gray-800 mt-6 ">

                <p  onClick={() => { setTab(0),setLink('') }}
                    className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tab === 0 ? 'border border-b-0 ' : 'border-b'} dark:border-gray-900 border-white  dark:text-gray-600 top-rounded-xl `}>

                    <span className="font-semibold" >All Categories</span>

                </p>

                <p  onClick={() => { setTab(1), setLink('Card Making') }}
                    className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tab === 1 ? 'border border-b-0' : 'border-b '} dark:border-gray-900 border-white dark:text-gray-600 `} >

                    <span className="font-semibold ">Card Making</span>
                </p>
                <p onClick={() => { setTab(2), setLink('Scrapbooking') }}
                    className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tab === 2 ? 'border border-b-0' : 'border-b '} dark:border-gray-900 border-white dark:text-gray-600 `} >

                    <span className="font-semibold ">Scrapbooking</span>
                </p>
                <p  onClick={() => { setTab(3), setLink('Paper Quilling & Origami') }}
                    className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tab === 3 ? 'border border-b-0' : 'border-b '} dark:border-gray-900 border-white dark:text-gray-600 `} >

                    <span className="font-semibold ">Paper Quilling & Origami</span>
                </p>
                <p  onClick={() => { setTab(4), setLink('Glass Painting') }}
                    className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tab === 4 ? 'border border-b-0' : 'border-b '} dark:border-gray-900 border-white dark:text-gray-600 `} >

                    <span className="font-semibold ">Glass Painting</span>
                </p>
                <p onClick={() => { setTab(5), setLink('Lampworking') }}
                    className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tab === 5 ? 'border border-b-0' : 'border-b '} dark:border-gray-900 border-white dark:text-gray-600 `} >

                    <span className="font-semibold ">Lampworking</span>
                </p>
                <p  onClick={() => { setTab(6), setLink('Glass Dying & Staining') }}
                    className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tab === 6 ? 'border border-b-0' : 'border-b '} dark:border-gray-900 border-white dark:text-gray-600 `} >

                    <span className="font-semibold ">Glass Dying & Staining</span>
                </p>


            </div>
            <div className="flex lg:flex-row flex-col gap-2 p-2 lg:p-6">
                <div className="grid grid-cols-1  lg:grid-cols-2 mx-auto justify-around gap-5 text-center mt-4 mb-auto">
                    {
                        arts.map(art => {

                            return (<Art art={art} link={link} key={art._id}></Art>)
                        })
                    }

                </div>
                <div>
                    <Best></Best>
                    <Ideas></Ideas>
                </div>
                
            </div>
          
      
            
        </div>
    );
};

export default Home;