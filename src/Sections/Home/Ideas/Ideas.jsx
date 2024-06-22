import { useEffect, useState } from "react";

import { Idea } from "./Idea/Idea";


const Ideas = () => {
    const [ideas, setIdeas] = useState([])

    useEffect(() => {
        fetch(`https://a10-server-opal.vercel.app/ideas`)
            .then(res => res.json())
            .then(data => {
                setIdeas(data)

            })
    }, [])

    return (
        <div className="my-4 ">
            <h2 className="text-center my-2 text-3xl">Ideas</h2>
            <div className="grid grid-col-1 gap-4 my-2">
                {
                    ideas.map(idea => {

                        return (<Idea idea={idea} key={idea._id}></Idea>)
                    })
                }
            </div>
           
        </div>
    );
};

export default Ideas;