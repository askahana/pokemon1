
import './App.css';

async function fetchData() {
  const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    if (!response.ok) {
      throw new Error("Could not fetch resource");
    }
    const data = await response.json();
    const pokemonSprite = data.sprites.front_default;
    const imgElement = document.getElementById("pokemonSprite");

    imgElement.src = pokemonSprite;
    imgElement.style.display = "block";
  } catch (error) {
    console.error(error);
  }
}

function App() {
  return (
    <div className="App">
       <input type="text" id="pokemonName" placeholder="Enter pokemon name"/>
    <button onClick={fetchData}>Fetch Pokemon</button>
    <img src="" alt="Pokemon Sprite" id="pokemonSprite" style={{ display: 'none' }}/>

    </div>
  );
}

export default App;
