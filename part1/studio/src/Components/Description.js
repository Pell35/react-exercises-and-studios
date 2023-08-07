//import { render } from 'react-dom/cjs/react-dom.production.min';
import styles from './Description.module.css';
import React from 'react';
const RecipeAuthor = () => {
    const authorLink = "https://thesuburbansoapbox.com/apple-pie-layer-cake/" ;
    const authorPhoto = "https://thesuburbansoapbox.com/wp-content/uploads/2021/02/nFMviV_w-e1614300721197-scaled-340x485.jpeg" ;
    const authorName = "Kellie" ;
    return (
        <div className = {styles.recipeAuthorBlock}>
           <img src={authorPhoto} alt = "Picture of Kellie from the Suburban Soapbox" className={styles.imageUpdates} />
           <div>
              <h3>{authorName}</h3>
              <a href={authorLink}>"The Suburban Soapbox"</a> 
           </div>
        </div>
     );
}
export default class RecipeDescription extends React.Component {
    render() {
        return (
            <div> 
            <div>
               <h1>Apple Pie Layer Cake</h1>
               <p>Buttery layers of cake, topped with layers of cream cheese and apple filling, and pie crust crumbles.</p>
            </div>
            <RecipeAuthor />
         </div>
        )
    }
}