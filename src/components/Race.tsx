import {Races} from "../models/seasons.ts";
import {useEffect, useState} from "react";
import {wikipediaRequest} from "../api/common.ts";

interface RaceProps {
    races: Races
}

export default function Race({races}: RaceProps) {
    const [content, setContent] = useState('');

    useEffect(() => {
        console.log(races.Circuit.circuitName.split(" ").join("_"))
        wikipediaRequest
            .get("", {params: {titles: `${races.Circuit.circuitName.split(" ").join("_")}`}})
            .then((response) => {
                const pageId = Object.keys(response.data.query.pages)[0];
                const pageContent = response.data.query.pages[pageId].extract;
                setContent(pageContent);
            })
    }, [races.Circuit.circuitName]);

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
        return (content)
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    return (
        <div className={"flex flex-row"}>
            <div
                className={"border-t border-dashed min-h-[40px] w-2/12 flex items-center justify-center"}>{races.round}</div>
            <div
                className={"border-t border-dashed min-h-[40px] w-4/12 flex items-center "}>{races.raceName}</div>
            <div
                className={`border-t border-dashed min-h-[40px] w-4/12 flex items-center`}
                onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                {races.Circuit.circuitName}
                {isHovered ?
                    <div className={"absolute p-3 h-[300px] overflow-hidden bg-gray-700"}>{
                        content}</div>
                    : ""}
            </div>
            <div
                className={"border-t border-dashed min-h-[40px] w-2/12 flex items-center justify-center"}>{races.date}</div>
        </div>
    )
}