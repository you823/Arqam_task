import TickerBar from "./Components/common/TickerBar/TickerBar"
import FinancialSection from "./Components/Financial/FinancialSection"
import HeroSection from "./Components/HeroSection/HeroSection"
import NavbarComp from "./Components/ui/Navbar/NavbarComp"

function App() {

  return (
    <div className="App">
      <NavbarComp />
      <HeroSection/>
      <FinancialSection/>
      <TickerBar/>
    </div>
  )
}

export default App
