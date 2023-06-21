import { moduloProps } from "./IsolamentoReducer"

interface modProps {
  modulo: moduloProps,
  onDelete: (id:number) => void
}
const Modulo = ({modulo, onDelete}:modProps) => {
  return(
    <div>
      <button style={{float: 'right'}} onClick={() => onDelete(modulo.id)}>Excluir</button>
      <div>
        <p>Nome da edificação: {modulo.risco1?.risco}</p>
        <p>Largura: {modulo.risco1?.largura} metros</p>
        <p>Altura: {modulo.risco1?.altura} metros</p>
        <p>Somatório das áreas das abertura: {modulo.risco1?.abertura} m²</p>
        <p>Carga incêndio: {modulo.risco1?.cargaIncendio} MJ/m²</p>
        <p>Y: {modulo.risco1?.y?.toFixed(2)} %</p>
        <p>X: {modulo.risco1?.x?.toFixed(2)}</p>
        <p>Índice α: {modulo.risco1?.alfa} </p>       
        <h3>Distância: {modulo.risco1?.distancia?.toFixed(2)} metros</h3>
      </div>
      <div>
        <p>Nome da edificação: {modulo.risco2?.risco}</p>
        <p>Largura: {modulo.risco2?.largura} metros</p>
        <p>Altura: {modulo.risco2?.altura} metros</p>
        <p>Somatório das áreas das abertura: {modulo.risco2?.abertura} m²</p>
        <p>Carga incêndio: {modulo.risco2?.cargaIncendio} MJ/m²</p>
        <p>Y: {modulo.risco2?.y?.toFixed(2)} %</p>
        <p>X: {modulo.risco2?.x?.toFixed(2)}</p>
        <p>Índice α: {modulo.risco2?.alfa} </p>       
        <h3>Distância:  {modulo.risco2?.distancia?.toFixed(2)} metros</h3>
      </div>
    </div>
  )
}

export default Modulo