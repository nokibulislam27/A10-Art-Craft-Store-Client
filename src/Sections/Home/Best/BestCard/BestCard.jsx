/* eslint-disable react/prop-types */
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
   

} from "@material-tailwind/react";

import { IoMdPricetag } from "react-icons/io";
import { FaRegStar } from "react-icons/fa";
const BestCard = ({ art }) => {
    const { image_url,
        item_name,
        subcategory_Name,

        price,
        rating,
        customization,

        stockStatus,
       
    } = art
  

    return (
        <div className="mx-auto">

            <Card className="max-w-[20rem] mx-auto ">
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
             

            </Card>

        </div>
    );
};

export default BestCard;