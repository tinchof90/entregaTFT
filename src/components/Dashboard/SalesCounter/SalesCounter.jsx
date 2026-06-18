import './SalesCounter.css';
const SalesCounter = ({salesCounter})=>{

    return(
        <div className='card col-3'>
            <h2>Cantidad de ventas </h2>
            <span className='badge bg-success'>{salesCounter}</span>
            <br/>
        </div>
    );

}

export default SalesCounter;