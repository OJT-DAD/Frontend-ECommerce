
const Register = ({ handleAuth }) => {
  return (
    <div>
      <form>
        <h3 className="auth-title">Register</h3>
        <div className="form mt-2">
          <input type="text" autoComplete="off" required/>
          <label className="label-name">
            <span className="content-name">First Name</span>
          </label>
        </div>
        <div className="form mt-2">
          <input type="text" autoComplete="off" required/>
          <label className="label-name">
            <span className="content-name">Last Name</span>
          </label>
        </div>
        <div className="form mt-2">
          <input type="text" autoComplete="off" required/>
          <label className="label-name">
            <span className="content-name">Username</span>
          </label>
        </div>
        <div className="form mt-2">
          <input type="password" autoComplete="off" required/>
          <label className="label-name">
            <span className="content-name">Password</span>
          </label>
        </div>
        <button type="submit" className="btn-auth">Register</button>
      </form>
      <p className="auth-state">have an account? <span onClick={handleAuth}>login</span></p>
    </div>
  )
}

export default Register;
