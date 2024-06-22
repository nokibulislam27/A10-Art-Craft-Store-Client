/* eslint-disable react/prop-types */
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,

} from "@material-tailwind/react";
import Swal from "sweetalert2";
import { IoMdPricetag } from "react-icons/io";
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider/AuthProvider";
import { Helmet } from "react-helmet";
const MyAll = ({ art }) => {
    const { image_url,
        item_name,
        subcategory_Name,

        price,
        rating,
        customization,

        stockStatus,
        _id,
    } = art
    const { setState,state } = useContext(AuthContext)
    const handelDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`https://a10-server-opal.vercel.app/delete/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Art has been deleted.',
                                'success'
                            )
                           
                            setState(!state);
                        }
                    })

            }
        })
        
           
    }
    return (
        <div className="mx-auto">
            <Helmet>
                <title>CraftVista || All Art</title>
            </Helmet>
            <Card className="max-w-[24rem]  ">
                <CardHeader
                    floated={false}
                    shadow={false}
                    color="transparent"
                    className="m-0 rounded-none"
                >
                    <div
                        // src={`${image_url}`}
                        style={{ backgroundImage: `url(${image_url})` }}
                        alt=""
                        className="bg-cover object-cover h-[240px] w-[24rem]"
                    />
                </CardHeader>
                <CardBody>
                    <Typography variant="h4" color="blue-gray">
                        {item_name}
                    </Typography>
                    <Typography variant="lead" color="gray" className="mt-2 font-normal">
                        {subcategory_Name}
                    </Typography>
                    <div className="flex items-center justify-between">
                        <div className="flex gap-1">
                            <IoMdPricetag /> {price} $
                        </div>
                        <div>
                            {stockStatus}
                        </div>

                    </div>
                </CardBody>
                <CardFooter className="flex items-center justify-between">

                    <Typography className="font-normal flex gap-1">
                        Customizable: {customization}
                    </Typography>
                    <Typography className="font-normal flex gap-1">
                        <FaRegStar /> {rating}
                    </Typography>

                </CardFooter>
                <div className="my-2 flex gap-3 justify-around">
                    <Link to={`/details/${_id}`}><Button>View Details</Button> </Link>
                    <Link to={`/update/${_id}`}><Button>Update</Button> </Link>
                    <Button onClick={() => { handelDelete(_id)}}>Delete</Button> 
                </div>

            </Card>

        </div>
    );
};

export default MyAll;