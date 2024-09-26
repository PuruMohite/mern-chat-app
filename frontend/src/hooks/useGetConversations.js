import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';


const useGetConversations = () => {
    const [loading, setLoading] = useState(false);
    const [conversations, setConversations] = useState([]);


    //The useEffect hook is used to create sideEffects in this case it is used to make an api call to the server to fetch the conversations, the dependency array is empty indicating that the effect will run only once when the component using this hook is first rendered.
    useEffect(() => {
        const getConversations = async() => {
            setLoading(true);
            try{
                const res = await fetch('/api/users');
                const data = await res.json();
                if(data.error){
                    throw new Error(data.error);
                }
                setConversations(data);
            }catch(error){
                toast.error(error.message);
            }finally{
                setLoading(false);
            }
        }
        getConversations();
    },[]);

    return {loading, conversations};
}

export default useGetConversations
