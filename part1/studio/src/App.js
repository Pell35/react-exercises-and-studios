import RecipeDescription from './Components/Description.js';
import RecipeIngredients from './Components/Ingredients.js';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
 
  <div className="App">
   <div>
      <RecipeDescription />
      <RecipeIngredients />
   </div>
</div>
  );
}

export default App;
