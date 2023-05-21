import { createBrowserRouter } from "react-router-dom";
import PetDetails from "./PetDetials";
import PetList from "./PetList";
import ItemList from "./ItemList";

export const router = createBrowserRouter([
  { path: "/", element: <PetList /> },
  { path: "/pet/:id", element: <PetDetails /> },
  { path: "/items", element: <ItemList /> },
]);
