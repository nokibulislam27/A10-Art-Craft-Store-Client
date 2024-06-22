/* eslint-disable react/prop-types */
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
    IconButton,
    Tooltip,
   
} from "@material-tailwind/react";

import { IoMdPricetag } from "react-icons/io";
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";
const Art = ({ art,link }) => {
    const { image_url,
        item_name,
        subcategory_Name,
      
        price,
        rating,
        customization,
      
        stockStatus,
        _id,
        } = art
   const {loveList}=useContext(AuthContext)
   
    return (
        <div className="mx-auto">

            <Card className="max-w-[20rem]  ">
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
                        className="bg-cover object-cover h-[240px] w-[20rem]"
                    />
                </CardHeader>
                <CardBody>
                    <Typography variant="h4" color="blue-gray">
                        {item_name}
                    </Typography>
                    <Typography variant="lead" color="gray" className="mt-2 font-normal">
                       Category: {subcategory_Name}
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
                <div className="my-2 flex justify-between m-3">
                    <Link to={`${link ?`/details/subcategory/${_id}`: `/details/${_id}`}`}><Button>View Details</Button> </Link>
                    <Tooltip content={`Click to add it on favorite section`}>
                    <div className="flex flex-col">
                        <IconButton
                            size="sm"

                            variant="text"
                            className="relative md:right-2 rounded-full"
                            onClick={() => { loveList(_id) }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-6 "
                                color="red"
                            >
                                <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                            </svg>

                        </IconButton>
                        </div>
                        </Tooltip>
</div>
               
            </Card>

        </div>
    );
};

export default Art;