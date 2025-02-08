import { useForm } from "react-hook-form";

const RegistrationPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => console.log(data);

    return (
        <section className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-center mb-6">Register</h2>
                <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
                    {/* First Name */}
                    <div>
                        <input
                            className="w-full px-4 py-2 border rounded-md"
                            placeholder="Enter your first name"
                            {...register("fullName", { required: "First name is required", minLength: { value: 2, message: "At least 2 characters" } })}
                        />
                        {errors.fullName && <span className="text-red-500 text-sm">{errors.fullName.message}</span>}
                    </div>

                    {/* Last Name */}
                    <div>
                        <input
                            className="w-full px-4 py-2 border rounded-md"
                            placeholder="Enter your last name"
                            {...register("lastName", { required: "Last name is required", minLength: { value: 2, message: "At least 2 characters" } })}
                        />
                        {errors.lastName && <span className="text-red-500 text-sm">{errors.lastName.message}</span>}
                    </div>

                    {/* Email */}
                    <div>
                        <input
                            className="w-full px-4 py-2 border rounded-md"
                            placeholder="Enter your email"
                            {...register("email", {
                                required: "Email is required",
                                pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a valid email address" },
                            })}
                        />
                        {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
                    </div>

                    <div>
                        <input type={"password"}
                            className="w-full px-4 py-2 border rounded-md"
                            placeholder="Enter your password"
                            {...register("password", {
                                required: "Password is required",
                            })}
                        />
                        {errors.password && <span className="text-red-500 text-sm">{errors.email.message}</span>}
                    </div>

                    {/* Submit Button */}
                    <button className="w-full py-2 text-white bg-red-500 rounded-lg text-lg hover:bg-red-600 transition">
                        Register
                    </button>
                </form>
            </div>
        </section>
    );
};

export default RegistrationPage;
