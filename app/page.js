import Header from "components/Header"
import Side from "components/side"
import Cards from "components/cards"
import Api from "components/Api"
function page() {
  
  const data =""
  if (data != ""){
    cardss = data.map(item => {
      return (
        <Cards
          key={item.id}
          {...item}
        />
      )
    })
}

  return (
    <div className="SB">
    
    <Side  />
    <div className="HB">
      <Header />
      { cardss}
    </div>
</div>
  )
}

export default page