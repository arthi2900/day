import logo from './logo.svg';
import './App.css';

function App() {
   return (
    <div className="App">
     <Movie />
    </div>
  );
}

function Movie() {
  const movielist=[
    {
      name:"RRR",
      poster:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTYlICAxMWsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00094579-cmlveamemf-portrait.jpg",
      about:"RRR is a period drama set in India during the 1920s, revolving around the inspiring journey of two of India`s freedom fighters - Alluri Sitarama Raju and Komaram Bheem.",
         
    }]
  return (
    <div className="movie-list">
            <img src={movielist.poster} alt={movielist.name}/>
    <h4>{movielist.name}</h4>
    <h6>{movielist.about}</h6>
    </div>
  );
}
export default App;
