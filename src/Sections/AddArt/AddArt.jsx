


// @material-tailwind/react
import {
    Button,
    Input,
    Typography,
    // Select,
    // Option,

} from "@material-tailwind/react";
import { useContext,useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
// import { useState } from "react";

// day picker

import Swal from 'sweetalert2'
import { Helmet } from "react-helmet";
// @heroicons/react
import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    
} from "@material-tailwind/react";
const AddArt = () => {
    const { user,setState,state } = useContext(AuthContext)

const [category, setCategory]=useState()
    const handleAdd = e => {
        e.preventDefault();
        console.log('connected');
        const image_url = e.target.image_url.value;
        const item_name = e.target.item_name.value;
        const subcategory_Name = category;
        const short_description = e.target.short_description.value;
        const price = e.target.price.value;
        const rating = e.target.rating.value;
        const customization = e.target.customization.value;
        const processing_time = e.target.processing_time.value;
        const stockStatus = e.target.stockStatus.value;
        const User_Email = `${ e.target.User_Email.value || user?.email}`;
        const User_Name = `${e.target.User_Name.value || user?.displayName}`
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
       
        fetch('https://a10-server-opal.vercel.app/addArt', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(info)
        })
            .then(res => res.json())
            .then(data => {
              
                if (data.insertedId) {
                   
                    Swal.fire({
                        title: 'Success',
                        text: 'Successfully added to database',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    setState(!state)
                }
               
            })
    }





    return (
        <section className="px-8 py-20 container mx-auto">
            <Helmet>
                <title>CraftVista || Add Art</title>
            </Helmet>
            <div className="text-center">
                <Typography variant="h5" color="blue-gray">
                    Add Art
                </Typography>
                <Typography
                    variant="small"
                    className="text-gray-600 font-normal mt-1"
                >
                    Add your art bellow.
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
                        <div className="text-center border border-gray-400 rounded-md">
                            <Menu
                                animate={{
                                    mount: { y: 0 },
                                    unmount: { y: 25 },
                                }}

                            >
                                <MenuHandler>
                                    <Button className="bg-gray-200 text-gray-600 w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200">{category?`${category}`: 'Subcategory name'}</Button>
                                </MenuHandler>
                                <MenuList >
                                    <MenuItem value={'Card Making'} onClick={() => { setCategory('Card Making') }} >Card Making</MenuItem>
                                    <MenuItem value={'Scrapbooking'} onClick={() => { setCategory('Scrapbooking') }}>Scrapbooking</MenuItem>
                                    <MenuItem value={'Paper Quilling & Origami'} onClick={() => { setCategory('Paper Quilling & Origami') }}>Paper Quilling & Origami</MenuItem>
                                    <MenuItem value={'Glass Painting'} onClick={() => { setCategory('Glass Painting') }}>Glass Painting</MenuItem>
                                    <MenuItem value={'Lampworking'} onClick={() => { setCategory('Lampworking') }}>Lampworking</MenuItem>
                                    <MenuItem value={'Glass Dying & Staining'} onClick={() => { setCategory('Glass Dying & Staining') }}>Glass Dying & Staining</MenuItem>


                                </MenuList>
                            </Menu>
                        </div>
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
                            Price
                        </Typography>
                        <Input
                            size="lg"
                            placeholder="$20"
                            labelProps={{
                                className: "hidden",
                            }}
                            type="number"
                            className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                            name="price"
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
                            type="number"
                            className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                            name="rating"
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
                        />
                    </div>
                    
                </div>
                <div className="flex flex-col items-end gap-4 md:flex-row mt-6">
                    <div className="w-full">
                        <Typography
                            variant="small"
                            color="blue-gray"
                            className="mb-2 font-medium"
                        >
                            User Name
                        </Typography>
                        <Input
                            size="lg"
                            placeholder="Name"
                            labelProps={{
                                className: "hidden",
                            }}
                            className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                            name="User_Name"
                        />
                    </div>

                    <div className="w-full">
                        <Typography
                            variant="small"
                            color="blue-gray"
                            className="mb-2 font-medium"
                        >
                            User Email
                        </Typography>
                        <Input
                            size="lg"
                            placeholder="Email"
                            labelProps={{
                                className: "hidden",
                            }}
                            className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                            name="User_Email"
                        />
                    </div>
                </div>
                <div className="w-full text-center mt-5">
                    <Button type="submit" className="text-center w-1/3 md:w-1/4
                ">Add</Button>
                </div>


            </form>
        </section>
    );



};

export default AddArt;