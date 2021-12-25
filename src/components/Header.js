import react from "react";

export default function Header(props){
 const {countCartItems} = props; 
    return (
        <header className= " row block center">
            <div>
               <a herf="#/">
                    <h1> Shopping cart </h1>
               </a> 
            </div>
             <div>
             <a herf="#/cart"> 
             
             Cart {' '}
             {countCartItems ? (
             <button className="badge">{countCartItems} </button>

             ):( 
                 '  '
                 )
            }
             
             </a> <a herf="#/signin"> signin</a>

             </div>



        </header>


    );
}