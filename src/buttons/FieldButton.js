function FieldButton({name, func}){
return(
    <div className = "fieldButton" onClick={func}>{name}</div>
)
}

export default FieldButton