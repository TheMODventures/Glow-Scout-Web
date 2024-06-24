"use Client";
import SignupBusiness from "@/components/myCustom/SignupBusiness";
import SignupUser from "@/components/myCustom/SignupUser";
import Login from "@/components/myCustom/Login";
import ForgotPassword from "@/components/myCustom/ForgotPassword";

const AuthCommon = ({ params }) => {
  const slug = params.slug;
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#351120]">
      <div className="bg-[#351120] text-white px-20 py-16 md:py-28  md:w-1/2 flex flex-col justify-center">
        <h1 className="text-3xl md:text-7xl font-light mb-4 font-raleway">
          REVEAL YOUR <br />
          BEAUTY WITH
        </h1>
        <h2 className="text-7xl md:text-9xl font-normal mb-4 font-valky leading-[80px] md:leading-[150px]">
          Glow <br /> Scout
        </h2>
        <p className="text-lg font-normal font-raleway">
          &rdquo;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut
          nibh faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Ut ut nibh faucibus.&rdquo;
        </p>
      </div>
      <div className="bg-white p-10 md:w-1/2 flex flex-col justify-center rounded-tl-[60px] rounded-bl-3xl font-raleway">
        {slug === "user" ? (
          <SignupUser />
        ) : slug === "business" ? (
          <SignupBusiness />
        ) : slug === "login" ? (
          <Login />
        ) : slug === "forgot-password" ? (
          <ForgotPassword />
        ) : null}
      </div>
    </div>
  );
};

export default AuthCommon;
