import Text from "../atoms/Text";
import Title from "../atoms/Title";
import Input from "../atoms/Input";
export default function BodyInstructorProfile() {
  return (
    <div className="grid grid-cols-3 gap-6 bg-light-primary dark:bg-dark-secondary p-6 rounded-2xl">
      <div className="col-span-1">
        <Title size="md">Instructor Profile</Title>
        <Text size="md">Instructor Profile</Text>
      </div>
      <div className="col-span-2  space-y-4">
        <Input
          label="Portfolio info"
          placeholder="https://your-portfolio.com"
        />{" "}
        <Input
          label="Portfolio info"
          placeholder="https://your-portfolio.com"
        />
        <Input
          label="Portfolio info"
          placeholder="https://your-portfolio.com"
        />
      </div>
    </div>
  );
}
