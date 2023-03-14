
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function App() {
  
  

  const data=[
    {
      ProductImage:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      ProductName:"Fancy Product",
      Pricefancy:"$40.00 - $80.00",
     

 
    },
    {
      ProductImage:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      ProductName:"Special item",
      specialprice:"$20.00",
      special:"$18.00",
      Rating:"⭐⭐⭐⭐⭐",
    },
    {
      ProductImage:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      ProductName:"Sale item",
      salePrice:"$50.00",
      sale:" $25.00",
    
    },
    {
      ProductImage:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      ProductName:"Popular item",
     popularprice:"$40.00",
      Rating:"⭐⭐⭐⭐⭐",
    },
    {
      ProductImage:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      ProductName:"Sale item",
      salePrice:"$50.00",
      sale:" $25.00",

    },
    {
      ProductImage:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      ProductName:"Fancy Product",
      Pricefancy:"$120.00 - $280.00",
      
    },
    {
      ProductImage:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      ProductName:"Special Item",
      specialprice:"$20.00",
      special:"$18.00",
      Rating:"⭐⭐⭐⭐⭐",
    },
    {
      ProductImage:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      ProductName:"Popular item",
      popularprice:"$40.00",
      Rating:"⭐⭐⭐⭐⭐",
    }
  ]
const [count, setCount]=useState(0)

  return (
    <div className="App">

      <div className='nav'>
       <nav className='navbar'>
        <li>Home</li>
        <li>About</li>
     
        <label>Shop</label>&nbsp;    
        
        <select id="opt">
        <option value="All Products:" className='menu'>All Products</option>
        <hr></hr>
        <option value="Popular items"  className='menu'>Popular items</option>
        <option value="New Arrivals"  className='menu'>New Arrivals</option>
        </select>
      <h5 className='cart'>
        <button>🛒 Cart <span className='number'>{count} </span></button></h5>
       </nav>
      </div>

      <div className='setup'>
             <h1 className='index'> Shop in Style</h1>
      <h6 className='index index1'>With this Shop Homepage template</h6>

      </div><br>
      </br>
     {data.map((prod,idx,style)=><Cards
     prod={prod}
     id={idx}
     count={count}
     setCount={setCount}

     />)}
      
    </div>
  );
}
export default App;
function Cards({prod,idx,setCount,count}){
  const [show, setShow]= useState(false);
  
    function handleaddcart(){
    setShow(!show)
    setCount(count+1)
  }
  function handleremovecart(){
    setShow(!show)
    setCount(count-1)
  }
  

  return(
             <Card key={idx} style={{ width: '16rem' }}>
        <Card.Img variant="top" className='image' src={prod.ProductImage} alt="400x350" />
        <Card.Body>
                  <Card.Title>{prod.ProductName}</Card.Title>
          <Card.Title><s>{prod.specialprice}</s><span> {prod.special}</span></Card.Title>
          <Card.Text><s>{prod.salePrice}</s><span>{prod.sale}</span> </Card.Text>
          <Card.Text>{prod.popularprice} </Card.Text>
          <Card.Text>{prod.Pricefancy} </Card.Text>
          <Card.Text>{prod.Rating} </Card.Text>
          <Card.Text>{prod.Price} </Card.Text>
          <Card.Text>{prod.div} </Card.Text>
         {!show ? <Button className='add'
         onClick={handleaddcart} >Add to Cart</Button>:
         <span>
          <Button className='remove' variant='danger' onClick={handleremovecart}>
          Remove Cart</Button>
          </span> }
          </Card.Body>
      </Card>

    )   
}
