import Spinner from 'react-bootstrap/Spinner';
const Loader =()=>{
    return(
        <>
        <div style={{textAlign:"center", marginTop:'20px'}}>
            <Spinner animation="border" variant="primary" />
        </div>
        </>
    )
}
export default Loader;