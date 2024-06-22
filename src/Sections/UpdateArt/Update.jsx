


// @material-tailwind/react
import {
    Button,
    Input,
    Typography,
    // Select,
    // Option,

} from "@material-tailwind/react";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
// import { useState } from "react";

// day picker

import Swal from 'sweetalert2'
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
// @heroicons/react

const Update = () => {
    const { user, setState, state } = useContext(AuthContext)
    const [art, setArt] = useState([])
    const {id} = useParams()
    
    useEffect(() => {
        fetch(`https://a10-server-opal.vercel.app/details/${id}`)
            .then(res => res.json())
            .then(data => {
                setArt(data)
            })
    },[id] )
    const { image_url,
        item_name,
        subcategory_Name,
        short_description,
        price,
        rating,
        customization,
        processing_time,
        stockStatus,
        _id
    } = art

    const handleAdd = e => {
        e.preventDefault();
        console.log('connected');
        const image_url = e.target.image_url.value;
        const item_name = e.target.item_name.value;
        const subcategory_Name = e.target.subcategory_Name.value;
        const short_description = e.target.short_description.value;
        const price = e.target.price.value;
        const rating = e.target.rating.value;
        const customization = e.target.customization.value;
        const processing_time = e.target.processing_time.value;
        const stockStatus = e.target.stockStatus.value;
        const User_Email = `${user?.email || 'unknown'}`;
        const User_Name = `${user?.displayName || 'unknown'}`
        const info = {
            image_url,
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
        }
      
        fetch(`https://a10-server-opal.vercel.app/update/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(info)
        })
            .then(res => res.json())
            .then(data => {
                
                if (data.modifiedCount>0) {

                    Swal.fire({
                        title: 'Success',
                        text: 'Successfully updated to database',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    setState(!state)
                    
                }

            })
    }
    return (
        <div>
            <section className="px-8 py-20 container mx-auto">
                <Helmet>
                    <title>CraftVista || Update</title>
                </Helmet>
                <div className="text-center">
                    <Typography variant="h5" color="blue-gray">
                        Update Art
                    </Typography>
                    <Typography
                        variant="small"
                        className="text-gray-600 font-normal mt-1"
                    >
                       Update your art bellow.
                    </Typography>
                </div>

                <form className="flex flex-col mt-8" onSubmit={handleAdd}>
                    <div className="mb-6 flex flex-col items-end gap-4 md:flex-row">
                        <div className="w-full">
                            <Typography
                                variant="small"
                                color="blue-gray"
                                className="mb-2 font-medium"
                            >
                                Item name
                            </Typography>
                            <Input
                                size="lg"
                                placeholder="Emma"
                                labelProps={{
                                    className: "hidden",
                                }}
                                className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                                name="item_name"
                                defaultValue={item_name}
                            />
                        </div>
                        <div className="w-full">
                            <Typography
                                variant="small"
                                color="blue-gray"
                                className="mb-2 font-medium"
                            >
                                Subcategory name
                            </Typography>
                            <Input
                                size="lg"
                                placeholder="Roberts"
                                labelProps={{
                                    className: "hidden",
                                }}
                                className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                                name="subcategory_Name"
                                defaultValue={subcategory_Name}
                            />
                        </div>
                    </div>
                    <div className="mb-6 flex flex-col gap-4 md:flex-row">
                        <div className="w-full">
                            <Typography
                                variant="small"
                                color="blue-gray"
                                className="mb-2 font-medium"
                            >
                                Short Description
                            </Typography>
                            <Input
                                size="lg"
                                placeholder="Roberts"
                                labelProps={{
                                    className: "hidden",
                                }}
                                className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                                name="short_description"
                                defaultValue={short_description}
                            />
                            {/* <Select
                                size="lg"
                                labelProps={{
                                    className: "hidden",
                                }}
                                className="border-t-blue-gray-200 aria-[expanded=true]:border-t-primary"
                               
                                value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}
                            >
                                <Option value="option1">Option 1</Option>
                                <Option  value="option2">Option 2</Option>
                                <Option value="option3">Option 3</Option>
                                <Option value="male">Male</Option>
                                <Option value="female">Female</Option>
                            </Select> */}
                        </div>



                    </div>
                    <div className="mb-6 flex flex-col items-end gap-4 md:flex-row">
                        <div className="w-full">
                            <Typography
                                variant="small"
                                color="blue-gray"
                                className="mb-2 font-medium"
                            >
                                Price
                            </Typography>
                            <Input
                                size="lg"
                                placeholder="$20"
                                labelProps={{
                                    className: "hidden",
                                }}
                                className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                                name="price"
                                defaultValue={price}
                            />
                        </div>
                        <div className="w-full">
                            <Typography
                                variant="small"
                                color="blue-gray"
                                className="mb-2 font-medium"
                            >
                                Rating
                            </Typography>
                            <Input
                                size="lg"
                                placeholder="4.5"
                                labelProps={{
                                    className: "hidden",
                                }}
                                className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                                name="rating"
                                type="number"
                                defaultValue={rating}
                            />
                        </div>
                    </div>
                    <div className="mb-6 flex flex-col items-end gap-4 md:flex-row">
                        <div className="w-full">
                            <Typography
                                variant="small"
                                color="blue-gray"
                                className="mb-2 font-medium"
                            >
                                Customization
                            </Typography>
                            <Input
                                size="lg"
                                placeholder="Yes"
                                labelProps={{
                                    className: "hidden",
                                }}
                                className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                                name="customization"
                                defaultValue={customization}
                            />
                        </div>
                        <div className="w-full">
                            <Typography
                                variant="small"
                                color="blue-gray"
                                className="mb-2 font-medium"
                            >
                                Processing Time
                            </Typography>
                            <Input
                                size="lg"
                                placeholder="2 working days"
                                labelProps={{
                                    className: "hidden",
                                }}
                                className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                                name="processing_time"
                                defaultValue={processing_time}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col items-end gap-4 md:flex-row">
                        <div className="w-full">
                            <Typography
                                variant="small"
                                color="blue-gray"
                                className="mb-2 font-medium"
                            >
                                Stock Status
                            </Typography>
                            <Input
                                size="lg"
                                placeholder="In Stock"
                                labelProps={{
                                    className: "hidden",
                                }}
                                className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                                name="stockStatus"
                                defaultValue={stockStatus}
                            />
                        </div>
                        <div className="w-full">
                            <Typography
                                variant="small"
                                color="blue-gray"
                                className="mb-2 font-medium"
                            >
                                Photo Url
                            </Typography>
                            <Input
                                size="lg"
                                placeholder="Photo Url"
                                labelProps={{
                                    className: "hidden",
                                }}
                                className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                                name="image_url"
                                defaultValue={image_url}
                            />
                        </div>
                    </div>
                    <div className="w-full text-center mt-5">
                        <Button type="submit" className="text-center w-1/3 md:w-1/4
                ">Update</Button>
                    </div>


                </form>
            </section>
        </div>
    );
};

export default Update;