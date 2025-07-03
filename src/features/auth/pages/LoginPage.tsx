import {useEffect, useState} from "react";
import {Navigate, useNavigate} from "react-router-dom";
import {useLogin} from "../api";
import {useAuthStore} from "../store";
import LoginForm from "../components/LoginForm";
import Card from "@shared/components/Card";
import {redirectToLogin} from "@features/auth/utils/auth.ts";

function LoginPage() {

    useEffect(() => {
        redirectToLogin()
    }, [])

    return <div>Redirecting to login...</div>
}

export default LoginPage;
