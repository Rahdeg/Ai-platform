"use client"

import {useEffect} from "react";
import {Crisp} from 'crisp-sdk-web'

export const CrispChat = ()=>{
    useEffect(() => {
      Crisp.configure("0630ec88-f0ca-4534-a06d-4172ad007c66")
    }, [])
   return null 
}