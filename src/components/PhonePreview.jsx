import { useState } from "react";

export default function PhonePreview() {
  const [visible, setVisible] = useState(false);

  return (
    <div className="w-full md:w-[20vw] h-full flex justify-start gap-20 items-center">
      <img
        draggable={false}
        className="hidden md:block h-80"
        src="./src/assets/avatar-logo.png"
        alt="avatar"
      />
      <img
        draggable={false}
        className="my-10 max-w-[100%] md:w-9/10 md:-my-10"
        src="./src/assets/phone.png"
        alt="Phone"
      />
    </div>
  );
}
