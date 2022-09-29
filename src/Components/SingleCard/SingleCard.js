import './SingleCard.css'

const SingleCard = ({gymInfo,setTimes}) => {
    // console.log(gymInfo);

    
    
// const idFunc=({time})=>{
//     console.log(time)
// }


    const {name,picture,registered,age,time} = gymInfo
    return (
        <div className='card'>
            <img src={picture} alt="images" />
            <div className="card-contain">
                <h4 className="name">{name}</h4>
                <p className='des'>{registered}</p>
                <p className='age'>For Age : {age}</p>
                <p className='time'>Time required : {time}s</p>
                <button onClick={()=>setTimes(gymInfo.time)}>Add To List</button>
            </div>
        </div>
    );
};


export default SingleCard;