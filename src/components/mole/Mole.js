import './Mole.css'
import MoleIcon from './Mole.svg'
import onMoleWhacked from '../../App.js'


function Mole(props) {
  return (
    <div className="den">
      {/* <img src={props.den['isMoleVisible'] ? MoleIcon : "Mole"} className="Mole" alt="Mole" onClick={props.func}/> */}
      <img src={props.den['isMoleVisible'] ? MoleIcon : "Mole"} className={props.den['isMoleVisible'] ? "Mole" : "Mole Empty"} alt="Mole" onClick={props.func}/>
    </div>
  )
}

export default Mole
