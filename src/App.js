import React, {useState} from 'react';
import "../src/form.css"
function App() {
  const[nameS, setNameS]=useState("");
  const[descriptionS, setDescriptionS]=useState("");
  const[nameP, setNameP]=useState("");
  const[descriptionP, setDescriptionP]=useState("");
  const[categoryP, setCategoryP]=useState("");
  const[quantityP, setQuantityP]=useState("");
  const[priceP, setPriceP]=useState("");

  const handleSubmitShop = () => {
    console.log('Name of the Shop:'+ nameS);
    console.log('Description of the Shop:'+descriptionS);
  }
  const handleSubmitProduct = () => {
    console.log('Name of the Product:'+nameP);
    console.log('Description of the Product: '+descriptionP);
    console.log('Category of the Product:'+categoryP);
    console.log('Quantity of the Product:'+quantityP);
    console.log('Price of Product:'+priceP+"$");
  }
  const handleCancel = ()=>{
    window.alert("Process Canceled");
  }
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div>
        <h1> New Shop</h1>
        <form className='form'> 
          <div>
            <label>Name: </label>
            <input type="text" id="name" value={nameS} onChange={(e) => setNameS(e.target.value)}/>
          </div>
          <div>
            <label>Description :</label>
            <input type="text" id="description" value={descriptionS} onChange={(e) => setDescriptionS(e.target.value)}/>
          </div>
          <div>
            <button className='submit' onClick={handleSubmitShop}>Submit</button>
            <button onClick={handleCancel}>Cancel</button>
          </div>
        </form>
      </div>
      <div>
        <h1> New Product</h1>
        <form className='form'> 
          <div>
            <label> Name: </label>
            <input type="text" id="name" value={nameP} onChange={(e) => setNameP(e.target.value)}/>
          </div>
          <div>
            <label>Description :</label>
            <input type="text" id="description" value={descriptionP} onChange={(e) => setDescriptionP(e.target.value)}/>
          </div>
          <div>
            <label>Category :</label>
            <input type="text" id="category" value={categoryP} onChange={(e) => setCategoryP(e.target.value)}/>
          </div>
          <div>
            <label>Quantity :</label>
            <input type="number" id="quantity" value={quantityP} onChange={(e) => setQuantityP(e.target.value)}/>
          </div>
          <div>
            <label>Price :</label>
            <input type="number" id="price" value={priceP} onChange={(e) => setPriceP(e.target.value)}/>
          </div>
          <div>
            <button className='submit' onClick={handleSubmitProduct}>Submit</button>
            <button onClick={handleCancel}>Cancel</button>
          </div>
        </form>
      </div>

    </div>
  );
}

export default App;
