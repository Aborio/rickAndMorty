import Card from './Card';


export default function Cards(props) {
   const arr = props.characters;
   const onClose = props.onClose;
   return <div className='container'>
     
      {  
         arr.map(
            ({id,name,status,species,gender,origin,image,}) => {
               return (
               <Card 
                  key={id}
                  id={id}
                  name={name} 
                  status={status} 
                  species={species}
                  gender={gender}
                  origin={origin}
                  image={image}
                  onClose={onClose}
                />
               )
            })
      }  
   </div>;
   
}
