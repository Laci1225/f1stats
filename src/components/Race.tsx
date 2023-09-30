import {Races} from "../models/seasons.ts";
import {useEffect, useState} from "react";
import {wikipediaRequest} from "../api/common.ts";
import {Card, CardBody,Text} from "@chakra-ui/react";

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
    const popUpCard = () => {
        return (
            <Card>
                <CardBody>
                    <Text>View a summary of all your customers over the last month.</Text>
                </CardBody>
            </Card>
        )
    }
    return (
        <div className={"flex flex-row"}>
            <div className={"text-[3px]"}>{content}</div>
            <div
                className={"border-t border-dashed min-h-[40px] w-2/12 flex items-center justify-center"}>{races.round}</div>
            <div
                className={"border-t border-dashed min-h-[40px] w-4/12 flex items-center "}>{races.raceName}</div>
            <div
                className={"border-t border-dashed min-h-[40px] w-4/12 flex items-center "}>{races.Circuit.circuitName}</div>
            <div
                className={"border-t border-dashed min-h-[40px] w-2/12 flex items-center justify-center"}>{races.date}</div>
        </div>
    )
}