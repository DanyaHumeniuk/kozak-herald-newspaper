import kozak from "../assets/kozakLogo.png"

const Footer = () => {
  return (
    <div className="flex flex-col w-full min-h-[200px] bg-customBlue items-center justify-center">

      <div className="w-10/12 m-10 flex flex-row items-center">
        <div>
          <img src={kozak} alt="Kozak Logo" className="h-auto w-auto max-h-[150px] max-w-[150px] lg:max-h-[180px] lg:max-w-[180px] rounded-md"/>
          <p className="text-sm max-w-[150px] text-white">Kozak Herald: Ukrainian Spirit, Island Home</p>
        </div>

        
        
      </div>

      <div className="text-transparent bg-blue-950 w-full">End</div>
      
    </div>
  )
}

export default Footer