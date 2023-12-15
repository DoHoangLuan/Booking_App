import MyAvatar from "../../Components/Avatar/Avatar";
import MyButton from "../../Components/Button/Button";
import MyInput from "../../Components/Input/Input";

const ProfileUser = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-2xl px-4 py-8 mx-auto lg:py-16">
        <div className="grid grid-rows-2">
          <div className="h-[100px] w-full flex justify-center ">
            <MyAvatar
              className="inline-block h-[100px] w-[100px] object-cover rounded-full ring-2 ring-white"
              alt="Luân Đỗ"
              src="/public/img/Luan.jpg"
            />
          </div>
          <div>
            <MyInput type="file"  className="border-none w-0">
              <span>Chỉnh sửa trang cá nhân</span>
            </MyInput>
          </div>
        </div>
        <form action="#">
          <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
            <div className="w-full">
              <MyInput
                type="text"
                name="firstname"
                labelName="Firstname"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Firstname"
              />
            </div>
            <div className="w-full">
              <MyInput
                type="text"
                name="Lastname"
                labelName="Last Name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Lastname"
              />
            </div>
            <div className="w-full">
              <MyInput
                type="text"
                name="email"
                labelName="Email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Email"
              />
            </div>
            <div className="w-full">
              <MyInput
                type="text"
                name="phone"
                labelName="Phone"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Phone"
              />
            </div>
            <div className="sm:col-span-2">
              <MyInput
                type="text"
                name="country"
                labelName="Country"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Type country "
              />
            </div>
            <div className="sm:col-span-2">
              <MyInput
                type="text"
                name="Address"
                labelName="Address"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Type Address "
              />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <MyButton
              type="submit"
              variant="outlined"
              className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Update product
            </MyButton>
            <MyButton
              type="button"
              className="text-red-600 inline-flex items-center hover:text-white border border-red-600 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
            >
              <svg
                className="w-5 h-5 mr-1 -ml-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              Delete
            </MyButton>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ProfileUser;
