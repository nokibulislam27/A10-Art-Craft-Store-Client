import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import './table.css'
import { Helmet } from "react-helmet";

const AllArt = () => {
    const { state } = useContext(AuthContext)
    const [arts, setArts] = useState([])
    useEffect(() => {
        fetch('https://a10-server-opal.vercel.app/arts')
            .then(res => res.json())
            .then(data => {
                setArts(data)
            })
    }, [state])
    return (
        <div>
            <h1 className="text-center my-2">All Art and Crafts</h1>
            <Helmet>
                <title>CraftVista || All Art</title>
            </Helmet>
            <table className="custom-table">
                <thead>
                    <tr>
                        
                        <th className="lg:p-2">Name</th>
                        <th className="lg:p-2 hide" >Category</th>
                        <th className="lg:p-2">Price</th>
                        <th className="hide lg:p-2">Stock Status</th>
                        <th className="lg:p-2">Rating</th>
                        <th className="lg:p-2">Details</th>
                    </tr>
                </thead>
                <tbody>
                    {arts.map(item => (
                        <tr key={item._id}>
                            <td className="lg:p-2">{item.item_name}</td>
                            <td className="hide p-2">{item.subcategory_Name}</td>
                            <td className="lg:p-2">{item.price}</td>
                            <td className="hide p-2">{item.stockStatus}</td>
                            <td className="lg:p-2">{item.rating}</td>
                            <td><Link to={`/details/${item._id}`}><Button>View Details</Button> </Link>  </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AllArt;