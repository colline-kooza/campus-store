import RegisterForm from "@/components/frontend/RegisterForm";

export default function Register() {
  return (
    <section className="bg-white dark:bg-gray-900 pt-[3.8rem] lg:pt-[4rem] px-8 lg:px-[5rem] md:px-[3rem] pb-4">
      <div className="flex flex-col items-center justify-center px-6 mx-auto lg:py-0">
        <div className="w-full bg-white rounded-lg shadow-md dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
              Create a new account
            </h1>
            <RegisterForm role="USER" />
          </div>
        </div>
      </div>
    </section>
  );
}
