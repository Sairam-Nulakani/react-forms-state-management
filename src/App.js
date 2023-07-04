// import formImage from './form.png';
import { useFormik } from "formik";
import * as Yup from "yup";

export default function App() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      country: "India",
      terms: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(20, "Name must be 20 Character or less")
        .required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      terms: Yup.array().required("Terms of service must be checked"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div>
      <main className="h-screen flex items-center justify-center">
        <form
          onSubmit={formik.handleSubmit}
          className="bg-white flex rounded-lg w-1/2 font-latoRegular"
        >
          <div className="flex-1 text-gray-700 p-20">
            <h1 className="text-3xl pb-2 font-latoBold ">Lets get started</h1>
            <p className="text-lg text-gray-500">
              Join our E-learning Platform today and get 500+ courses ready to
              download
            </p>
            <div className="mt-6">
              {/* Name Input Field */}
              <div className="pb-4">
                <label
                  className={`block font-latoBold text-sm pb-2 ${
                    formik.touched.name && formik.errors.name
                      ? "text-red-400"
                      : ""
                  }`}
                  htmlFor="name"
                >
                  {formik.touched.name && formik.errors.name
                    ? formik.errors.name
                    : "Name"}
                </label>
                <input
                  className="border-2 border-gray-500 p-2 rounded-md w-1/2 focus:border-teal-500 focus:ring-teal-500"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              {/* Email Input Field */}
              <div className="pb-4">
                <label
                  className={`block font-latoBold text-sm pb-2 ${
                    formik.touched.email && formik.errors.email
                      ? "text-red-400"
                      : ""
                  }`}
                  htmlFor="email"
                >
                  {formik.touched.email && formik.errors.email
                    ? formik.errors.email
                    : "Email"}
                </label>
                <input
                  className="border-2 border-gray-500 p-2 rounded-md w-1/2 focus:border-teal-500 focus:ring-teal-500"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              {/* Country Input Field */}
              <div className="pb-4">
                <label
                  className="block font-latoBold text-sm pb-2"
                  htmlFor="country"
                >
                  Country
                </label>
                <select
                  className="border-2 border-gray-500 p-2 rounded-md w-1/2 focus:border-teal-500 focus:ring-teal-500"
                  name="country"
                  value={formik.values.country}
                  onChange={formik.handleChange}
                >
                  <option>United States</option>
                  <option>United Kingdom</option>
                  <option>India</option>
                  <option>Norway</option>
                  <option>Germany</option>
                </select>
              </div>
              {/* Terms of Service*/}
              <div className="pb-4">
                <label
                  className={`block font-latoBold text-sm pb-2 ${
                    formik.touched.terms && formik.errors.terms
                      ? "text-red-400"
                      : ""
                  }`}
                  htmlFor="terms"
                >
                  {formik.touched.terms && formik.errors.terms
                    ? formik.errors.terms
                    : "Terms of Service"}
                </label>
                <div className="flex items-center gap-2 ">
                  <input
                    onChange={formik.handleChange}
                    type="checkbox"
                    name="terms"
                    value="checked"
                    className="h-5 w-5 text-teal-500 border-2 focus:border-teal-500 focus:ring-teal-500"
                  />
                  <p className="text-sm font-latoBold text-gray-500">
                    I agree to the terms and service that my data will be taken
                    and sold.
                  </p>
                </div>
              </div>
              <button
                type="submit"
                className="bg-teal-500 font-latoBold text-sm text-white py-3 mt-6 rounded-lg w-full"
              >
                Start Learning Today!
              </button>
            </div>
          </div>
          {/* <div className="relative flex-1">
            <img className=" object-cover rounded-lg"
              fill
              priority
              src={formImage}
              alt="form-learn"/>
          </div> */}
        </form>
      </main>
    </div>
  );
}
