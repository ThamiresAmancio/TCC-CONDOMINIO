import jwtDecode from "jwt-decode";
import { api } from "./api";

const USER_KEY = "@user";


export const signIn = (user) => {
    localStorage.setItem(USER_KEY, JSON.stringify(user));

    //setando o token como padrão em todas as requisições
    api.defaults.headers.common["Authorization"] = `Bearer ${user.token}`;
};


export const signOut = () => {
    localStorage.removeItem(USER_KEY);

    api.defaults.headers.common["Authorization"] = undefined;
};

/*Pegando usuario */
export const getUser = () => {
    const userSindico  = JSON.parse(localStorage.getItem(USER_KEY));

    return userSindico ;
};

/* Setando um usuário */
export const setUser = (userSindico ) => {
    const user = JSON.parse(localStorage.getItem(USER_KEY));
    
    user.userSindico  = userSindico ;

    localStorage.setItem(USER_KEY, JSON.stringify(user));
};



/*Esta logado?*/
export const isSignedIn = () => {
    const user = JSON.parse(localStorage.getItem(USER_KEY));

    /*Se tiver um usuário e ele tiver token então retorna true */
    if (user && user.token) {
        const jwtDecoded = jwtDecode(user.token);

        /* nowTime = Hora atual = Date.now(atual) / 1000? ou 0 */
        const nowTime = (Date.now() / 1000) | 0;

        /*jwtDecoded.exp (exp) existe?? onde está?, 
        mas ele diz que se for menor que a variavel de hora, Desloga o perfil*/
        if (jwtDecoded.exp < nowTime) {
            return signOut();
        }

        /* Aqui que a mágica acontece, seta o token que permite as coisas
            *Eu acho kkk
        */
        api.defaults.headers.common["Authorization"] = `Bearer ${user.token}`;
        return true;
    }

    return false;
};
