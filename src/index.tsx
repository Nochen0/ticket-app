/* @refresh reload */
import { render } from "solid-js/web"
import "solid-devtools"
import { Router, Route } from "@solidjs/router"
import "./index.css"
import App from "./App"
import { lazy } from "solid-js"

const root = document.getElementById("root")

const Login = lazy(() => import("./components/auth/Login/LoginPage"))
const HomePage = lazy(() => import("./components/home/HomePage"))
const NotFound = lazy(() => import("./components/notfound/NotFound"))
const Register = lazy(() => import("./components/auth/Register/RegisterPage"))
const BookingsPage = lazy(() => import("./components/bookings/BookingsPage"))
const Booking = lazy(() => import("./components/bookings/[bookingId]"))

const routes = [
  {
    path: "/auth/login",
    component: Login,
  },
  {
    path: "/auth/register",
    component: Register,
  },
  {
    path: "/",
    component: HomePage,
  },
  { path: "/bookings", component: BookingsPage },
  { path: "/bookings/:id", component: Booking },
  { path: "*", component: NotFound },
]

render(() => <Router root={App}>{routes}</Router>, root!)
