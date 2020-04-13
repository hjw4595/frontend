//오프라인상태일떄 
export const defaults = {
    isLoggedIn: Boolean(localStorage.getItem("token")) || false
}

export const resolvers ={
    Mutation: {
        logUserIn: (_,{token},{cache}) => { 
            localStorage.setItem("token", token);
            cache.writeDate({
                data:{
                    isLoggedIn:true
                }
            });
            return null;
        },
        logUSerOut:(_,__,{cache}) =>{
            localStorage.removeItem("token")
            window.location.reload();
            return null;
        }
    }
}
