import { useLoaderData } from "react-router-dom";
import { Typography } from "@material-tailwind/react";

const Details = () => {
    const art = useLoaderData();
   
    const { image_url,
        item_name,
        subcategory_Name,
        short_description,
        price,
        rating,
        customization,
        processing_time,
        stockStatus,
        User_Email,
        User_Name,
    } = art
    return (
        <div className="m-4">
            

            
            <figure className="relative h-96 w-full">
                <img
                    className="h-full w-full rounded-xl object-cover object-center"
                    src={`${image_url}`}
                    alt="item image"
                />
                <figcaption className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm m-4">
                    <div>
                        <Typography variant="h5" color="blue-gray">
                            {item_name}
                        </Typography>
                        <Typography color="gray" className="mt-2 font-normal">
                            Rating:{rating}
                        </Typography>
                    </div>
                    <Typography variant="h5" color="blue-gray">
                      Only {price}$
                    </Typography>
                    <Typography variant="h5" color="blue-gray">
                        {stockStatus}
                    </Typography>
                </figcaption>
            </figure>
            <div>
                <Typography variant="h3" color="blue-gray" className="text-center">
                    {item_name}
                </Typography>
                <Typography variant="h6" color="blue-gray" className="mt-2">
                    Category: <p className="font-normal">{subcategory_Name} </p>
                </Typography>
                <Typography variant="h6" color="blue-gray" className="mt-2">
                    Description: <p className="font-normal">{short_description} </p>
                </Typography>
                <Typography variant="h6" color="blue-gray" className="mt-2">
                    Added by: <p className="font-normal">{User_Name} </p>
                </Typography>
                <Typography variant="h6" color="blue-gray" className="mt-2">
                    Seller Email: <p className="font-normal">{User_Email} </p>
                </Typography>
                <Typography variant="h6" color="blue-gray" className="mt-2">
                    Processing Time: <p className="font-normal">{processing_time} </p>
                </Typography>
                <Typography variant="h6" color="blue-gray" className="mt-2">
                Customizable: <p className="font-normal">{customization} </p>
                </Typography>
              
            </div>
           
        </div>
    );
};

export default Details;