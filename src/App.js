import logo from './logo.svg';
import './App.css';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
function App() {
  const movielist=[
    {
        name:"RRR",
        poster:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTYlICAxMWsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00094579-cmlveamemf-portrait.jpg",
        about:"RRR is a period drama set in India during the 1920s, revolving around the inspiring journey of two of India`s freedom fighters - Alluri Sitarama Raju and Komaram Bheem.",
              },
              {
                name:"Gangubai Kathiawadi",
                poster:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-ODAlICAxMjVrIHZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00114897-mqwalhlwcp-portrait.jpg",
                about:"A true story, based on the book `Mafia Queens of Mumbai` written by S. Hussain Zaidi, is a film that celebrates the rise of a simple girl from Kathiawad who had no choice but to embrace the ways of destiny and swing it in her favour.",
                      },

                      {
                        name:"The Kashmir Files",
                        poster:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTIlICA0NTNrIHZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00110845-rrqrvaanpt-portrait.jpg",
                        about:"The Kashmir Files` is a true story, based on video interviews of the first generation victims of the Genocide of Kashmiri Pandit Community In 1990.",
                    },
                  
                    {
                      name:"Hey Sinamika",
                      poster:"https://img.ticketnew.com/tn/movie/24377/7.jpg?4472919&x-oss-process=image/resize,m_mfit,w_330,h_400/quality,q_80",
                      about:"Hey Sinamika is a Tamil movie starring Dulquer Salmaan, Kajal Aggarwal and Aditi Rao Hydari in prominent roles. It is a drama directed by Brinda.",
                  },
                    ]
   return (
    <div className="movie-list">
  {movielist.map(ml=><Movie ml={ml}/>)} 
    </div>
  );
}

function Movie({ml}) {
   return (
    <div className="movie-container">
         <Card sx={{ maxWidth: 240 }}>
      <CardActionArea>
        <CardMedia 
          component="img"
          width="240px "
  objectFit= "cover"
          src={ml.poster}
          alt={ml.name} 
          className="movie-poster"
                 />
               <h3> {ml.name}</h3>
        <p>   {ml.about}</p>
         
      </CardActionArea>
    </Card>
    
    </div>
  );
}
export default App;
