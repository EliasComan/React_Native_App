export  const getCriptosFromDatabase = async (  setDataBase ) => {
    try {
      const response = await fetch(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false',
      )
      const json = await response.json()
      setDataBase(json)
    } catch (error) {
      console.error(error)
    }
  }