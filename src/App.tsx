import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ChosenSeason from "./components/ChosenSeason.tsx";
import Menu from "./Menu.tsx";


const router = () =>
    createBrowserRouter([
            {
                path: '/',
                element: (
                    <Menu/>)
            },
            {
                path: "/:year",
                element: (
                    <ChosenSeason/>
                )

            }
        ]
    )

function App() {
    return (
        <RouterProvider router={router()}/>
    )
}

export default App;