import { useForm } from "react-hook-form";

const LoginPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => console.log(data);

               return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

                <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
                    {/* Email Input */}
                    <div>
                        <input
                            className="w-full px-4 py-2 border rounded-md outline-0"
                            placeholder="Enter your email"
                            {...register("email", {
                                required: "Email is required",
                                pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a valid email address" },
                            })}
                        />
                        {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
                    </div>

                    {/* Password Input */}
                    <div>
                        <input
                            type="password"
                            className="w-full px-4 py-2 border rounded-md outline-0"
                            placeholder="Enter your password"
                            {...register("password", { required: "Password is required" })}
                        />
                        {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
                    </div>

                    {/* Submit Button */}
                    <button className="w-full py-2 text-white bg-[#E5383B] rounded-lg text-lg hover:bg-[#d12f32] transition">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
