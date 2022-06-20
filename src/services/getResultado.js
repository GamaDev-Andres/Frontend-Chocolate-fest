
const getResultado = async (data) => {
  try {
    const res = await fetch(`http://localhost:4000/api?n=${data.dinero}&c=${data.costo}&m=${data.intercambio}`)
    const dataApi = await res.json()
    if (dataApi.error) {
      throw new Error(dataApi.error)
    }
    return dataApi

  } catch (error) {
    console.log(error);
  }
}

export default getResultado