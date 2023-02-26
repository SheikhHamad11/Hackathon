import { auth } from '../config/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import {createContext,useEffect,useReducer} from 'react'

export const AuthContext=createContext();

const initialState= { isAuthenticated:false}

const reducer=((state,action)=>{
    
      
    console.log(state)
    console.log(action)

    switch(action.type){
        case 'LOGIN':
            return  {isAuthenticated:true , user: action.payload.user}
        case "LOGOUT":
           return {isAuthenticated:false}
            default:
            return state     

    }
    

})



export default function AuthContextProvider(props) {

    const[state,dispatch]=useReducer(reducer,initialState)

 useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.npmm google.com/docs/reference/js/firebase.User
        //  const uid = user.uid;
         console.log(user)
         console.log('user is signed in')
         dispatch({type:'LOGIN',payload:{user}})
        // setUser(user)
        // ...
      } else {
        // User is signed out
        // ...
        console.log('user is signed out')
      }
    });
  }, [])



  return (
    <AuthContext.Provider value={{...state,dispatch}}>
        {props.children}
        </AuthContext.Provider>
  )
}
