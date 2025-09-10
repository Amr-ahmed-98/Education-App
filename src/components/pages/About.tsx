import IconDetails from "../molecules/IconDetails";
import * as icon from "../../assets/icons/icons";
function About() {
   const message: string = "Hello TypeScript 🚀";

  console.log(message); // يطبع في الـ console
  return (
    <div>
      
      <h1>
        {/* this Example to how to use this component */}
        <IconDetails
          icon={icon.Angry}
          title="About Us"
          description="Learn more about our mission and values."
          isCircle={true}
          iconColor="text-green-500"
          bgColor="bg-green-100"
          size="md"
        />
      </h1>
    </div>
  )
}

export default About