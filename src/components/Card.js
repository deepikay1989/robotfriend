import React from 'react';


// class Card extends Component {
//     render(){
//         return(
//             <div>
//                 <img src=""/>
//                 <div>
//                     <h2>Deepika</h2>
//                     <p>deepika.yadav@gmail.com</p>
//                 </div>
//             </div>
//         )
//     }
// }


const Card = ({name, email, id}) => {
    return (
        <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
            <img alt='robots' src={`https://robohash.org/${id}?size=200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;