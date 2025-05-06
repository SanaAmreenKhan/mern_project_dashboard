import express from 'express';
import { Router } from 'express';


const router =Router();

router.get("/",(req,resp)=>{
    resp.send("Hi")
})

router.get("/register",(req,resp)=>{
    resp.status(200).send("Hi register")
})

export const authRoutes = router;