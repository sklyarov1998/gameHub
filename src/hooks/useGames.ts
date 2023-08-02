import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import { FaSadCry } from "react-icons/fa";

export interface Platform{
  id:	number;
  slug:	string;
  name:	string;
}

export interface Game {
    id: number;
    name: string;
    background_image:string
    parent_platforms: {platform:Platform}[]
    metacritic: number
  }
  
  interface FetchGameResponse {
    count: number;
    results: Game[];
  }

const useGames = ()=>{
    const controller = new AbortController()

    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");
    const  [isLoading,setLoading] = useState(false)
  
    useEffect(() => {
      setLoading(true)
      apiClient
        .get<FetchGameResponse>("/games",{signal:controller.signal})
        .then((res) => {setGames(res.data.results); setLoading(false)})
        .catch((err) => {if (err instanceof CanceledError) return; 
          setError(err.message)});

        return () => controller.abort()
    },[]);

    return {games,error, isLoading} 
}

export default useGames