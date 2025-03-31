import React, { useEffect, useState } from 'react';

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Button } from './ui/button';

import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../hooks/useUser';

export default function Login() {

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const { login, user } = useUser();

    useEffect(() => {
        if (user) navigate('/');
    }, [user]);


    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();


    const handleInputChange = (event) => {
        setFormData({
            ...formData,
            [event.target.id]: event.target.value
        });
    };

    const handleSubmit = async (event) => {

        event.preventDefault();

        setLoading(true);

        try {

            const { data } = await axios.post('/api/user/login-user', formData);
            console.log(data);
            toast.success("successfully login");
            setLoading(false);
            login(data, data.expiresIn);
            navigate('/');
        } catch (e) {
            setLoading(false);
            toast.error(e.response.data);
            console.error(e);
        }

    };

    return (
        <div className='w-full'>
            <Card>
                <CardHeader>
                    <CardTitle>Login With Your Info</CardTitle>
                    <CardDescription>Login With Your Info</CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit}>
                        <div className="grid w-full items-center gap-4">

                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    onChange={handleInputChange}
                                    id="email" placeholder="Enter your Email" />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="password">Password</Label>
                                <Input
                                    type="password"
                                    onChange={handleInputChange}
                                    id="password" placeholder="Enter Your Password" />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Button>{loading ? "Login..." : "Login"}</Button>
                            </div>

                        </div>
                    </form>

                </CardContent>

            </Card>
        </div>

    );
}
