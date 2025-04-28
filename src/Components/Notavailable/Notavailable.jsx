import NavBar from "../NavBar/NavBar";

const Notavailable = () => {
    return ( 
        <>
        <NavBar/>
        <div className="font-bold font m-8 text-2xl">
            <p>This feature is not available at the moment.</p>
            <p>Please check back later.</p>
        </div>
        </>
     );
}
 
export default Notavailable;