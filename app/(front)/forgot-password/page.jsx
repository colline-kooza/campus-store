import ForgotPasswordForm from "@/components/ForgotPasswordForm";

export default function Register() {
  return (
    <section className="bg-white dark:bg-gray-900 md:pt-[3rem] pt-[2rem] lg:pt-[3.2rem]">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto  lg:py-0">
        <div className="w-full bg-white rounded-lg shadow-md dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
              Reset Password
            </h1>
            <ForgotPasswordForm />
          </div>
        </div>
      </div>
    </section>
  );
}
