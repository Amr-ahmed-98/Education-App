import Text from "../atoms/Text";
import Title from "../atoms/Title";
import Input from "../atoms/Input";
export default function FooterInstructorProfile() {
  return (
    <div className="grid grid-cols-3 gap-6 bg-bg p-6 rounded-lg my-10">
      <div className="col-span-1">
        <Title size="md" variant="primary">
          Instructor Profile
        </Title>
        <Text size="md" variant="secondary">
          Instructor Profile
        </Text>
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
