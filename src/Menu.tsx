import {ChangeEvent, useState} from "react";
import {useNavigate} from "react-router-dom";


function Menu() {

    const [name, setName] = useState("");

    function handleNameChange(event: ChangeEvent<HTMLInputElement>): void {
        setName(event.target.value);
    }

    const navigate = useNavigate();
    const onMatchIDClick = (value: string) => {
        navigate(`/${value}`)
    }
    return (
        <div className={""}>
            <div className="block h-16"></div>
            <div className="max-w-screen-lg min-w-1024 p-5 mx-auto items-center justify-between flex">
                <label htmlFor="lon">Season year:</label>
                <input className="bg-white text-black" id="lon" type="text" onChange={handleNameChange}
                       placeholder={"A valid year"}/>
                <button onClick={
                    () => {
                        setName(name);
                        onMatchIDClick(name)
                    }
                }>Submit
                </button>
            </div>
        </div>
    )
}

export default Menu
