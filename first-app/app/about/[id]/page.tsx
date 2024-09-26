const Home =({params}:{
    params:{
        id:number;
    }
})=>{
    return(
<div>
    about page {params.id}
</div>
    );
}
export default Home;