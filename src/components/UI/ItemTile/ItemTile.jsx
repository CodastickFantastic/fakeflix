import Preview from "../Preview/Preview"
import "./ItemTile.css"

export default function ItemTile(props){
    return(
        <div className="itemTile">
            <Preview id={props.id} mediaType={props.mediaType}/>
        </div>
    )
}