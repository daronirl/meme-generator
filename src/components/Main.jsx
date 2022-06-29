

function Main() {
    function handleClick() {
      console.log('hey there');
    }


  return (
    <main>
        <div className="form flex flex-row justify-around">
           <input type="text" className="form--input basis-auto"/>
           <input type="text" className="form--input basis-auto"/>
         </div>
         <button onClick={handleClick} className="form--button">Get a new meme image 🖼</button>
    </main>
  )
}

export default Main
