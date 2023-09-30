import {useEffect, useState} from "react";
import {httpRequest} from "../api/common.ts";
import {Seasons} from "../models/seasons.ts";
import {useParams} from "react-router-dom";
import {Spinner} from "@chakra-ui/react";
import Race from "./Race.tsx";


type ChosenSeasonParams = {
    year: string;
}
export default function ChosenSeason() {
    const {year} = useParams<ChosenSeasonParams>()
    const [season, setSeason] = useState<Seasons>()

    useEffect(() => {
        httpRequest.get<Seasons>(`${year}.json`)
            .then(value => setSeason(value.data))
    }, [year]);
    return (<>
        {season ? (<>
            <div className={"mt-4 text-3xl w-full flex justify-center "}>{season.MRData.RaceTable.season}</div>
            <div className={"h-0.5 border-2 border-solid border-white my-4"}></div>
            <div className={"flex justify-center"}>

                <div className={"flex flex-col justify-between w-4/6  border-2 border-white min-h-[500px]"}>
                    <div className={"flex flex-row w-full min-h-[40px]"}>
                        <div className={"w-2/12 flex items-center justify-center"}>Round</div>
                        <div className={"w-4/12 flex items-center "}>Race name</div>
                        <div className={"w-4/12 flex items-center "}>Circuit name</div>
                        <div className={"w-2/12 flex items-center justify-center"}>Date</div>
                    </div>
                    <div className={" w-full"}>
                        {
                            season.MRData.RaceTable.Races.map(races => {
                                    return (
                                        <Race races={races}/>
                                    )
                                }
                            )
                        }
                    </div>

                </div>
            </div>


        </>) : <Spinner className={"h-4 w-4"}/>
        }
    </>)
}
