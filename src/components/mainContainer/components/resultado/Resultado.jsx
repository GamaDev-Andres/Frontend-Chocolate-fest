import './styles.css';
const Resultado = ({ resultado }) => {
  return (
    resultado && (
      <div className="resultado">
        <h2 className="resultado__titulo">Resultado</h2>
        <span className="resultado__text">
          La cantidad de chocolates que obtuviste :
          <h2 className="resultado__cantidad">{resultado}</h2>
        </span>
      </div>
    )
  );
};

export default Resultado;
