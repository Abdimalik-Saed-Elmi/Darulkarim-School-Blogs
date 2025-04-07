import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate, Link } from "react-router-dom";
import { useUser } from "../hooks/useUser";
import eyeOpen from "../assets/eye-open.png";
import eyeClose from "../assets/eye-close.png";

// Import school logo image (if you have one)
import schoolLogo from "../assets/school-logo.png";
// Replace with the correct path

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { login, user } = useUser();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) navigate("/");
  }, [user, navigate]);

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post("/api/user/login-user", formData);
      console.log(data);
      toast.success("Successfully logged in");
      setLoading(false);
      login(data, data.expiresIn);
      navigate("/");
    } catch (e) {
      setLoading(false);
      toast.error(e.response?.data?.message || "Login attempt failed.");
      console.error(e);
    }
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="  flex flex-col items-center justify-center">
      {/* School Header */}
      <header className="bg-green-100 text-white py-8 md:py-4  w-screen text-center top-0  absolute ">
        <div className="container mx-auto flex items-center justify-center">
          {schoolLogo && (
            <img
              src={schoolLogo}
              alt="School Logo"
              className="md:h-28 md:w-28 h-14 w-14 mr-4 rounded-full shadow"
            />
          )}
          <div>
            <h1 className="md:text-5xl text-2xl font-bold text-red-600">
              Darulkarim Primary <br /> & Secondary School
            </h1>
          </div>
        </div>
      </header>

      {/* Login Section */}
      <div className="  flex flex-col items-center justify-center md:mt-24 -mt-24">
        <Card className="w-96 shadow-xl rounded-lg border-0">
          <CardHeader className="bg-green-300 text-black rounded-t-lg py-4">
            <CardTitle className="text-2xl font-semibold text-center">
              Log In
            </CardTitle>
            <CardDescription className="text-center text-gray-900">
              Log in to your email and password
            </CardDescription>
          </CardHeader>
          <CardContent className="py-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-600">
                  Email
                </Label>
                <Input
                  onChange={handleInputChange}
                  required
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  className="w-full rounded-md border-green-300 focus:border-green-500 focus:ring-green-500 text-lg font-semibold"
                />
              </div>
              <div className="space-y-2 relative">
                <Label htmlFor="password" className="text-gray-600">
                  Password
                </Label>
                <Input
                  type={showPassword ? "text" : "password"}
                  required
                  onChange={handleInputChange}
                  id="password"
                  placeholder="Enter your password"
                  className="w-full rounded-md border-green-300 focus:border-green-500 focus:ring-green-500 text-lg font-semibold"
                />
                <img
                  src={showPassword ? eyeClose : eyeOpen}
                  onClick={handleShowPassword}
                  className="absolute right-3 top-8 h-6 w-6 cursor-pointer"
                />
              </div>
              <Button
                disabled={loading}
                className="w-full bg-green-600 text-white font-bold rounded-md py-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
              >
                {loading ? "Logging in..." : "Log In"}
              </Button>
            </form>
          </CardContent>
          <CardFooter className="py-4 text-center text-gray-900">
            <Link
              to="#"
              className="hover:underline hover:text-blue-700 hover:font-bold"
            >
              Forgot your password?
            </Link>
          </CardFooter>
        </Card>
      </div>

      {/* Other Links (if needed) */}
      <div className="absolute bottom-8 left-8 text-gray-500">
        <Link to="/#" className="hover:underline mr-4">
          Privacy Policy
        </Link>
        <Link to="/#" className="hover:underline">
          Terms of Service
        </Link>
      </div>
    </div>
  );
}
