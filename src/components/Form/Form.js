import {ButtonSearch} from "./Form.styled";


export default function FormSeach({onSubmitSearch}){
  
    return (
     
            <form onSubmit={onSubmitSearch}>
               <input name="query"  onChange={event=> event.target.value} />
               <ButtonSearch type="submit">Serch</ButtonSearch>            
            </form>

      
    )
}