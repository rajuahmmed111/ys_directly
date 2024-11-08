"use client"

import { auth, signIn, signOut } from "@/auth"
import { useEffect, useState } from "react"

const AuthButton = () => {

    const [isAuthentication, setIsAuthentication] = useState(false)

    useEffect  ( () => {
        const checkAuth = async () => {
            const session = await auth();
            setIsAuthentication(!!session?.user);
        }

        checkAuth();

    }, [])

    const handleAuthentication = () => {
        if (isAuthentication){
            signOut();
            console.log("Logged out")
        } else {
            signIn();
            console.log("Logged in")
        }
    }

    return (
        <button  onClick={handleAuthentication}><span>{isAuthentication ? "Logout" : "Login"}</span></button>
    )
}

export  default AuthButton