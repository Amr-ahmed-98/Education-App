import {Button} from "../atoms/Button";

interface ButtonsInstructorProps {
  btn1: string;
  btn2: string;
}

export default function ButtonsInstructor({
  btn1,
  btn2,
}: ButtonsInstructorProps) {
  return (
    <div className="flex gap-3 justify-end">
      <Button variant="white">{btn1}</Button>
      <Button variant="primary">{btn2}</Button>
    </div>
  );
}
