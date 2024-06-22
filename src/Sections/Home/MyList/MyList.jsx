import { useContext, useEffect, useState } from "react";

import MyAll from "./MyAll/MyAll";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";
import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
} from "@material-tailwind/react";
import { Helmet } from "react-helmet";

const MyList = () => {
    const { state,user } = useContext(AuthContext)
    const [arts, setArts] = useState([])
    const [filter, setFilter] = useState('')
    useEffect(() => {
        fetch(`https://a10-server-opal.vercel.app/${ filter?`myArt/${user?.email}`:`${user?.email}`}/${filter}`)
            .then(res => res.json())
            .then(data => {
                setArts(data)
                
            })
    }, [filter, state, user])

  
    return (
        <div>
            <h2 className="mt-6 mb-4 text-center text-3xl font-bold">My Art & Crafts</h2>
            <Helmet>
                <title>CraftVista || My Art</title>
            </Helmet>
            <div className="text-center my-3">
                <Menu
                    animate={{
                        mount: { y: 0 },
                        unmount: { y: 25 },
                    }}

                >
                    <MenuHandler>
                        <Button className="bg-[gray] "> Customization</Button>
                    </MenuHandler>
                    <MenuList >
                        <MenuItem value={'yes'} onClick={() => { setFilter('Yes')}} >Yes</MenuItem>
                        <MenuItem value={'no'} onClick={() => { setFilter('No') }}>No</MenuItem>
                      

                    </MenuList>
                </Menu>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
               
               
                {
                    arts.map(art => {
                        return <MyAll key={art._id} art={art}></MyAll>
                    })
                }
            </div>
        </div>
       
    );
};

export default MyList;