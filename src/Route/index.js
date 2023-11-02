import { createBrowserRouter } from "react-router-dom";
import AddToCart from "../AddToCart";
import LandingPage from "../LandingPage";
import Checkout from "../CheckOut/CheckOut";
import Contact from "../Contact";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <LandingPage />,
	},
	{
		path: "/cart",
		element: <AddToCart />,
	},
	{
		path: "/checkout",
		element: <Checkout />,
	},
	{
		path: '/contact',
		element: <Contact />
	},
]);
