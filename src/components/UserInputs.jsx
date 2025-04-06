function UserInputs() {
  return (
    <>
      <h1>Personal information</h1>
      <div>
        <form action="#">
          <fieldset>
            <legend>Personal information</legend>
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" name="firstName" /> <br />
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" name="lastName" />
          </fieldset>
        </form>
      </div>
    </>
  );
}

export default UserInputs;
