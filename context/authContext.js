import { auth, db } from "@/firebase/firebase"
import { onAuthStateChanged, signOut as authSignout } from "firebase/auth"
import { doc, getDoc, onSnapshot, setDoc, updateDoc } from "firebase/firestore"

import { createContext,useContext, useEffect, useState } from "react"
const userContext = createContext()
 
export const UserProvider = ({children}) =>{
    const [currentUser,setCurrentUser] = useState(null)
    const [userdetails,setUserdetails] = useState(null)
    const [isLoading,setIsLoading] = useState(true)
    const clear = async() =>{
        try {
            
            setCurrentUser(null);
            setIsLoading(false);
        } catch (error) {
            console.error(error);
        }
    }

    
    const authStateChanged = async(user)=>{
        setIsLoading(true)
        if(!user){
            clear()
            return
        }
        const userDocExist = await getDoc(doc(db,"users",user.uid))
        if(!userDocExist.exists()){
            await setDoc(doc(db,"users",user.uid),{
                uid: user.uid,
                displayName: "",
                email: user.email,
                watchlist: [],
                currentViewing: [],
                profileStatus: "unComplete"
            })
        }
        

        onSnapshot(doc(db, "users", user.uid),(doc)=>{
            setCurrentUser(doc.data())
        });
        
        
        
        
        setIsLoading(false)
    }


    const signout = () =>{
        authSignout(auth).then(()=>clear())
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,authStateChanged)
        return () => unsubscribe()
    },[])
    return(
        <userContext.Provider value={{
            currentUser,setCurrentUser,isLoading,setIsLoading,signout,userdetails,setUserdetails
        }}>
            {children}
        </userContext.Provider>
    )
}


export const useAuth = () => useContext(userContext)