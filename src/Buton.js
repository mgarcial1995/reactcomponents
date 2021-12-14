function Buton(props) {
    let active = props.active
    // <div className="buton">Contact</div>
    if(active){
        return <div className="buton select_buton">{props.text}</div>
    }else{
        return <div className="buton">{props.text}</div>
    }

}

export default Buton;
