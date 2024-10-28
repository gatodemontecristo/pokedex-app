import { loginWithEmailPassword, logoutFirebase, registerUserWithEmailPassword, singInWithGoogle } from "../../firebase/providers";
import { checkingCredentials, logout,login } from "./authSlice";
import { Notyf } from "notyf";
const notyf = new Notyf();
export const checkingAuthentication = ()=>{
    return async(dispatch) =>{
        dispatch( checkingCredentials());

    }
}

export const startGoogleSignIn = ()=>{
    return async(dispatch) =>{
        dispatch( checkingCredentials());
        const result = await singInWithGoogle();
        if(!result.ok){
            notyf.error(result.errorMessage);
            return dispatch(logout(result.errorMessage));}
        else{
            notyf.success("Sesión iniciada!");
            dispatch(login(result))
        }
      
    }
}

export const startCreatingUserWithEmailPassword = ({email,password,displayName}) =>{
    return async(dispatch)=>{
        dispatch(checkingCredentials());
        const {ok,uid,photoURL,errorMessage} = await registerUserWithEmailPassword({email,password,displayName});

        if(!ok){ 
            notyf.error(errorMessage);
            return dispatch(logout({errorMessage}));
        }
        else{
            notyf.success(`Usuario ${displayName} creado`);
            dispatch(login({uid,displayName,email,photoURL}))
        }
    }
}

export const startLoginWithEmailPassword = ({email,password}) =>{
    return async(dispatch)=>{
        dispatch(checkingCredentials());
        const result = await loginWithEmailPassword({email,password});

        if(!result.ok){
            notyf.error(result.errorMessage);
            return dispatch(logout(result));}
        else{
            notyf.success("Sesión iniciada!");
            dispatch(login(result))
        }
    }
}

export const startLogout = () =>{
    return async(dispatch)=>{

        await logoutFirebase();
        dispatch(logout());
        notyf.error("Sesión cerrada!");
    }
}

