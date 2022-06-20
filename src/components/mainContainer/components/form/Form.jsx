import { useState } from 'react';
import getResultado from '../../../../services/getResultado';
import './styles.css';
const initialDataForm = {
  dinero: '',
  costo: '',
  intercambio: '',
};

const Form = ({ setResultado }) => {
  const [dataForm, setDataForm] = useState(initialDataForm);
  const { dinero, costo, intercambio } = dataForm;

  const handleChange = (e) => {
    setDataForm({ ...dataForm, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await getResultado(dataForm);
    setResultado(res.resultado);
    setDataForm(initialDataForm);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <label className="form__label">
        Dinero:
        <input
          required
          name="dinero"
          value={dinero}
          onChange={handleChange}
          title="Dinero disponible"
          className="form__input"
          type="number"
          min={2}
          max={100000}
        />
      </label>
      <label className="form__label">
        Costo:
        <input
          required
          name="costo"
          value={costo}
          onChange={handleChange}
          title="Costo de cada chocolate"
          className="form__input"
          type="number"
          min={1}
          max={Number(dinero)}
        />
      </label>
      <label className="form__label">
        Intercambio:
        <input
          required
          name="intercambio"
          value={intercambio}
          onChange={handleChange}
          title="Cantidad a intercambiar por un chocolate gratis"
          className="form__input"
          type="number"
          min={2}
          max={Number(dinero)}
        />
      </label>
      <button className="form__button">Enviar</button>
    </form>
  );
};

export default Form;
