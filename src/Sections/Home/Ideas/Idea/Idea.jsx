/* eslint-disable react/prop-types */
import {
    Card,
    CardHeader,
    CardBody,
    
    Typography,
  
} from "@material-tailwind/react";

export const Idea =({ idea })=> {
    const { title, image_url, description, category } = idea;
    return (
        <Card className="w-[320px]">
            <CardHeader shadow={false} floated={false} className="h-96">
                <img
                    src={`${image_url}`}
                    alt="card-image"
                    className="h-full w-full object-cover"
                />
            </CardHeader>
            <CardBody>
                <div className="mb-2 flex items-center justify-between">
                    <Typography color="blue-gray" className="font-medium">
                        {title}
                    </Typography>
                    
                </div>
                <div className="mb-2 flex items-center justify-between">
                    <Typography color="blue-gray" className="font-medium">
                       Category: {category}
                    </Typography>
                    
                </div>
                <Typography
                    variant="small"
                    color="gray"
                    className="font-normal opacity-75"
                >
                   {description}
                </Typography>
            </CardBody>
           
        </Card>
        
    );
}