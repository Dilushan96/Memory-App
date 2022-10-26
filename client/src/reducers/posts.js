export default(posts=[{tags:[]}],action) =>{

    switch (action.type){
        case 'UPDATE':
            return posts.map ((post)=> post._id ===action.payload._id ? action.payload:post);
        case 'FETCH_All':
            return action.payload;
         case 'CREATE':
            return [...posts,action.payload];
        default :
        return posts;
    }
}