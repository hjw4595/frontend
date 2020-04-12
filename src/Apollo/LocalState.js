export const defaults = {
    isLoggenIn: localStorage.getItem("token") !== null ? true : false
}

export const resolvers ={
    Mutation: {
        logUserIn: (_,{token},{cache}) => { 
            localStorage.setItem("token", token);
            cache.writeDate({
                data:{
                    isLoggenIn:true
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
