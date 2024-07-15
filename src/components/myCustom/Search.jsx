import SignupFormField from "../spasComponent/SignupFormField"

const Search = () => {
  return (
    <div>
    <SignupFormField
        name="goal"
        placeholder="Search by Treatment or Spa"
        formControl={form.control}
        />
    {/* <Input type="text" placeholder="Search for treatments" className="border-darkMahron border-2 text-darkMahron  px-4 min-w-80 rounded-full mb-4 md:mb-0 md:mr-4 py-3 w-80 h-12"/> */}
    </div>
  )
}

export default Search
