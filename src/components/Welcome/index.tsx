import Divider from "../Divider";
import Button from "../Button";
import LoginHeader from "../LoginHeader";

function Landing() {
  return (
    <div className="flex flex-col items-center w-full max-w-[800px] lg:w-[55%] mt-[135px] p-4">
      <div className="w-full">
        <div className="flex flex-col items-center">
          <LoginHeader
            title="Welcome to the Command Centre"
            message="Login to access and manage the Townverse."
          />
          <div className="w-[514px]">
            <Button
              label="Login with Google"
              src="/images/google.png"
              classes="mt-10"
            />
            <Divider />
            <Button
              label="Login with Mobile"
              src="/images/phone.png"
              route="/mobile-login"
            />
            <Button
              label="Login with Email"
              src="/images/mail.png"
              classes="mt-3"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
